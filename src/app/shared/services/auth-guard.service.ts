import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {

    return this.auth.user$.pipe(map(user => {
      if (user && this.auth.checkStay()) {
        this.auth.logTime();
        return true;
      }

      this.auth.logout();
      this.router.navigate(['/login'], {queryParams: {
        returnUrl: state.url
      }});
      return false;
    }));
  }
}
