import { PersonalService } from './../services/personal.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {
  @Input('personalDetails') personalDetails;

  constructor(private personalService: PersonalService) { }

  ngOnInit() {

  }

  submit(form) {
    this.personalService.save(form);
  }

}
