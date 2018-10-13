import { AppFireBase } from '../common/app-firebase';
import { Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/profile/');
   }

  save(profile) {
    return this.saveWitoutKey(profile);
  }
}
