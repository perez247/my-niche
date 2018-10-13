import { DisplayService } from 'shared/services/display.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-work-experience',
  templateUrl: './public-work-experience.component.html',
  styleUrls: ['./public-work-experience.component.css']
})
export class PublicWorkExperienceComponent implements OnInit {
  @Input('experience') experience: any[];
  selectedEx = {};

  constructor(private modalService: NgbModal, private displayService: DisplayService) { }

  ngOnInit() {
  }

  displayForm(content) {
    this.modalService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

  displayExperience(ex, content) {
    this.selectedEx = ex;
    this.displayForm(content);
  }

}
