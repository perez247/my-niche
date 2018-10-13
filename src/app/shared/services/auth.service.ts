import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  returnUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AngularFireAuth,
    private ngDb: AngularFireDatabase,
    private userService: UserService,
    ) {
      this.user$ = this.auth.authState;
      this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/admin';
     }

  // Uncomment these for registration
  register(value: {email: string, password: string}) {
    // const users = await this.getUsers().pipe(switchMap(x => x));
    return this.getUsers().subscribe(x => {
      if (x.length >= environment.maxUsers) { return false; }

      return this.auth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(b => {
          this.saveUser({ email: b.user.email }, b.user.uid);
          return true;
        })
        .catch(c => { throw new Error(); });
    });
  }

  getUsers() {
    return this.ngDb.list('admin/users/').valueChanges();
  }

   saveUser(user, key) {
    this.userService.save(user, key);
  }

  login(value: {email: string, password: string}) {

    return this.auth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(e => {
        this.logTime();
        this.router.navigate([this.returnUrl]);
        return true;
      }).catch(e => {throw new Error(); });
  }

  loginAsGuest() {
    return this.login({email: environment.guest.email, password: environment.guest.password});
  }

  logout() {
    localStorage.removeItem('timeLoggedIn');
    return this.auth.auth.signOut();
  }

  verifyUser() {
    this.user$.subscribe(x => {
      if (x) { this.router.navigate([this.returnUrl]); }
    });
  }

  checkStay() {
    const time = localStorage.getItem('timeLoggedIn');

    if (!moment(time, moment.ISO_8601, true).isValid) { return false; }

    return moment().isBefore(moment(time));

  }

  logTime(minutes = 5) {
    localStorage.setItem('timeLoggedIn', moment().add(minutes, 'm').toISOString());
  }
}
