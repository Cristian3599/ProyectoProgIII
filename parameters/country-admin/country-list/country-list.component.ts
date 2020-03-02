import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

declare var openConfirmationModal: any;

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  p: number = 1;
  countryList: CountryModel[] = [];
  codeToRemove: String;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries = () => {
    this.countryService.loadAllCountries().subscribe(data => {this.countryList = data});
  }

  openConfirmation(code){
    this.codeToRemove = code;
    openConfirmationModal();
  }

  removeElement(){
    this.countryService.deleteCountry(this.codeToRemove).subscribe();
    this.loadCountries();
  }
}
