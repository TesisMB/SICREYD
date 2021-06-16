import { User } from '../../models/user';
import { AuthenticationService } from '../../services/_authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { nextTick } from 'process';
@Component({
  selector: 'client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent {
  currentUser: User;
  handler: any;

  constructor(
      private router: Router,
  ) {
  }

  login() {
      this.router.navigate(['/cliente/login']);

  }

  
}
