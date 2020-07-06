import { User } from './../../../models/user';
import { AuthenticationService } from './../../../services/_authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  pages:{page:string,name:string}[];
  userSelected:{selected:string,notSelected:string};
  client:boolean;
  product:string;


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(){
    this.pages=[{page:'',name:'Inicio'},{page:'**',name:'Noticias'},{page:'**',name:'Voluntariado'}];
    this.userSelected={selected:'LOGOUT',notSelected:'SICREYD'};
    this.client=true;
    this.router.navigate(['']);
  }
  onClick(){
    if(this.userSelected.selected=='SICREYD'){
      this.authenticationService.logout();
      this.pages=[{page:'',name:'Inicio'},{page:'**',name:'Noticias'},{page:'**',name:'Voluntariado'}];
    this.userSelected={selected:'LOGOUT',notSelected:'SICREYD'};
    this.client=true;
    this.router.navigate(['']);
      return;
    }

    if(this.userSelected.selected=='LOGOUT'){
      this.router.navigate(['login']);

   if (this.currentUser){
      this.pages=[{page:'home',name:'Inicio'},{page:'users',name:'Usuarios'}];
      this.userSelected={selected:'SICREYD', notSelected:'LOGOUT'};
      this.client=false;
      this.router.navigate(['home']);
      return;
    }
    }
  }
  // logout() {
  //     this.authenticationService.logout();
  //     this.router.navigate(['/']);
  // }
}
