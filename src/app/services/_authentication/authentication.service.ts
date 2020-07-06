import { DataService } from './../data.service';
import { environment } from './../../../environments/environment';
import { User } from '../../models/user';
import {Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends DataService  {
  // private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<any>;

  constructor(http: HttpClient) {
    super(http, '/login');
      // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //     return this.currentUserSubject.value;
  // }

//   login(userDni:string, userPassword:string) {
//       return this.http.post<any>(environment.URL+'/login', { userDni, userPassword })
//           .pipe(map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('currentUser', JSON.stringify(user));
//               this.currentUserSubject.next(user);
//           }

//           return user;
//       }));
// }

//   logout() {
//       // remove user from local storage and set current user to null
//       localStorage.removeItem('currentUser');
//       this.currentUserSubject.next(null);
//       this.router.navigate(['/account/login']);
//   }
 }
