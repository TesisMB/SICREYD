import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';

import { SharedModule } from './../shared/shared.module';
import { AuthenticationService } from '../services';

import { ClientNavbarComponent } from '.';
import { FooterComponent } from './';
import { CarouselComponent } from './';
import {ClientHomeComponent} from './';
import {LoginComponent} from './';
@NgModule({
  declarations: [ClientNavbarComponent,FooterComponent,CarouselComponent,ClientHomeComponent,LoginComponent],
  imports: [
    SharedModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService]
})
export class ClientModule { }
