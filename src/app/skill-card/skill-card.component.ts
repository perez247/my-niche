import { DisplayService } from './../services/display.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  @Input('skill') skill;
  @Output('selectedSkill') selectedSkill = new EventEmitter();
  @Output('deleteSelectedSkill') deleteSelectedSkill = new EventEmitter();

  constructor(private toaster: DisplayService) { }

  ngOnInit() {
  }

  deleteSkill(key: string) {

    this.toaster.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.toaster.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => {
          this.deleteSelectedSkill.emit(key);
          this.toaster.notifier.remove(toast.id);
        } }
      ]
    });

  }

  selected(skill) {
    this.selectedSkill.emit(skill);
  }

}
