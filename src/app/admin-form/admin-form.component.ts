import { WorkExService } from './../services/work-ex.service';
import { HomeService } from './../services/home.service';
import { Subscription } from 'rxjs';
import { PersonalService } from './../services/personal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
  providers: [NgbAccordionConfig]
})
export class AdminFormComponent implements OnInit, OnDestroy {
  person: any = {};
  publicDetails: any = {};
  subscription: Subscription;
  model;

  constructor(
    private ngbConfig: NgbAccordionConfig,
    private homeService: HomeService,
    ) {
    this.ngbConfig.closeOthers = true;
    this.ngbConfig.type = 'info';

    // console.log(new Date().toISOString().split('T')[0]);
  }

  ngOnInit() {
    this.subscription = this.homeService.getPublic().subscribe(x => this.publicDetails = x );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
