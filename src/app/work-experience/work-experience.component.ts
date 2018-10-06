import { Subscription } from 'rxjs';
import { DateValidator } from './../common/date-validators';
import { AppExperience } from './../models/app-experience';
import { WorkExService } from './../services/work-ex.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experiences$;
  form: FormGroup;
  subscription: Subscription;

  constructor(private workExService: WorkExService, private fb: FormBuilder) {
    // this.startDate = this.form.get('startDate');
  }

  ngOnInit() {
    this.startForm();
    this.experiences$ = this.workExService.getAll();
  }

  saveExperience() {
    this.workExService.save(this.form.value, this.form.value.key);
    this.startForm();
  }

  startForm() {
    this.form = this.fb.group({
      startDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.compareDates]],
      endDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.compareDates]],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      role: ['', Validators.required],
      achievements: ['', Validators.required],
      key: ['']
    });
  }

  displaySelected(event) {
    this.form.setValue({...event});
  }

}
