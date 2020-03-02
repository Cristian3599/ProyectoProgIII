import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { PasswordValidator } from 'src/app/helpers/validators/password.validator';

declare var openPlatformModalMessage: any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-client-creator',
  templateUrl: './client-creator.component.html',
  styleUrls: ['./client-creator.component.css']
})
export class ClientCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder, private secService: SecurityService, private clientService: ClientService, private router: Router) { }

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
  
  ngOnInit() {
    this.formGenerator();
  }

  ngAfterViewInit() {
    initMaterializeSelect();
  }

  savePeople(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let u: UserModel = {
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
      this.clientService.saveNewClient(u).subscribe();
      setTimeout(() => {
        this.loginEvent();
      });
    }
  }

  loginEvent(){
    if(this.frmValidator.invalid){
      openPlatformModalMessage("Invalid data!");
    }else {
      let u = this.fv.email.value;
      let p = this.fv.password.value;
      let user = this.secService.loginUser(u, p);
      if(user != null){
        console.log(user);
        this.router.navigate(['/home']);
      }else {
        openPlatformModalMessage("The data is invalid!")
      }
    }
  }

}
