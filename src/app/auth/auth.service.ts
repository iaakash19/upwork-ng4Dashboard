import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  allowedUser = {
    username: 'admin',
    password: 'admin'
  };

  currentUser;
  redirectUrl = '';

  constructor() { }

  validatUser(user): boolean{
    if ( JSON.stringify(user) === JSON.stringify(this.allowedUser)  ) {
      this.currentUser = user;
      debugger;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean{
    return !!this.currentUser;
  }



}