import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from './../../models';

import {AuthenticationService } from './../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(
      private authenticationService: AuthenticationService,
      private router: Router,
  ) {
    //Autentifica que el usuario este conectado y registrado, para acceder a la pantalla Home
      //this.currentUser = this.authenticationService.currentUser;
  }

  ngOnInit() {
    
      //console.log(this.currentUser);
  }
}
