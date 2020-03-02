import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { DepartmentService } from 'src/app/services/department.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  p: number = 1;
  departmentList: DepartmentModel[] = [];
  countryList: CountryModel[] = [];
  codeToRemove: String;

  constructor(private departmentService: DepartmentService, private countryService: CountryService) { }

  ngOnInit() {
    this.loadDepartments();
    this.loadCountries();
  }

  loadDepartments = () => {
    this.departmentService.loadAllDepartments().subscribe(data => {this.departmentList = data});
  }

  loadCountries() {
    this.countryService.loadAllCountries().subscribe(data => {this.countryList = data});
  }

  getCountry(code: String){
    let country = this.countryList.find(c => c.id == code);
    return country.name;
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.departmentService.deleteDepartment(this.codeToRemove);
    this.loadDepartments();
  }

}
