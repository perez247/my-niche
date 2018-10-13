import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-skills',
  templateUrl: './public-skills.component.html',
  styleUrls: ['./public-skills.component.css']
})
export class PublicSkillsComponent implements OnInit {
  @Input('skills') skills;

  constructor() { }

  ngOnInit() {
  }

}
