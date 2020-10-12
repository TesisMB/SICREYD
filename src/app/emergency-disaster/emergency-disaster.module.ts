import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { EmergencyDisasterRoutingModule } from './emergency-disaster-routing.module';
import { EmergencyDisasterComponent } from './emergency-disaster.component';


@NgModule({
  declarations: [EmergencyDisasterComponent],
  imports: [
    SharedModule,
    EmergencyDisasterRoutingModule
  ]
})
export class EmergencyDisasterModule { }
