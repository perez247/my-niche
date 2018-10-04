import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent implements OnInit {
  navbarSelected = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarSelected = !this.navbarSelected;
  }

}
