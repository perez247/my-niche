import { AppExperience } from './../models/app-experience';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkExService {

  constructor(private ngDb: AngularFireDatabase) { }

  save(experienceUser, id= null) {
    const experience = new AppExperience(experienceUser).props;
    if (!id) {
      return this.ngDb.list('public/work-experience').push(experience);
    }
    return this.ngDb.object('public/work-experience/' + id).update(experience);
  }

  getAll() {
    return this.ngDb.list('public/work-experience/', ref => ref.orderByKey())
    .snapshotChanges().pipe(map(exp => exp.map(c => (new AppExperience({ key: c.payload.key, ...c.payload.val()}) ))));
  }

  delete(id: string) {
    return this.ngDb.object('public/work-experience/' + id).remove().then(x => true).catch(e => false);
  }
}
