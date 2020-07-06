import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from './../../models/user';
import { UserService ,AuthenticationService } from './../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any = [];
  users: any = [];

  // a modo de prueba...
  user: User;

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
    //Autentifica que el usuario este conectado y registrado, para acceder a la pantalla Home
      this.currentUser = this.authenticationService.currentUserValue;
      this.user = this.currentUser;
  }

  ngOnInit() {
    //Carga todos los usuarios registrados.
      this.loadAllUsers();
      console.log(this.currentUser);

  }
// Metodo que borra el usuario.
  deleteUser(id: number) {
      this.userService.delete(id)
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
