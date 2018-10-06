import { PersonalProjectService } from './../services/personal-project.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-personal-project-form',
  templateUrl: './personal-project-form.component.html',
  styleUrls: ['./personal-project-form.component.css']
})
export class PersonalProjectFormComponent implements OnInit {
  projects$;
  project = {};

  constructor(private pProjectService: PersonalProjectService) { }

  ngOnInit() {
    this.projects$ = this.pProjectService.getAll();
  }

  submit(f) {
    this.pProjectService.save(f.value, f.value.key);
    // console.log(f.value);
    f.reset();
  }

  projectSelected(project) {
    // console.log(project);
    this.project = project;
  }

}
