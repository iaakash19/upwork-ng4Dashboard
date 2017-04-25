import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


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
    RouterModule.forChild(routeConfig)
  ],
  declarations: [LoginComponent, ResetPasswordComponent]
})
export class AuthModule { }