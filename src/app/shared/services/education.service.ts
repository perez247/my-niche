import { AppFireBase } from '../common/app-firebase';
import { AppEducation } from '../models/app-education';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/educationList/');
  }

  save(education, key?) {
    return this.saveWithKey(education, key);
  }

  all() {
    return this.getAll().pipe(map(exp => exp.map(c => (new AppEducation({ ...c }) ))));
  }

}
