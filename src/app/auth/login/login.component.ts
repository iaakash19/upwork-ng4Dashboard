import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  usernameMessage: string;
  passwordMessage: string;
  loginFailed: string;

  private validationMessages = {
    required: 'This Field is Required',
    minLength: 'Please Enter minimum characters'
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    this.loginForm.valueChanges.subscribe(value => {
      this.loginFailed = '';
    })

    const username = this.loginForm.get('username');
     username.valueChanges.debounceTime(1000).subscribe(value => {
      this.checkErrors(username, 'username');
    });

    const password = this.loginForm.get('password');
     password.valueChanges.debounceTime(1000).subscribe(value => {
      this.checkErrors(password, 'password');
    });
                    
  }
  checkUsername() {
    this.usernameMessage = '';
    const username = this.loginForm.get('username');
    this.checkErrors(username, 'username');
  }

  checkPassword() {
    this.passwordMessage = '';
    const password = this.loginForm.get('password');
    this.checkErrors(password, 'password');
  }

  checkErrors(c: AbstractControl, type) {
    
      if( (c.dirty || c.touched) && c.errors ) {
        Object.keys(c.errors).map(key => {
          if(type == 'username') {
            this.usernameMessage = this.validationMessages[key];
          }else {
            this.passwordMessage = this.validationMessages[key];
          }
        })
      }
    }

  onSubmit() {
    console.log(this.loginForm);
    if ( this.authService.validatUser(this.loginForm.value)) {
      // If redirectUrl Exist
      if(this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      }else {
        this.router.navigate(['dashboard']);
      }
    }
    else {
      this.loginFailed = 'Username and Password does not Exist';
    }
  }

}
