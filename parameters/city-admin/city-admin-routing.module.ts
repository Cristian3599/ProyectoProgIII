import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { CityListComponent } from './city-list/city-list.component';


const routes: Routes = [
  {
    path: 'creator',
    component: CityCreatorComponent
  },
  {
    path: 'editor/:id',
    component: CityEditorComponent
  },
  {
    path: 'list',
    component: CityListComponent
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
export class CityAdminRoutingModule { }
