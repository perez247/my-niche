import { AppFireBase } from './../common/app-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends AppFireBase {

  constructor(ngDb: AngularFireDatabase) {
    super(ngDb, 'public/skills/');
  }

  save(skill, key?) {
    return this.saveWithKey(skill, key);
  }

  all() {
    return this.getAll();
  }

}
