import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyCreatorComponent } from './property-creator/property-creator.component';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import { PropertyListComponent } from './property-list/property-list.component';


const routes: Routes = [
  {
    path: 'creator',
    component: PropertyCreatorComponent
  },
  {
    path: 'editor/:id',
    component: PropertyEditorComponent
  },
  {
    path: 'list',
    component: PropertyListComponent
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
export class PropertyAdminRoutingModule { }
