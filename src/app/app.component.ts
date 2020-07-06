import { AuthenticationService } from './services/_authentication/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css']
 })
export class AppComponent {
    currentUser: any;

    constructor(
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }


}
