import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';
import { Router } from '@angular/router';
import { CityModel } from 'src/app/models/city.model';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

declare var openPlatformModalMessage: any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-city-creator',
  templateUrl: './city-creator.component.html',
  styleUrls: ['./city-creator.component.css']
})
export class CityCreatorComponent implements OnInit {

  frmValidator: FormGroup;
  departmentList: DepartmentModel[] = [];

  constructor(private fb: FormBuilder, private cityService: CityService, private router: Router, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.formGenerator();
    this.departmentService.loadAllDepartments().subscribe(data => {this.departmentList = data});
  }

  ngAfterViewInit() {
    initMaterializeSelect();
  }

  get fv(){
    return this.frmValidator.controls;
  }

  formGenerator(){
    this.frmValidator = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      departmentId: ['', [Validators.required]]
    });
  }

  saveCity(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let c: CityModel = {
        code: this.fv.code.value,
        name : this.fv.name.value,
        _departmentId: this.fv.departmentId.value
      };
      this.cityService.saveNewCity(c).subscribe();
      openPlatformModalMessage("Data stored successfully");
      setTimeout(() => {
        this.router.navigate(['/city/list']);
      },10);
    }
  }

}
