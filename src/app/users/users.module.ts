import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './';
import { ListComponent } from './';
import { AddEditComponent } from './';
import { NavbarComponent } from './';
import { RegisterComponent } from './';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        RegisterComponent,
        NavbarComponent
    ]
})
export class UsersModule { }
