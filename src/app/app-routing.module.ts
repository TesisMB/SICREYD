import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  --- Componentes importados a routear ---

import { AuthGuard } from './_helpers';
import { NotFoundComponent } from './shared';
import { RoleName } from './models/role';

export const routes: Routes = [
  {
    path: '' ,
    loadChildren: () => import ('./client/client.module').then(x => x.ClientModule)
  },

  {
     path: 'home',
     loadChildren: () => import ('./account/account.module').then(x => x.AccountModule),
     canActivate: [AuthGuard]

    },
  {
    path: 'users',
    loadChildren: () => import ('./users/users.module').then(x => x.UsersModule) ,
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral]}
  },


    { path: 'resources',
     loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule),
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral, RoleName.Logistica]}


   },

  {path: 'emergency',
   loadChildren: () => import('./emergency-disaster/emergency-disaster.module').then(m => m.EmergencyDisasterModule),
    canActivate: [AuthGuard],
    data:{ roles: [RoleName.Admin, RoleName.CoordinadorGeneral, RoleName.CEyD]}


   },



  // Si se ingresa a una direccion inexistente, redirecciona a 404 not found.-
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
