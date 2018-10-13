import { DisplayService } from 'shared/services/display.service';
import { HomeService } from '../shared/services/home.service';
import { ContactService } from '../shared/services/contact.service';
import { AppPersonalDetails } from '../shared/models/app-personal-details';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonalService } from '../shared/services/personal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  publicDetails: any = {};

  subscription: Subscription;

  constructor(
    private homeService: HomeService,
    private displayService: DisplayService
    ) { }

  ngOnInit() {
    this.subscription = this.homeService.getPublic().subscribe(x => {
      this.publicDetails = this.displayService.convertToArray(x);
      // console.log(this.displayService.convertToArray(x));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.contactSubscription.unsubscribe();
  }

}
