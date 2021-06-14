 import {RoleName, Person} from './index';

 export class User  {
  id: number;
  userDni: string;
  roleName: RoleName;
  token: string;
  isAuthenticated: boolean;
  persons: Person;


 constructor (_personID: number, _lastname: string, _firstname:string,_phone: string,_email: string,_gender: string,_birthdate: Date,_status: boolean,_id:number, _userDni:string, _roleName: RoleName, _token: string, _isAuthenticated: boolean, _persons:Person) {
   this.id = _id;
   this.userDni = _userDni;
   this.roleName = _roleName;
   this.token = _token;
   this.isAuthenticated = _isAuthenticated;
   this.persons = _persons;

}
}