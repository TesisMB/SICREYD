import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ClientRoutingModule } from './client-routing.module';

import { SharedModule } from './../shared/shared.module';

import { LoginService } from './';

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
  providers: [LoginService]
})
export class ClientModule { }
