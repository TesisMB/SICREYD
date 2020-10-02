import { User } from '../../models/user';
import { AuthenticationService } from '../../services/_authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
@Component({
  selector: 'client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent/*  implements OnInit */ {
  currentUser: any;
/*   pages:{page:string,name:string}[]; */


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

/*   ngOnInit(){
    this.pages=[{page:'',name:'Inicio'},{page:'**',name:'Noticias'},{page:'**',name:'Voluntariado'}];
  }
 */
  login() {
      this.router.navigate(['login']);

  }
}
