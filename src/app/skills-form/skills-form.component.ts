import { DisplayService } from './../services/display.service';
import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  skills$;
  skillForm;

  constructor(
    private skillService: SkillService,
    private toaster: DisplayService,
    private modelService: NgbModal) { }

  ngOnInit() {
    this.skills$ = this.skillService.all();
  }

  submit(f) {
    // console.log(f.value.key);
    this.skillService.save(f.value, f.value.key)
      .then(e => { this.toaster.success(); f.reset(); },
      e => this.toaster.error());
  }

  displaySkill(skill, content) {
    this.skillForm = skill;
    this.displayForm(content);
  }

  deleteSelected(key) {
    this.skillService.delete(key)
    .then(e => this.toaster.success())
    .catch(e => this.toaster.error());
  }

  displayForm(content) {
    this.modelService.open(content, { size: 'lg', windowClass: 'dark-modal' });
  }

}
