import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Display } from 'src/app/common/display';

export class AppFireBase {
    constructor(private ngDb: AngularFireDatabase, private path: string) { }

    saveWithKey(certification, key?) {
      certification = Display.jsonSanitize(certification);
      delete certification.key;
      if (key) {
        return this.ngDb.object(this.path + key).update(certification).then(e => true).catch(e => {throw new Error(); });
      }
      return this.ngDb.list(this.path).push(certification).then(e => true, e => {throw new Error(); });
    }

    getAll() {
      return this.ngDb.list(this.path).snapshotChanges()
      .pipe(map(exp => exp.map(c => ({ key: c.payload.key, ...c.payload.val()}) )));
    }

    delete(key: string) {
      return this.ngDb.object(this.path + key).remove().then(e => true).catch(e => {throw new Error(); });
    }

    saveWitoutKey(data) {
      data = Display.jsonSanitize(data);
      return this.ngDb.object(this.path).update(data).then(e => true).catch(e => {throw new Error(); });
    }
}
