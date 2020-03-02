import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryAdminRoutingModule } from './country-admin-routing.module';
import { CountryCreatorComponent } from './country-creator/country-creator.component';
import { CountryEditorComponent } from './country-editor/country-editor.component';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ CountryCreatorComponent, CountryEditorComponent, CountryListComponent],
  imports: [
    CommonModule,
    CountryAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CountryAdminModule { }
