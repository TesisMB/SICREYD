import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models';
import { AuthenticationService } from './services';
import { AlertService } from './services';
@Component({

selector: 'app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css']
 })
export class AppComponent {
currentUser: User;
error:any= "";
handler: any;
    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    //  localStorage.clear();
      this.handler = this.authenticationService.currentUser
      .subscribe(x => {this.currentUser = x},
                err => { this.error = err;});
    
              }
                    
   OnDestroy() {
     this.handler.unsubscribe();
   }                 
                    
}
