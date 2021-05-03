import {RoleName} from './role';

/*export class User {
  id: number;
  userDni: string;
  roleName: RoleName;
  token: string;
  isAuthenticated: boolean;
  available: boolean;
}
*/
export class User {
  available: boolean;
  birthdate: Date;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  isAuthenticated: boolean;
  lastName: string;
  phone:string;
  roleName: RoleName;
  token: string;
  userDni: string;
  

 
}

