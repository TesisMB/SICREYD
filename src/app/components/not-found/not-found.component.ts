import { AuthenticationService } from './../../services/_authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  imageUrl="../../../assets/codos.jpg";

  constructor(private router:Router, private currentUser: AuthenticationService) {

  }
  click()
  {
    // if (this.currentUser){}

    this.router.navigate(['']);

  }

  ngOnInit(): void {
  }

}
