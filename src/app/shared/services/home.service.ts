import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private ngDb: AngularFireDatabase) { }

  getPublic () {
    return this.ngDb.object('/public').valueChanges();
  }
}
