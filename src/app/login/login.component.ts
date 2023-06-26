import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {
  loginForm!: FormGroup;

  constructor(private router: Router, private toastr:ToastrService ,
    private loginService: LoginService
  )  {}
  ngOnInit() {
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.toastr.error('Please fill in all the required fields.');
    } else {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.loginService.loginUser(email, password);
    }
  }
} 



}

