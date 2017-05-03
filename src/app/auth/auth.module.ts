import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {GrowlModule} from 'primeng/primeng';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';


const routeConfig = [
    {
      path: 'login', 
      component: LoginComponent
    },
    {
      path: 'reset-password', 
      component: ResetPasswordComponent  
    }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GrowlModule,
    RouterModule.forChild(routeConfig)
  ],
  declarations: [LoginComponent, ResetPasswordComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }