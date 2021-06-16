import { AuthenticationService } from './_authentication/authentication.service';
import { environment } from '../../environments/environment';
import { Person } from '../models/person';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export class DataService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  private personSubject: BehaviorSubject<any>;
  public person: Observable<any>;
 

  constructor(private http: HttpClient,private patch:string) {

  }

//   public get userValue(): Person
//   {
//     return this.personSubject.value;
// }

  getAll(){
    return this.http.get(environment.URL+this.patch);
  }
  get(url:string){
    return this.http.get(environment.URL+this.patch);
  }
  getById(id: string) {
    return this.http.get<any>(environment.URL+this.patch+'/'+id);
}
  register(resource){
    return  this.http.post(environment.URL+this.patch, JSON.stringify(resource), this.options);
  }

  update(resource){
    return  this.http.put(environment.URL+this.patch, JSON.stringify(resource), this.options);
  }
//   userUpdate(id, params) {
//     return this.http.patch(environment.URL+this.patch+'/'+id, params)
//         .pipe(map(x => {
//             // update stored user if the logged in user updated their own record
//             if (id == this.currentUserValue.userID) {
//                 // update local storage
//                 const user = { ...this.currentUserValue, ...params };
//                 localStorage.setItem('currentUser', JSON.stringify(user));

//                 // publish updated user to subscribers
//                 this.currentUserSubject.next(user);
//             }
//             return x;
//         }));   
// }

//   delete(id){
//     return this.http.delete(environment.URL+this.patch+'/'+id)
//     .pipe(map(x => {
//       // auto logout if the logged in user deleted their own record
//       if (id == this.currentUserValue.userID) {
//           this.logout();
//       }
//       return x;
//   }));
//   }
}
