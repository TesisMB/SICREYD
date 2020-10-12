import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';


@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    SharedModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
