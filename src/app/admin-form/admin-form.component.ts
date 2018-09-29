import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
  providers: [NgbAccordionConfig]
})
export class AdminFormComponent implements OnInit {

  constructor(private ngbConfig: NgbAccordionConfig) {
    this.ngbConfig.closeOthers = true;
    this.ngbConfig.type = 'info';
  }

  ngOnInit() {
  }

  submit(form) {
    console.log(form);
  }

}
