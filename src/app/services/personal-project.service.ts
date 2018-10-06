import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectService {

  constructor(private ngDb: AngularFireDatabase) { }

  save(value, id= null) {
    delete value.key;
    if (id) {
      return this.ngDb.object('public/personal-projects/' + id).update(value);
    }
    return this.ngDb.list('public/personal-projects').push(value);
  }

  getAll() {
    return this.ngDb.list('public/personal-projects').snapshotChanges()
    .pipe(map(exp => exp.map(c => ({ key: c.payload.key, ...c.payload.val()}) )));
  }

  delete(key: string) {
    return this.ngDb.object('public/personal-projects/' + key).remove().then(x => true).catch(e => false);
  }
}
