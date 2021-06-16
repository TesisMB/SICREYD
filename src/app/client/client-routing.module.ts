import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientHomeComponent } from './';
import {LoginComponent} from './';
import { LayoutComponent } from './../users/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent,
      children: [
        { path: '', component: ClientHomeComponent},
          { path: 'login', component: LoginComponent}
      ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
