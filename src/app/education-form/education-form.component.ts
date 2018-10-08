import { DisplayService } from './../services/display.service';
import { EducationService } from './../services/education.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DateValidator } from '../common/date-validators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  form: FormGroup;
  educationList$;

  constructor(
    private fb: FormBuilder,
    private educationService: EducationService,
    private toaster: DisplayService,
    private modelService: NgbModal
    ) { }

  ngOnInit() {
    this.startForm();
    this.educationList$ = this.educationService.all();
  }

  startForm() {
    this.form = this.fb.group({
      startDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.notFuture, DateValidator.compareDates]],
      endDate: ['', [Validators.required, DateValidator.invalidDate, DateValidator.compareDates]],
      institution: ['', Validators.required],
      location: ['', Validators.required],
      courseOfStudy: ['', Validators.required],
      grade: [''],
      key: ['']
    });
  }

  saveEducation() {
    this.educationService.save(this.form.value, this.form.value.key)
    .then(e => {
      this.toaster.success();
      this.startForm();
    }, e => this.toaster.error());
    // console.log(this.form.value, this);
  }

  displaySelected(selected, content) {
    this.form.setValue({...selected});
    this.displayForm(content);
  }

  deleteSelectedEducation(key: string) {
    this.educationService.delete(key)
    .then(e => this.toaster.success())
    .catch(e => this.toaster.error());
  }

  displayForm(content) {
    this.modelService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
