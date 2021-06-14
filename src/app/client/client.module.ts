import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';

import { SharedModule } from './../shared/shared.module';

import { ClientNavbarComponent } from '.';
import { FooterComponent } from './';
import { CarouselComponent } from './';
import {ClientHomeComponent} from './';
import {LoginComponent} from './';
import { LayoutComponent } from './index';
@NgModule({
  declarations: [LayoutComponent, ClientNavbarComponent,FooterComponent,CarouselComponent,ClientHomeComponent,LoginComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
