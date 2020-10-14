import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataService {

  constructor(http: HttpClient) {
    super(http, '/login');

  }


}
