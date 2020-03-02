import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentCreatorComponent } from './department-creator/department-creator.component';
import { DepartmentEditorComponent } from './department-editor/department-editor.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {
    path: 'creator',
    component: DepartmentCreatorComponent
  },
  {
    path: 'editor/:id',
    component: DepartmentEditorComponent
  },
  {
    path: 'list',
    component: DepartmentListComponent
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
export class DepartmentAdminRoutingModule { }
