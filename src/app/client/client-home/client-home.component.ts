import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { AuthenticationService } from './../../services/_authentication/authentication.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    
    // const isLoggin = this.authenticationService.currentUserValue;
    // if (!isLoggin)
    // {
    //   console.log(isLoggin);
    //   this.router.navigate(['**']);
      
    // } 
  }

  ngOnInit(): void {
  }

}
