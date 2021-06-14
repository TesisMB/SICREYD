import { AlertService } from './../../services/_alert.service/alert.service';
import { User } from './../../models/user';
import { UserService } from '../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  users: any=[];
  userID: number;
  handler: any;
  error: any= "";

  constructor(private accountService: UserService,
              private alertService: AlertService) {
    
    this.handler = this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {this.users = users},
                      error => {this.error = error.message;
                                this.alertService.error("Error al cargar los datos");
                                console.log("Error: "+ this.error);});
          }

  ngOnInit() {

      
  }
  deleteUser(id: number) {    
      // const user = this.users.find(x => x.userID === id);
      // user.isDeleting = true;
      // this.accountService.delete(id)
      //     .pipe(first())
      //     .subscribe(() => {
      //         this.users = this.users.filter(x => x.userID!== id)
      //    });
  }

  GetID (id:number) {
    this.userID = id;
  }


  OnDestroy(){

    this.handler.unsubscribe();
  }
}
