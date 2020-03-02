import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/city.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentModel } from 'src/app/models/department.model';

declare var openPlatformModalMessage: any;
declare var initMaterializeSelect: any;

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.css']
})
export class CityEditorComponent implements OnInit {

  frmValidator: FormGroup;
  departmentList: DepartmentModel[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private cityService: CityService, private router: Router, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.loadAllDepartments().subscribe(data => {this.departmentList = data});
    this.formGenerator();
    this.getCityInfo();
  }

  ngAfterViewInit() {
    initMaterializeSelect();
  }

  getCityInfo(){
    let code = this.route.snapshot.paramMap.get("id");
    if (code != undefined && code != null){
      let city = this.cityService.searchCity(code);
      if (city != undefined && city != null){
        this.fv.code.setValue(city.code);
        this.fv.name.setValue(city.name);
        this.fv.departmentId.setValue(city._departmentId)
      }else {
        openPlatformModalMessage(`The city with code ${code} does not exists!`)
        this.router.navigate(['/city/list']);
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
      departmentId: ['', [Validators.required]]
    });
  }

  saveCity(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let c: CityModel = {
        code: this.fv.code.value,
        name: this.fv.name.value,
        _departmentId: this.fv.departmentId.value
      };
      this.cityService.updateCity(c).subscribe();
        setTimeout(() => {
          this.router.navigate(['/city/list']);
        },10);
    }
  }

}
