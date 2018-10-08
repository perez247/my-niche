import { DisplayService } from './../services/display.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppExperience } from './../models/app-experience';
import { WorkExService } from './../services/work-ex.service';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.css']
})
export class ExpCardComponent implements OnInit {
  @Input('ex') ex;
  @Output('selectedEx') selectedEx = new EventEmitter();
  @Output('deletSelectedEx') deletSelectedEx = new EventEmitter();

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
  }

  deleteWork(ex: AppExperience) {
    this.displayService.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.displayService.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => { this.deletSelectedEx.emit(ex); this.displayService.notifier.remove(toast.id); } }
      ]
    });
  }

  selected(ex) {
    this.selectedEx.emit(ex);
  }

}
