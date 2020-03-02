import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ClientCreatorComponent, ClientListComponent, ClientEditorComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ClientModule { }
