import {Role} from './role';
export class User {
  userID: number;
  userDni: string;
  userPhone: string;
  userGender: string;
  isAuthenticated: boolean;
  userEmail: string;
  userPassword: string;
  userFirstname: string;
  userLastname: string;
  userAddress: string;
  token: string;
  userCreationDate: Date;
  userAvatar: any;
  userBirthdate: Date;
  roleID: number;
  roleName: Role;
}
