import { AppContacts } from './../models/app-contacts';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ContactService } from '../services/contact.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-contact-list-form',
  templateUrl: './contact-list-form.component.html',
  styleUrls: ['./contact-list-form.component.css']
})
export class ContactListFormComponent implements OnInit {
  tempSocialAccounts: any[] = [];
  @Input('myContacts') myContacts: AppContacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  submit(contacts) {
    contacts.socialAccounts = this.myContacts.socialAccounts;
    this.contactService.save(contacts);
  }

  socailAccountAdded(socialAccounts) {
    this.myContacts.socialAccounts = socialAccounts;
    // console.log(this.socialAccounts);
  }



}
