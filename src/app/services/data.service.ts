import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient,private url:string) {

  }

  getAll(){
    return this.http.get(environment.URL+this.url);
  }
    get(url:string){
    return this.http.get(environment.URL+url);
  }
   getId(id:number){
    return this.http.get(environment.URL+this.url+"/"+id);

  }
  register(resource){
    return  this.http.post(environment.URL+this.url, JSON.stringify(resource), this.options);
  }

  update(resource){
    return  this.http.put(environment.URL+this.url, JSON.stringify(resource), this.options);
  }

  delete(id){
    return this.http.delete(environment.URL+this.url+'/'+id);
  }
}
