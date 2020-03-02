import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';
import { Router } from '@angular/router';
import { PropertyModel } from 'src/app/models/property.model';

declare let openPlatformModalMessage: any;

@Component({
  selector: 'app-property-creator',
  templateUrl: './property-creator.component.html',
  styleUrls: ['./property-creator.component.css']
})
export class PropertyCreatorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private fb: FormBuilder, private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.formGenerator();
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      average: ['',[Validators.required]],
      description: ['',[Validators.required, Validators.minLength(20), Validators.maxLength(60)]],
      image:['',[Validators.required]]
    });
  }

  saveProperty(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let p: PropertyModel = {
        code: this.fv.code.value,
        name : this.fv.name.value,
        average: this.fv.average.value,
        description: this.fv.description.value,
        image: this.fv.image.value
      };
      this.propertyService.saveNewProperty(p).subscribe();
      setTimeout(() => {
        this.router.navigate(['property/list'])
      },400);
    }
  }
}
