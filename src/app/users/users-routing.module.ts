
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './index';
import { ListComponent } from './index';
import { AddEditComponent } from './index';
import { RegisterComponent } from './index';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            // {path: 'add', component: AddResourceComponent },
            {path: 'register', component: RegisterComponent},

            { path: 'edit/:id', component: AddEditComponent },
          ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
