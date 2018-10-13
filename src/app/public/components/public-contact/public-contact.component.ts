import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-contact',
  templateUrl: './public-contact.component.html',
  styleUrls: ['./public-contact.component.css']
})
export class PublicContactComponent implements OnInit {
  @Input('contacts') contacts;

  constructor() { }

  ngOnInit() {
  }

}
