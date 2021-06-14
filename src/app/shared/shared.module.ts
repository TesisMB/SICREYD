import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AlertComponent } from './index';
import {NavbarComponent} from './index';
import {NotFoundComponent} from './index';



@NgModule({
  declarations: [NavbarComponent, NotFoundComponent, AlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, NotFoundComponent, CommonModule, FormsModule, AlertComponent, ReactiveFormsModule],
})
export class SharedModule { }
