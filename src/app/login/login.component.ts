import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  isFormSubmitted:boolean = false;

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) {

  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    this.isFormSubmitted = true;

    if (this.form.valid) {
      let isValid = this.authService.login(this.email.value, this.password.value);
      if (!isValid) {
        this.setFormErrors();
      }
      else {
        this.router.navigate(['/home']);
      }
    }
  }

  setFormErrors() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
