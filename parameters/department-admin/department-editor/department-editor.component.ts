import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/department.model';
import { CountryService } from 'src/app/services/country.service';
import { CountryModel } from 'src/app/models/country.model';

declare var openPlatformModalMessage: any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-department-editor',
  templateUrl: './department-editor.component.html',
  styleUrls: ['./department-editor.component.css']
})
export class DepartmentEditorComponent implements OnInit {

  frmValidator: FormGroup;
  countryList: CountryModel[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private departmentService: DepartmentService, private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.loadAllCountries().subscribe(data => {this.countryList = data});
    this.formGenerator();
    this.getDepartmentInfo();
  }

  ngAfterViewInit() {
    initMaterializeSelect();
  }

  getDepartmentInfo(){
    let code = this.route.snapshot.paramMap.get("id");
    if (code != undefined && code != null){
      let department = this.departmentService.searchDepartment(code);
      if (department != undefined && department != null){
        this.fv.code.setValue(department.code);
        this.fv.name.setValue(department.name);
        this.fv.countryId.setValue(department._countryId)
      }else {
        openPlatformModalMessage(`The department with code ${code} does not exists!`)
        this.router.navigate(['/department/list']);
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
      countryId: ['', [Validators.required]]
    });
  }

  saveDepartment(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let d: DepartmentModel = {
        code: this.fv.code.value,
        name: this.fv.name.value,
        _countryId: this.fv.countryId.value
      };
      this.departmentService.updateDepartment(d);
      setTimeout(() => {
        this.router.navigate(['/department/list']);
      },5);
    }
  }

}
