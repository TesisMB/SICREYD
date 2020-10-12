import { LayoutComponent } from './../users/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddEditComponent, HomeComponent} from './index';

const routes: Routes = [
  { path:'', component: LayoutComponent,
children: [
    {    path: '', component: HomeComponent },
    {
      path: 'edit/:id',
      component: AddEditComponent
    },]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
