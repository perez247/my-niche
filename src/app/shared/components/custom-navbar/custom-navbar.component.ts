import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent implements OnInit {
  navbarSelected = false;
  subMenu = false;
  AppUser;
  navMenu: any[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user$.subscribe(x => this.AppUser = x);
  }

  toggleNavbar() {
    this.navbarSelected = !this.navbarSelected;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
