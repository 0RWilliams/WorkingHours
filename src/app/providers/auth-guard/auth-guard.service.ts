import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) {
    }

    /**
     *
     * @param {ActivatedRouteSnapshot} route
     * @return {boolean}
     */
    canActivate(route: ActivatedRouteSnapshot): boolean {
        console.log(route);

        /*
         Temporary object - once authentication works use the value instead to inhibit page entry
         To see functionality working, set authenticated to false.
         */
        const authInfo = {authenticated: true};

        if (!authInfo.authenticated) {
            // this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
