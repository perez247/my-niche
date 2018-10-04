import { WorkExService } from './../services/work-ex.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.css']
})
export class ExpCardComponent implements OnInit {
  @Input('ex') ex;
  @Output('selectedEx') selectedEx = new EventEmitter();

  constructor(private workExService: WorkExService) { }

  ngOnInit() {
  }

  deleteWork(id: string) {
    this.workExService.delete(id).then(x => console.log(x)).catch(e => console.log(e));
  }

  selected(ex) {
    this.selectedEx.emit(ex);
  }

}
