import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorCreatorComponent } from './asesor-creator/asesor-creator.component';
import { AsesorListComponent } from './asesor-list/asesor-list.component';
import { AsesorEditorComponent } from './asesor-editor/asesor-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AsesorCreatorComponent, AsesorListComponent, AsesorEditorComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AsesorModule { }
