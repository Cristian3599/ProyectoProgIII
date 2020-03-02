import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {
    path: 'creator',
    component: ClientCreatorComponent
  },
  {
    path: 'editor/:id',
    component: ClientEditorComponent
  },
  {
    path: 'list',
    component: ClientListComponent
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
export class ClientRoutingModule { }
