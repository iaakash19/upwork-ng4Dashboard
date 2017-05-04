import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; 



@Injectable()
export class AuthGuardService implements CanActivate {
    
    redirectUrl;

    constructor(
        private router: Router,
        private AuthService: AuthService
        ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.redirectUrl = state.url;
        return this.checkLoggedIn(state.url);
    }

    checkLoggedIn(url:string): boolean {
        if(this.AuthService.isLoggedIn()){
            return true;
        }
        
        // in case user tries to jump to restricted routes
        this.AuthService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
        
    }

}