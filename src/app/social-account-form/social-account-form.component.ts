import { AppContacts } from './../models/app-contacts';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';
import { SocialAccountService } from '../services/social-account.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-social-account-form',
  templateUrl: './social-account-form.component.html',
  styleUrls: ['./social-account-form.component.css']
})
export class SocialAccountFormComponent implements OnInit {
  @Output('updated') updated = new EventEmitter();
  @Input('myContacts') myContacts: AppContacts;

  availableSocialAccounts$;

  constructor(private socialAccountService: SocialAccountService) { }

  ngOnInit() {
    this.availableSocialAccounts$ = this.socialAccountService.getAccounts();
  }

  addSocailAccount(url, faIcon) {
    // console.log(url.errors);
    this.myContacts.socialAccounts = _.uniqBy(_.union([{url: url.value, faIcon: faIcon.value}], this.myContacts.socialAccounts), 'faIcon');
    // console.log(this.myContacts.socialAccounts);
    this.updated.emit(this.myContacts.socialAccounts);
  }

  removeSocialAccount(sc) {
    if (!confirm(`Do you want to delete ${sc.url}`)) { return; }
    this.myContacts.socialAccounts = this.myContacts.socialAccounts.filter(fa => fa.faIcon !== sc.faIcon);
    this.updated.emit(this.myContacts.socialAccounts);
  }

}
