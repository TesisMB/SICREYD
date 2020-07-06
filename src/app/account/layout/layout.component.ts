import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(  private router: Router,
    private AuthenticationService: AuthenticationService
) {
    // redirect to home if already logged in
    if (this.AuthenticationService.currentUserValue) {
        this.router.navigate(['home']);
    }
}
}
