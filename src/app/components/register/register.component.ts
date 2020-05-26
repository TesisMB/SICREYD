import { AlertService, UserService, AuthenticationService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
selector: 'register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            // dni:      ['', Validators.required, Validators.maxLength(8)],
            // email:    ['', Validators.required, Validators.email],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        //Resetea las alertas
        this.alertService.clear();
        // STOP si el formulario es invalido.
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registro exitoso', true);
                    this.router.navigate(['/login'], { queryParams: { registered: true }});
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
