import { AppFireBase } from './../common/app-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AppContacts } from '../models/app-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, '/public/contacts/');
  }

  save(contacts: AppContacts) {
    return this.saveWitoutKey(contacts);
  }

  // get() {
  //   return this.ngDb.object<AppContacts>('/public/contacts').valueChanges();
  // }
}
