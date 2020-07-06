import { DataService,AlertService, UserService, AuthenticationService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
selector: 'register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    url: any;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
    ) {}

    ngOnInit() {
      let date:Date  = new Date();
      console.log(date);
      console.log(date.toLocaleString());

        this.registerForm = this.formBuilder.group({
            userFirstName: ['', Validators.required],
            userLastname: ['', Validators.required],
            userDni:      ['', Validators.required],
            userPhone:    ['', Validators.required],
            userGender:    ['', Validators.required],
            // avalible:    ['', Validators.required],
            userEmail:    ['', Validators.required],
            userAddress: ['', Validators.required],
            userPassword: ['', Validators.required],
            userBirthdate: ['', Validators.required],
            roleID:    ['', Validators.required],
            userAvatar:    ['', Validators.required],
            // UserCreationdate: date.toLocaleString(),
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target.result;

        }
      }
    }

    onSubmit() {

        this.submitted = true;
        //Resetea las alertas
        this.alertService.clear();
        // STOP si el formulario es invalido.
        //*Falta Mensaje de alerta avisando que no se registro exitosamente. */
        if (this.registerForm.invalid) {
          console.log("No registró");
          // this.alertService.error('No se registro exitosamente');
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registro exitoso', true);
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },//**********************Error, salta directo a alertService.error************ */
                error => {
                    this.alertService.error('Registro fallido, intente nuevamente',true);
                    this.loading = false;
                    // this.alertService.success('Registro exitoso', true);
                    // this.router.navigate(['/login'], { queryParams: { registered: true }});
                });
    }
}
