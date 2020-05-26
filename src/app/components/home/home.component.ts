import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService ,AuthenticationService } from './../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  users = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
    //Autentifica que el usuario este conectado y registrado, para acceder a la pantalla Home
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    //Carga todos los usuarios registrados.
      this.loadAllUsers();
  }
// Metodo que borra el usuario.
  deleteUser(dni: number) {
      this.userService.delete(dni)
          .pipe(first())
          .subscribe(() => this.loadAllUsers());
  }
//Metodo que carga todos los usuarios.
  private loadAllUsers() {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }
}
