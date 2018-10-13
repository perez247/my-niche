import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialAccountService {

  constructor(private ngDb: AngularFireDatabase) { }

  getAccounts() {
    return this.ngDb.list('admin/social-accounts', ref => ref.orderByKey())
    .snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, value: c.payload.val() }))));
  }
}
