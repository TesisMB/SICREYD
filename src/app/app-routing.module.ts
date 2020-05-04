import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  --- Componentes importados a routear ---
import { RegisterComponent } from './components';
import { LoginComponent } from './components/login';
import { HomeComponent } from './components/home';
import { AuthGuard } from './_helpers';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // Si se ingresa a una direccion inexistente, redirecciona a Home
  {path:'**', redirectTo: ''}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(routes);
