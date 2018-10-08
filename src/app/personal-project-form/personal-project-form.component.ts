import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppPersonalProject } from './../models/app-personal-projects';
import { DisplayService } from './../services/display.service';
import { PersonalProjectService } from './../services/personal-project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-personal-project-form',
  templateUrl: './personal-project-form.component.html',
  styleUrls: ['./personal-project-form.component.css']
})
export class PersonalProjectFormComponent implements OnInit {
  projects$;
  project: AppPersonalProject;

  constructor(
    private pProjectService: PersonalProjectService,
    private toaster: DisplayService,
    private modelService: NgbModal
    ) { }

  ngOnInit() {
    this.projects$ = this.pProjectService.getAll();
  }

  submit(f: NgForm) {
    this.pProjectService.save(f.value, f.value.key)
    .then(e => {this.toaster.success(); f.reset(); },
    e => this.toaster.error());
  }

  projectSelected(project, content) {
    // console.log(project);
    this.project = project;
    this.displayForm(content);
  }

  deleteSelected(id: string) {
    this.pProjectService.delete(id)
    .then(e => this.toaster.success())
    .catch(e => this.toaster.error());
  }

  displayForm(content) {
    this.modelService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
