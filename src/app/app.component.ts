import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-niche';
  navbarSelected = false;

  toggleNavbar() {
    this.navbarSelected = !this.navbarSelected;
    console.log(this.navbarSelected);
  }
}
