import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityAdminRoutingModule } from './city-admin-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [CityListComponent, CityCreatorComponent, CityEditorComponent],
  imports: [
    CommonModule,
    CityAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CityAdminModule { }
