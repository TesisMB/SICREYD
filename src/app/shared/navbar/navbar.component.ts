import { Observable, Subscription, Subject } from 'rxjs';
import { User, RoleName} from '../../models/index';
import { AuthenticationService } from '../../services/_authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  roleUser: any;
  pages:{page:string,name:string, img?:string}[];


  constructor(
      private authenticationService: AuthenticationService
      
  ) {
     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     this.roleUser = this.currentUser.roleName;

  }

  ngOnInit(){     
    
              this.mostrarPages(this.currentUser.roleName);

            //  console.log(this.currentUser);
            console.log("Role: "+this.currentUser.roleName);
  }

  mostrarPages(role) {
    switch (role)
    {
    case RoleName.Admin:
      this.pages=[{page:'/home',name:'Inicio',img:'fas fa-home'},
                  {page:'/users',name:'Usuarios'},
                  {page:'/resources',name:'Recursos'}, 
                  {page:'/emergency',name:'Emergencias - Desastres'}];
        break;

    case RoleName.CoordinadorGeneral:        
       this.pages=[{page:'/home',name:'Inicio'},
                   {page:'/users',name:'Usuarios'},
                   {page:'/resources',name:'Recursos'},
                   {page:'/emergency',name:'Emergencias - Desastres'}];
           break;

    case RoleName.CEyD:
                 
       this.pages=[ {page:'/home',name:'Inicio'},
                    {page:'/emergency',name:'Emergencias - Desastres'}];
            break;

    case RoleName.Logistica:       
       this.pages=[{page:'/home',name:'Inicio'},
                    {page:'/resources',name:'Recursos'}];
                 break;
    default:
      this.pages=[{page:'/home',name:'Inicio'}];
  }}

  logout() { 
    this.authenticationService.logout(); 
  }



}