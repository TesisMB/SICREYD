import { environment } from './../../../environments/environment';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService   {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  private patch = '/login';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

   public get currentUserValue(): User {

        return this.currentUserSubject.value;
   }

   login(userDni:string, userPassword:string) {
       return this.http.post<any>(environment.URL+this.patch, { userDni, userPassword })
           .pipe(map(user => {
                // Logea correctamente si existe un token.
          if (user && user.token) {
            // Almacena los datos del usuario y el token en el local Storage para poder navegar entre paginas.
              localStorage.setItem('currentUser', JSON.stringify(user));
               this.currentUserSubject.next(user);
           
           
            }
            return user;
          }
         )
       );
    }
 
   logout() {
    // Elimina el usuario del local Storage y lo declara null.
    localStorage.removeItem('currentUser');
       this.currentUserSubject.unsubscribe;

       this.currentUserSubject.next(null);
       this.router.navigate(['/login']);
      
    }
 }
   