import { Injectable } from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private cvArray = [
    'certifications',
    'educationList',
    'personal-projects',
    'skills',
    'work-experience'
  ];

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

  // confirm(callback, data?) {
  //   this.toaster.confirm('Are you sure', 'Delete', {
  //     ...this.config,
  //     buttons: [
  //       {text: 'Nope!', action: (toast) => this.toaster.remove(toast.id) },
  //       {text: 'Yes, Please!', action: (toast) => {
  //         //  (data) ? callback(data) : callback();
  //         console.log(callback);
  //          this.toaster.remove(toast.id);
  //         } }
  //     ]
  //   });
  // }

  convertToArray(data) {
    this.cvArray.forEach((v) => {
      data[v] = _.map( data[v], (value, key) => ({key, ...value}) );
    });
    // console.log(data);
    return data;
  }

  toDate(date) {
    return moment(date).format('YYYY-MMM');
  }

  limit(sentence: string, length = 10) {
    const stringArr = sentence.split(' ');
    if (stringArr.length > length) {
      sentence = stringArr.splice(0, length).join(' ') + '...';
    }
    return sentence;
  }

}
