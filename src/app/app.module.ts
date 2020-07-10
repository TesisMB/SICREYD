import { LoginService } from './services/login/login.service';
import { AuthenticationService } from './services/_authentication/authentication.service';
import { UserService } from './services/_user/user.service';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---- Importaciones internas ----
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components';
// import { LoginComponent } from './account';
// import { RegisterComponent } from './account';
import { ErrorInterceptor, JwtInterceptor} from './_helpers';
import { AlertComponent } from './components/_alert/alert.component';
// import { Register2Component } from './components/register2/register2.component';
import { NavbarComponent } from './components/index';
import { FooterComponent } from './components/index';
import { CarouselComponent } from './components/index';
import { ClientHomeComponent } from './client/client-home/client-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { AddEditComponent } from './users/add-edit/add-edit.component';
// import { LayoutComponent } from './users/layout/layout.component';
// import { ListComponent } from './users/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent,
    // RegisterComponent,
    AlertComponent,
    // Register2Component,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ClientHomeComponent,
    NotFoundComponent,
    // AddEditComponent,
    // LayoutComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthenticationService,
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


],
  bootstrap: [AppComponent]
})
export class AppModule { }
