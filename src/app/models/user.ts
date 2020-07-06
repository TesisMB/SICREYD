import {Role} from './role';
export class User {
  userID: number;
  userDni: number;
  userPhone: string;
  userGender: string;
  // avalible: boolean;
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
  roleName?: Role;
}
