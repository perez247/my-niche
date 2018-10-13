import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-certification',
  templateUrl: './public-certification.component.html',
  styleUrls: ['./public-certification.component.css']
})
export class PublicCertificationComponent implements OnInit {
  @Input('certifications') certifications: any[];

  constructor() { }

  ngOnInit() {
  }

}
