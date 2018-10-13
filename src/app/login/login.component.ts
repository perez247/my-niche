import { AuthService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../shared/services/display.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private toaster: DisplayService) { }

  ngOnInit() {
    this.auth.verifyUser();
  }

  // registerUser(form: NgForm) {
  //   this.auth.register({email: form.value.email, password: form.value.password});
  // }

  login(form: NgForm) {
    // console.log(form.value);
    this.auth.login({email: form.value.emailSignIn, password: form.value.passwordSignIn })
    .catch(e => this.toaster.error('Invalid username/password'));
  }

  loginAsGuest() {
    this.auth.loginAsGuest()
    .catch(e => this.toaster.error());
  }

}
