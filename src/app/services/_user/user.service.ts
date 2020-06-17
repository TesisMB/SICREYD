import { DataService } from './../data.service';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService extends DataService
{
  constructor(http: HttpClient) {
    super(http, '/users');
   }
}
