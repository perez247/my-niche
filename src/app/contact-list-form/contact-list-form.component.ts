import { Component, Input, OnInit } from '@angular/core';

import { ContactService } from '../services/contact.service';
import { AppContacts } from './../models/app-contacts';
import { AppSocialAccount } from './../models/app-social-account';
import { DisplayService } from './../services/display.service';

@Component({
  selector: 'app-contact-list-form',
  templateUrl: './contact-list-form.component.html',
  styleUrls: ['./contact-list-form.component.css']
})
export class ContactListFormComponent implements OnInit {
  tempSocialAccounts: any[] = [];
  @Input('myContacts') myContacts: AppContacts;

  constructor(private contactService: ContactService, private toaster: DisplayService) { }

  ngOnInit() {
  }

  submit(contacts: AppContacts) {
    contacts.socialAccounts = this.myContacts.socialAccounts;
    this.contactService.save(contacts)
    .then(e => this.toaster.success())
    .catch(e => this.toaster.error());
  }

  socailAccountAdded(socialAccounts: AppSocialAccount[]) {
    this.myContacts.socialAccounts = socialAccounts;
    // console.log(this.socialAccounts);
  }



}
