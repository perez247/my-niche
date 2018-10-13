import { Component, OnInit, Input } from '@angular/core';
import { DisplayService } from 'shared/services/display.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-personal-projects',
  templateUrl: './public-personal-projects.component.html',
  styleUrls: ['./public-personal-projects.component.css']
})
export class PublicPersonalProjectsComponent implements OnInit {
  @Input('projects') projects;
  project = {};

  constructor(private modalService: NgbModal, private displayService: DisplayService) { }

  ngOnInit() {
  }

  displaySelected(project, content) {
    this.project = project;
    this.modalService.open(content);
  }
}
