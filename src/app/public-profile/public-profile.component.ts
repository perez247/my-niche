import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  @Input('profile') profile = {};

  constructor() { }

  ngOnInit() {
  }

}
