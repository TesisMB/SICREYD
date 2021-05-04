import { Observable, Subscription, Subject } from 'rxjs';
import { User, RoleName} from '../../models';
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
  currentUser: any;
  roleSubscription: Subscription;
  roleUser: any = 'Admin';
  pages:{page:string,name:string, img?:string}[];


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
      
  ) {
     this.roleSubscription = this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // this.roleUser = this.currentUser.roleName;
     this.mostrarPages();

  }

  ngOnInit(){
            //  console.log(this.currentUser);
              //console.log(this.roleUser);
  }

  mostrarPages() {
    switch (this.roleUser)
    {
    case 'Admin':
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
    this.roleSubscription.unsubscribe();
    this.authenticationService.logout(); 
  }



}