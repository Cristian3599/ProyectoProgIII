import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryModel } from 'src/app/models/country.model';

declare let openPlatformModalMessage: any;

@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})
export class CountryEditorComponent implements OnInit {

  frmValidator: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this.formGenerator();
    this.getCountryInfo();
  }

  getCountryInfo(){
    let code = this.route.snapshot.paramMap.get("id");
    if (code != undefined && code != null){
      let country = this.countryService.searchCountry(code);
      if (country != undefined && country != null){
        this.fv.code.setValue(country.code);
        this.fv.name.setValue(country.name);
      }else {
        openPlatformModalMessage(`The country with code ${code} does not exists!`)
        this.router.navigate(['/country/list']);
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
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  saveCountry(){
    if (this.frmValidator.invalid){
      openPlatformModalMessage("The form is invalid!")
    }else {
      let c: CountryModel = {
        code: this.fv.code.value,
        name: this.fv.name.value
      };
      this.countryService.updateCountry(c).subscribe();
      setTimeout(() => {
        this.router.navigate(['/country/list']);
      });
    }
  }
}
