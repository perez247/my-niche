import { AppFireBase } from '../common/app-firebase';
import { AppExperience } from '../models/app-experience';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkExService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/work-experience/');
  }

  save(experienceUser, key?) {
    return this.saveWithKey(experienceUser, key);
  }

  all() {
    return this.getAll().pipe(map(exp => exp.map(c => (new AppExperience({ ...c }) ))));
  }

}
