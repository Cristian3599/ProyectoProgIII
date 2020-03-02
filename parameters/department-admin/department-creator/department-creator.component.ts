import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { DepartmentService } from 'src/app/services/department.service';

declare var openPlatformModalMessage: any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-department-creator',
  templateUrl: './department-creator.component.html',
  styleUrls: ['./department-creator.component.css']
})
export class DepartmentCreatorComponent implements OnInit {

  frmValidator: FormGroup;
  countryList: CountryModel[] = [];

  constructor(private fb: FormBuilder, private departmentService: DepartmentService, private router: Router, private countrySrvice: CountryService) { }

  ngOnInit() {
    this.formGenerator();
    this.countrySrvice.loadAllCountries().subscribe(data => {this.countryList = data});
  }

  ngAfterViewInit() {
    setTimeout(() => {
      initMaterializeSelect();
    },800);
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      countryId: ['', [Validators.required]]
    });
  }

  saveDepartment(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let d: DepartmentModel = {
        code: this.fv.code.value,
        name : this.fv.name.value,
        _countryId: this.fv.countryId.value
      };
      this.departmentService.saveNewDepartment(d).subscribe();
      setTimeout(() => {
        this.router.navigate(['/department/list']);
      },100);
    }
  }

}
