import { User, RoleName} from '../../models/index';
import { AuthenticationService } from '../../services/_authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { nextTick } from 'process';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
handler : any;
  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) {
   this.handler = this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      

  }

  ngOnInit(){}

  get isAdmin() {
    
      return this.currentUser && this.currentUser.roleName === RoleName.Admin || RoleName.CoordinadorGeneral;
  }

  get isCoordinadorGeneral() {
    return this.currentUser && this.currentUser.roleName === RoleName.CoordinadorGeneral;
  }

  get isCoordEyD () {
    return this.currentUser && this.currentUser.roleName === RoleName.CEyD;
  }

  get isLogistica () {
    return this.currentUser && this.currentUser.roleName === RoleName.Logistica;
  }

  logout() { 
    this.authenticationService.logout();
  }
OnDestroy(){
  this.handler.unsubscribe();
}


}