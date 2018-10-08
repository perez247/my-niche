import { DisplayService } from './../services/display.service';
import { AppPersonalDetails } from './../models/app-personal-details';
import { PersonalService } from './../services/personal.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {
  @Input('personalDetails') personalDetails: AppPersonalDetails;

  constructor(private personalService: PersonalService, private toaster: DisplayService) { }

  ngOnInit() {

  }

  submit(form: NgForm) {
    // console.log(form.value as AppPersonalDetails);
    this.personalService.save(form.value)
    .then(x => this.toaster.success())
    .catch(e => this.toaster.error());
  }

}
