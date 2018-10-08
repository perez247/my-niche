import { Injectable } from '@angular/core';
import {SnotifyService} from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private config = {
    timeout: 5000,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  };

  constructor(private toaster: SnotifyService) { }

  get notifier() {
    return this.toaster;
  }

  success(msg = 'Update made successfully') {
    this.toaster.success(msg, this.config);
  }

  error(msg = 'It seems something went wrong') {
    this.toaster.error(msg, this.config);
  }

  confirm(callback, data?) {
    this.toaster.confirm('Are you sure', 'Delete', {
      ...this.config,
      buttons: [
        {text: 'Nope!', action: (toast) => this.toaster.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => {
          //  (data) ? callback(data) : callback();
          console.log(callback);
           this.toaster.remove(toast.id);
          } }
      ]
    });
  }
}
