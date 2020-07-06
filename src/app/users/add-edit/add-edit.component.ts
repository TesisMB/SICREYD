import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService ,AlertService } from './../../services/index';
@Component({
  selector: 'add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private UserService: UserService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      // password not required in edit mode
      const passwordValidators = [Validators.minLength(6)];
      if (this.isAddMode) {
          passwordValidators.push(Validators.required);
      }

      this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dni: ['', Validators.required],
          password: ['', passwordValidators]
          // userPhone:    ['', Validators.required],
          // userGender:    ['', Validators.required],
          //  userEmail:    ['', Validators.required],
          //   userAddress: ['', Validators.required],
          //   userBirthdate: ['', Validators.required],
          //   roleID:    ['', Validators.required],
          //   userAvatar:    ['', Validators.required],
      });

      if (!this.isAddMode) {
          this.UserService.getById(this.id)
              .pipe(first())
              .subscribe(x => {
                  this.f.firstName.setValue(x.userFirstname);
                  this.f.lastName.setValue(x.userLastname);
                  this.f.dni.setValue(x.userDni);
              });
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
      this.UserService.register(this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Usuario agregado correctamente', { keepAfterRouteChange: true });
                  this.router.navigate(['.', { relativeTo: this.route }]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

  private updateUser() {
      this.UserService.userUpdate(this.id, this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Datos actualizado correctamente', { keepAfterRouteChange: true });
                  this.router.navigate(['..', { relativeTo: this.route }]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
