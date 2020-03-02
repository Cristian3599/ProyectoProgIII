import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyAdminRoutingModule } from './property-admin-routing.module';
import { PropertyCreatorComponent } from './property-creator/property-creator.component';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [PropertyCreatorComponent, PropertyEditorComponent, PropertyListComponent],
  imports: [
    CommonModule,
    PropertyAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PropertyAdminModule { }
