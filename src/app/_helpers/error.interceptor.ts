//import { Alert } from './../models';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authenticationService: AuthenticationService, private route: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].indexOf(err.status) !== -1) {
                // auto logout if 401 or 403 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            if ([403].indexOf(err.status) !== -1) {
              // redirecciona a la ruta para el 401 error.
              this.route.navigate(['/home']);

          }
            if (err.status === 404) {
              // redirecciona a la ruta para el 404 error.
              this.route.navigate(['**']);
              //location.reload(true);
          }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
