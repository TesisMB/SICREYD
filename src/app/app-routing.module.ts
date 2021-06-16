import { LoginComponent } from './client/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  --- Componentes importados a routear ---

import { AuthGuard } from './_helpers';
import { NotFoundComponent } from './shared';
import { RoleName } from './models/role';

const clientModule = () => import ('./client/client.module').then(x => x.ClientModule);
const accountModule = () => import ('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import ('./users/users.module').then(x => x.UsersModule);
const resourcesModule = () => import('./resources/resources.module').then(m => m.ResourcesModule);
const emergencyModule = () => import('./emergency-disaster/emergency-disaster.module').then(m => m.EmergencyDisasterModule);

export const routes: Routes = [
  {
    path: '' ,
    loadChildren: accountModule,
     canActivate: [AuthGuard]
    
  },

  {
     path: 'cliente',
     loadChildren: clientModule

  },
  {
    path: 'empleados',
    loadChildren: usersModule,
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral]}
  },


  {
    path: 'recursos',
    loadChildren: resourcesModule,
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral, RoleName.Logistica]}
   },

  {
    path: 'emergencias',
    loadChildren: emergencyModule,
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral, RoleName.CEyD]}
   },
  // Si se ingresa a una direccion inexistente, redirecciona a 404 not found.-
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
