import { AlertService, UserService, AuthenticationService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
    ) {}

    ngOnInit() {
      let date:Date  = new Date();
      console.log(date);
      console.log(date.toLocaleString());

        this.registerForm = this.formBuilder.group({
            userFirstName: ['', Validators.required, Validators.name],
            userLastname: ['', Validators.required, Validators.name],
            userDni:      ['', Validators.required, Validators.maxLength(7)],
            userPhone:    ['', Validators.required, Validators.maxLength(8)],
            userGender:    ['', Validators.required],
            userEmail:    ['', Validators.required, Validators.email],
            userAddress: ['', Validators.required],
            userPassword: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(17)]],
            userBirthdate: ['', Validators.required],
            roleID:    ['', Validators.required],
            userAvatar:    [''],
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
                    this.alertService.success('Registro exitoso', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error('Registro fallido, intente nuevamente');
                    this.loading = false;

                });
    }
}
