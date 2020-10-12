import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyDisasterComponent } from './emergency-disaster.component';

const routes: Routes = [{ path: '', component: EmergencyDisasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyDisasterRoutingModule { }
