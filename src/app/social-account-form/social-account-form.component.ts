import { DisplayService } from './../services/display.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

import { SocialAccountService } from '../services/social-account.service';
import { AppSocialAccount } from './../models/app-social-account';

@Component({
  selector: 'app-social-account-form',
  templateUrl: './social-account-form.component.html',
  styleUrls: ['./social-account-form.component.css']
})
export class SocialAccountFormComponent implements OnInit {
  @Output('updated') updated = new EventEmitter();
  @Input('socialAccounts') socialAccounts: AppSocialAccount[];

  availableSocialAccounts$;

  constructor(private socialAccountService: SocialAccountService, private toaster: DisplayService) { }

  ngOnInit() {
    this.availableSocialAccounts$ = this.socialAccountService.getAccounts();
  }

  addSocailAccount(url, faIcon) {
    // console.log(url.errors);
    this.socialAccounts = _.uniqBy(_.union([{url: url.value, faIcon: faIcon.value}], this.socialAccounts), 'faIcon');
    // console.log(this.socialAccounts);
    this.updated.emit(this.socialAccounts);
  }

  removeSocialAccount(sc) {
    this.toaster.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.toaster.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => {
          this.socialAccounts = this.socialAccounts.filter(fa => fa.faIcon !== sc.faIcon);
          this.updated.emit(this.socialAccounts);
          this.toaster.notifier.remove(toast.id);
        } }
      ]
    });
    // this.toaster.confirm(`Do you want to delete ${sc.faIcon}`, 'Are you sure?', {
    //   buttons: [
    //     {text: 'Nope!', action: (toast) => {this.toaster.remove(toast.id); }},
    //     {text: 'Yes, Remove!', action: (toast) => {
          // this.socialAccounts = this.socialAccounts.filter(fa => fa.faIcon !== sc.faIcon);
          // this.updated.emit(this.socialAccounts);
    //       this.toaster.remove(toast.id);
    //     }}
    //   ]
    // });
  }


}
