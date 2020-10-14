import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './';
import { ListComponent } from './';
import { RegisterComponent } from './register/register.component';

import { UserService } from './';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        RegisterComponent,
    ],
    providers: [
        UserService,
    ]
})
export class UsersModule { }
