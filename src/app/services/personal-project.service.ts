import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppFireBase } from './../common/app-firebase';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/personal-projects/');
  }

  save(value, id?) {
    return this.saveWithKey(value, id);
  }

  all() {
    return this.getAll();
  }

}
