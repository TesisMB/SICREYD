import { User, Role } from '../../models';
import { AuthenticationService } from '../../services/_authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  roleUser: Role;
  pages:{page:string,name:string}[];


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.roleUser = this.currentUser.roleName;
  }

  ngOnInit(){

    this.pages=[
      //{page:'home',name:'Inicio'},
      {page:'users',name:'Usuarios'}
    ];
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['']);
  }
}
