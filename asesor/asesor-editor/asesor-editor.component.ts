import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsesorService } from 'src/app/services/asesor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { PasswordValidator } from 'src/app/helpers/validators/password.validator';

declare let openPlatformModalMessage: any;

@Component({
  selector: 'app-asesor-editor',
  templateUrl: './asesor-editor.component.html',
  styleUrls: ['./asesor-editor.component.css']
})
export class AsesorEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private asesorService: AsesorService, private router: Router) { }

  ngOnInit() {
    this.formGenerator();
    this.getAsesorInfo();
  }

  getAsesorInfo(){
    let identification = this.route.snapshot.paramMap.get("id");
    if (identification != undefined && identification != null){
      let asesor = this.asesorService.searchAsesor(identification);
      if (asesor != undefined && asesor != null){
        this.fv.identification.setValue(asesor.identification);
        this.fv.firstName.setValue(asesor.firstName);
        this.fv.lastName.setValue(asesor.lastName);
        this.fv.email.setValue(asesor.email);
        this.fv.address.setValue(asesor.address);
        this.fv.phone.setValue(asesor.phone);
        this.fv.password.setValue(asesor.password);
        this.fv.birthDate.setValue(asesor.birthDate);
      }else {
        openPlatformModalMessage(`The asesor with code ${identification} does not exists!`)
        this.router.navigate(['/asesor/list']);
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

  saveAsesor(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let a: UserModel = {
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
      this.asesorService.updateAsesor(a).subscribe();
      setTimeout(() => {
        this.router.navigate(['/asesor/list']);
      },5);
    }
  }

}
