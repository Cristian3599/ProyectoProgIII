import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsesorCreatorComponent } from './asesor-creator/asesor-creator.component';
import { AsesorEditorComponent } from './asesor-editor/asesor-editor.component';
import { AsesorListComponent } from './asesor-list/asesor-list.component';

const routes: Routes = [
  {
    path: 'creator',
    component: AsesorCreatorComponent
  },
  {
    path: 'editor/:id',
    component: AsesorEditorComponent
  },
  {
    path: 'list',
    component: AsesorListComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
