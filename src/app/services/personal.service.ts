import { AppPersonalDetails } from './../models/app-personal-details';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private ngDb: AngularFireDatabase) { }

  save(personalDetails) {
    return this.ngDb.object('/public/personal-details').set(personalDetails).then(e => true).catch(e => false);
  }

  get() {
    return this.ngDb.object<AppPersonalDetails>('/public/personal-details').valueChanges();
  }
}
