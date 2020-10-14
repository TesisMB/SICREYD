import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from './../../models';


import { UserService } from './../../users/index';
import {AlertService } from './../../services/index';
import { AuthenticationService } from './../../services';

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
  currentUser: User;


  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private UserService: UserService,
      private alertService: AlertService,
      private authenticationService: AuthenticationService,

  ) {
    this.currentUser = this.authenticationService.currentUserValue;

  }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      // La contraseña no es requerida en el modo Editar
      const passwordValidators = [Validators.minLength(8), Validators.maxLength(16)];
      if (this.isAddMode) {
          passwordValidators.push(Validators.required);
      }

      this.form = this.formBuilder.group({
      UserPhone:    ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      UserEmail:    ['',[Validators.email]],
      UserAddress: [''],
      UserPassword: ['', passwordValidators],
      RoleID:    ['', Validators.required],
     // userAvatar:    ['', Validators.required],
      });

      if (!this.isAddMode) {
          this.UserService.getById(this.id)
              .pipe(first())
              .subscribe(x => {
                  this.f.UserPhone.setValue(x.userPhone);
                  this.f.UserEmail.setValue(x.userEmail);
                  this.f.UserAddress.setValue(x.userAddress);
                  this.f.RoleID.setValue(x.roleID);
                 // this.f.userAvatar.setValue(x.userAvatar);
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
