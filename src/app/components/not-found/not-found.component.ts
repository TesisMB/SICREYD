import { User } from './../../models/user';
import { AuthenticationService } from './../../services/_authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
currentUser: any;
user: User;

  constructor(private router:Router, private authenticationService: AuthenticationService) {
this.currentUser = this.authenticationService.currentUserValue;
this.user = this.currentUser;

  }
  click()
  {
     if (this.currentUser){
      return this.router.navigate(['home'])
     }
else
    return this.router.navigate(['']);

  }

  ngOnInit(): void {

  }

}
