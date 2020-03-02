import { Component, OnInit } from '@angular/core';
import { CityModel } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  p: number = 1;
  cityList: CityModel[] = [];
  codeToRemove: String;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities = () => {
    this.cityService.loadAllCities().subscribe(data => {this.cityList = data});
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.cityService.deleteCity(this.codeToRemove);
    this.loadCities();
  }
}
