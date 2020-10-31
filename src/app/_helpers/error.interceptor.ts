import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertService } from './../services/_alert.service/alert.service';
import { AuthenticationService } from '../services';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authenticationService: AuthenticationService, private route: Router, private alertService: AlertService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
          if ([401].indexOf(err.status) !== -1) {
                // auto logout si devuelve un error 401 desde la API
                //this.authenticationService.logout();

            if (this.authenticationService.currentUserValue){
                this.alertService.error('No posee los permisos necesarios para efectuar esta acción');
              }
            
            else
            {
            this.authenticationService.logout();
            
            }}

            if ([403].indexOf(err.status) !== -1) {
              // redirecciona a la ruta para el 403 error.
              this.route.navigate(['/home']);
             // location.reload(true);
          }
            if (err.status === 404) {
              // redirecciona a la ruta para el 404 error.
              this.route.navigate(['**']);
              //location.reload(true);
          }
          if (err.status === 422) {
              this.alertService.warn('El DNI ingresado ya se encuentra registrado.');
          }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
