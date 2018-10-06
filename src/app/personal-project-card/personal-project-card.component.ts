import { PersonalProjectService } from './../services/personal-project.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-project-card',
  templateUrl: './personal-project-card.component.html',
  styleUrls: ['./personal-project-card.component.css']
})
export class PersonalProjectCardComponent implements OnInit {
  @Input('project') project;
  @Output('selected') selected = new EventEmitter();

  constructor(private pProjectSevice: PersonalProjectService) { }

  ngOnInit() {
  }

  select(project) {
    // console.log(project);
    this.selected.emit(project);
  }

  deleteProject(project) {
    this.pProjectSevice.delete(project.key);
  }

}
