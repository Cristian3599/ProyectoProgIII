import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { PasswordValidator } from 'src/app/helpers/validators/password.validator';

declare let openPlatformModalMessage: any;

@Component({
  selector: 'app-client-editor',
  templateUrl: './client-editor.component.html',
  styleUrls: ['./client-editor.component.css']
})
export class ClientEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.formGenerator();
    this.getClientInfo();
  }

  getClientInfo(){
    let identification = this.route.snapshot.paramMap.get("id");
    if (identification != undefined && identification != null){
      let client = this.clientService.searchClient(identification);
      if (client != undefined && client != null){
        this.fv.identification.setValue(client.identification);
        this.fv.firstName.setValue(client.firstName);
        this.fv.lastName.setValue(client.lastName);
        this.fv.email.setValue(client.email);
        this.fv.address.setValue(client.address);
        this.fv.phone.setValue(client.phone);
        this.fv.password.setValue(client.password);
        this.fv.birthDate.setValue(client.birthDate);
      }else {
        openPlatformModalMessage(`The client with code ${identification} does not exists!`)
        this.router.navigate(['/client/list']);
      }
    }else {
      openPlatformModalMessage("The URL is invalid!")
    }
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      identification: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      confirmPass: ['', [Validators.required]],
      address: ['', [Validators.required, ,Validators.minLength(10), Validators.maxLength(17)]],
      birthDate: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]]
    }, {validator: PasswordValidator.incorrectPassword});
  }

  saveClient(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let c: UserModel = {
        firstName: this.fv.firstName.value,
        lastName : this.fv.lastName.value,
        identification: this.fv.identification.value,
        phone: this.fv.phone.value,
        address: this.fv.address.value,
        email: this.fv.email.value,
        birthDate: this.fv.birthDate.value,
        rol: 3,
        password: this.fv.password.value
      };
      let saved = this.clientService.updateClient(c).subscribe();
      setTimeout(() => {
        this.router.navigate(['/client/list']);
      },5);
    }
  }
}
