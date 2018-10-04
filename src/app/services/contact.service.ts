import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { AppContacts } from '../models/app-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private ngDb: AngularFireDatabase) { }

  save(contacts) {
    this.ngDb.object('/public/contacts').update(contacts);
  }

  get() {
    return this.ngDb.object<AppContacts>('/public/contacts').valueChanges();
  }
}
