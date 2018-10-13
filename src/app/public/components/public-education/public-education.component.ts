import { DisplayService } from 'shared/services/display.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-education',
  templateUrl: './public-education.component.html',
  styleUrls: ['./public-education.component.css']
})
export class PublicEducationComponent implements OnInit {
  @Input('educationList' ) educationList: any[];

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

}
