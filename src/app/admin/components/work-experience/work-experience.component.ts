import { AppExperience } from 'shared/models/app-experience';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DateValidator } from 'shared/common/date-validators';
import { DisplayService } from 'shared/services/display.service';
import { WorkExService } from 'shared/services/work-ex.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experiences$;
  form: FormGroup;
  subscription: Subscription;

  constructor(
    private workExService: WorkExService,
    private fb: FormBuilder,
    private toaster: DisplayService,
    private modelService: NgbModal) {
    // this.startDate = this.form.get('startDate');
  }

  ngOnInit() {
    this.startForm();
    this.experiences$ = this.workExService.all();
  }

  saveExperience() {
    this.workExService.save(this.form.value, this.form.value.key)
    .then(e => {
      this.startForm();
      this.toaster.success();
    }, e => this.toaster.error());
  }

  startForm() {
    this.form = this.fb.group({
      startDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.notFuture, DateValidator.compareDates]],
      endDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.notFuture, DateValidator.compareDates]],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      role: ['', Validators.required],
      achievements: ['', Validators.required],
      key: ['']
    });
  }

  displaySelected(event, content) {
    this.form.setValue({...event});
    this.displayForm(content);
  }

  deleteSelected(exp: AppExperience) {
    this.workExService.delete(exp.key)
      .then(e => this.toaster.success())
      .catch(e => this.toaster.error());
  }

  displayForm(content) {
    this.modelService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
