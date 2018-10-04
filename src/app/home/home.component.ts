import { HomeService } from './../services/home.service';
import { ContactService } from './../services/contact.service';
import { AppPersonalDetails } from './../models/app-personal-details';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonalService } from '../services/personal.service';
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
    private contactService: ContactService
    ) { }

  ngOnInit() {
    this.subscription = this.homeService.getPublic().subscribe(x => this.publicDetails = x );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.contactSubscription.unsubscribe();
  }

}
