import { AppFireBase } from './../common/app-firebase';
import { Display } from './../common/display';
import { AppPersonalDetails } from './../models/app-personal-details';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PersonalService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, '/public/personal-details/');
   }

  save(personalDetails: AppPersonalDetails) {
    return this.saveWitoutKey(personalDetails);
  }

  // get() {
  //   return this.ngDb.object<AppPersonalDetails>('/public/personal-details').valueChanges();
  // }
}
