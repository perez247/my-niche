import { AppFireBase } from '../common/app-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificationService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/certifications/');
  }

  save(certification, key?) {
    return this.saveWithKey(certification, key);
  }

  all() {
    return this.getAll();
  }

}
