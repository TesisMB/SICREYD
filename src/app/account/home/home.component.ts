import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import {AuthenticationService } from './../../services';
import { User } from 'src/app/models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser : User;
  constructor(
      private authenticationService: AuthenticationService,
      private router: Router,
  ) {
  this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    console.log(this.currentUser);
  }
}
