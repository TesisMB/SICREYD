import { AuthenticationService } from './services/_authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Role } from './models';

@Component({

selector: 'app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css']
 })
export class AppComponent {
currentUser: User;
// role: Role;
    constructor(private authenticationService: AuthenticationService) {


        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

}
