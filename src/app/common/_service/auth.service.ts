import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate{

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(localStorage.getItem('Token') != undefined && localStorage.getItem('Token') != null) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}