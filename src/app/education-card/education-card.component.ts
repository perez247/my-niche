import { DisplayService } from './../services/display.service';
import { EducationService } from './../services/education.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
  @Input('education') education;
  @Output('selectedEducation') selectedEducation = new EventEmitter();
  @Output('deleteSelected') deleteSelected = new EventEmitter();

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

  selected(education) {
    this.selectedEducation.emit(education);
  }

  deleteEducation(key: string) {
    this.displayService.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.displayService.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => { this.deleteSelected.emit(key); this.displayService.notifier.remove(toast.id); } }
      ]
    });
  }

}
