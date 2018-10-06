import { PersonalService } from './../services/personal.service';
import { Component, OnInit, Input } from '@angular/core';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {
  @Input('personalDetails') personalDetails;

  constructor(private personalService: PersonalService, private toaster: SnotifyService) { }

  ngOnInit() {

  }

  submit(form) {
    this.personalService.save(form).then(x =>

    this.toaster.success('Save made successfully', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true
    }));
  }

}
