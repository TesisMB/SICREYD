import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  --- Componentes importados a routear ---
// import { RegisterComponent } from './account';
import { LoginComponent } from './components/index';
import { HomeComponent } from './components/index';
import { AuthGuard } from './_helpers';
// import { Register2Component } from './components/register2/register2.component';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {path: '', component: ClientHomeComponent},
  {path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  // { path: 'account', loadChildren: accountModule, canActivate:[AuthGuard] },
  // Si se ingresa a una direccion inexistente, redirecciona a Home
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
