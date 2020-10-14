import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = null;

  constructor(private accountService: UserService) {}

  ngOnInit() {

      this.accountService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
          console.log(this.users);
          console.log(this.accountService);
          }

  deleteUser(id: number) {
      const user = this.users.find(x => x.userID === id);
      user.isDeleting = true;
      this.accountService.delete(id)
          .pipe(first())
          .subscribe(() => {
              this.users = this.users.filter(x => x.userID!== id)
          });
  }
}
