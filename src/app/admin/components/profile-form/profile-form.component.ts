import { DisplayService } from '../../../shared/services/display.service';
import { ProfileService } from '../../../shared/services/profile.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  @Input('profile') profile;

  constructor(private profileService: ProfileService, private toaster: DisplayService) { }

  ngOnInit() {
  }

  submit(f) {
    this.profileService.save(f.value)
    .then(e => this.toaster.success())
    .catch(e => this.toaster.error());
  }

}
