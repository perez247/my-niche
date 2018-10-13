import { DisplayService } from '../../services/display.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personal-project-card',
  templateUrl: './personal-project-card.component.html',
  styleUrls: ['./personal-project-card.component.css']
})
export class PersonalProjectCardComponent implements OnInit {
  @Input('project') project;
  @Output('selected') selected = new EventEmitter();
  @Output('deleteSelectedProject') deleteSelectedProject = new EventEmitter();

  constructor(public toaster: DisplayService) { }

  ngOnInit() {
  }

  select(project) {
    // console.log(project);
    this.selected.emit(project);
  }

  deleteProject(project) {

    this.toaster.notifier.confirm('Are you sure', 'Delete', {
      buttons: [
        {text: 'Nope!', action: (toast) => this.toaster.notifier.remove(toast.id) },
        {text: 'Yes, Please!', action: (toast) => {
          this.deleteSelectedProject.emit(project.key);
          this.toaster.notifier.remove(toast.id);
        } }
      ]
    });

  }

}
