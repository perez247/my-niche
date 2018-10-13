import { AppFireBase } from '../common/app-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'admin/users/');
  }

  save(users, key?) {
    return this.saveWithKey(users, key);
  }

  // get()
}
