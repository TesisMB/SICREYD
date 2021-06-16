
export class Person {
    personID : number;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    gender: string;
    birthdate: Date;
    status: boolean;
    constructor(_personID: number, _lastname: string, _firstname:string,_phone: string,_email: string,_gender: string,_birthdate: Date,_status: boolean)

{
    this.personID = _personID;
    this.lastName = _lastname;
    this.firstName = _firstname;
    this.phone = _phone;
    this.email = _email;
    this.gender = _gender;
    this.birthdate = _birthdate;
    this.status = _status;

}



}


 //   userAddress: string;
  //  userCreationDate: Date;