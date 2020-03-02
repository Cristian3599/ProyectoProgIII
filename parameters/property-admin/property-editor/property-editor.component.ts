import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyModel } from 'src/app/models/property.model';

declare let openPlatformModalMessage: any;

@Component({
  selector: 'app-property-editor',
  templateUrl: './property-editor.component.html',
  styleUrls: ['./property-editor.component.css']
})
export class PropertyEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.formGenerator();
    this.getPropertyInfo();
  }

  getPropertyInfo(){
    let code = this.route.snapshot.paramMap.get("id");
    if (code != undefined && code != null){
      let property = this.propertyService.searchProperty(code);
      if (property != undefined && property != null){
        this.fv.code.setValue(property.code);
        this.fv.name.setValue(property.name);
        this.fv.description.setValue(property.description);
        this.fv.average.setValue(property.average);
        this.fv.image.setValue(property.image);
      }else {
        openPlatformModalMessage(`The property with code ${code} does not exists!`)
        this.router.navigate(['/property/list']);
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
      this.propertyService.updateProperty(p).subscribe();
      setTimeout(() => {
        this.router.navigate(['/property/list']);
      },5);
    }
  }
}
