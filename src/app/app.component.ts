import { AuthenticationService } from './services/_authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({

  selector: 'app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css']
 })
export class AppComponent {
  // isOnline : boolean;
    constructor(private router: Router, private authenticationService: AuthenticationService) {

      // let currentUser = authenticationService.currentUserValue;
      // this.isOnline = !currentUser;

    }
}
