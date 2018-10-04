import { DateValidator } from './../common/date-validators';
import { AppExperience } from './../models/app-experience';
import { WorkExService } from './../services/work-ex.service';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experience$;
  workEx: any = {};
  std = 5;

  form: FormGroup;
  startDate;
  // = new FormGroup({
  //   startDate: new FormControl('', Validators.required),
  //   endDate: new FormControl('', Validators.required),
  //   companyName: new FormControl('', [Validators.required, Validators.minLength(this.std)]),
  //   location: new FormControl('', Validators.required),
  //   role: new FormControl('', Validators.required),
  //   achievements: new FormControl('', Validators.required),
  // });

  // endDate = this.form.get('endDate');
  // companyName = this.form.get('companyName');
  // location = this.form.get('location');
  // role = this.form.get('role');
  // achievements = this.form.get('achievements');

  constructor(private workExService: WorkExService, private calender: NgbCalendar, private fb: FormBuilder) {
    this.startForm();
    // this.startDate = this.form.get('startDate');
  }

  ngOnInit() {
    this.experience$ = this.workExService.getAll();
    // this.form.valueChanges.subscribe(x => console.log(x));
    // this.form.get('role').setValidators()
  }

  saveExperience() {
    // console.log(this.form.value);
    this.workExService.save(this.form.value, this.form.value.key);
    // console.log(f.value.key);
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
    this.form.setValue(event);
  }

}
