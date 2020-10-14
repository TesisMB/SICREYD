import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//---- Importaciones internas ----
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor, JwtInterceptor} from './_helpers';
import { AppComponent } from './app.component';
//*****************Components************ */
import { HomeComponent } from './components';
import { LoginComponent } from './components';
import { AlertComponent } from './components';
import { NotFoundComponent } from './components';
import { NavbarComponent} from './components';
import { ResourcesComponent } from './components';
import { EmergencyDisasterComponent } from './components';

//**************CLIENT************* */
import { ClientNavbarComponent } from './client';
import { FooterComponent } from './client';
import { CarouselComponent } from './client';
import {ClientHomeComponent} from './client';
//***************SERVICES*********** */
import { LoginService } from './services';
import { AuthenticationService } from './services';
import { UserService } from './services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    ClientNavbarComponent,
    FooterComponent,
    CarouselComponent,
    ClientHomeComponent,
    NotFoundComponent,
    NavbarComponent,
    ResourcesComponent,
    EmergencyDisasterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
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
