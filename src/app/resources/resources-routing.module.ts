import { VehiclesComponent } from './vehicles/vehicles.component';
import { MaterialsComponent } from './materials/materials.component';
import { MedicineComponent } from './medicine/medicine.component';
import { Role } from './../models/role';
import { AuthGuard } from './../_helpers/auth.guard';
import { VoluntariesComponent } from './voluntaries/voluntaries.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';

const routes: Routes = [{ 
  path: '',
     component: ResourcesComponent,
     children: [
   
      { path: 'voluntarios',
     component: VoluntariesComponent,
       canActivate:[AuthGuard],
       data: {roles: [Role.CoordinadorGeneral,Role.Admin]}},
 { 
      path: 'medicamentos',
      component: MedicineComponent},
  {   
     path: 'materiales',
     component: MaterialsComponent
},
{     path: 'vehiculos',
       component: VehiclesComponent
      }
        ]
          }
            ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
