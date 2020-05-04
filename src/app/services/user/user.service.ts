import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get<User[]>(`/users`);
  }

  register(user: User) {
      return this.http.post(`/users/register`, user);
  }

  delete(dni: number) {
      return this.http.delete(`/users/${dni}`);
  }
}
