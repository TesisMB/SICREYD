import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

//---- Importaciones internas ----
//******************Modulos ********************** */
import { AccountModule } from './account/account.module';
import { ClientModule } from './client/client.module';
import { UsersModule } from './users/users.module';
import { ResourcesModule } from './resources/resources.module';
import { EmergencyDisasterModule } from './emergency-disaster/emergency-disaster.module';
import { SharedModule } from './shared/shared.module';
//*****************Components************ */
import { AppComponent } from './app.component';
//import { AlertComponent } from './components';


//**************CLIENT************* */

//***************SERVICES*********** */
import { AuthenticationService } from './services';
import { ErrorInterceptor, JwtInterceptor} from './_helpers';
@NgModule({
  declarations: [
    AppComponent,

   // AlertComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AccountModule,
    SharedModule,
    ClientModule,
    UsersModule,
    EmergencyDisasterModule,
    ResourcesModule,
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


],
  bootstrap: [AppComponent]
})
export class AppModule { }
