import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { CertificationFormComponent } from './components/certification-form/certification-form.component';
import { ContactListFormComponent } from './components/contact-list-form/contact-list-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';
import { PersonalProjectFormComponent } from './components/personal-project-form/personal-project-form.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { SocialAccountFormComponent } from './components/social-account-form/social-account-form.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
  ],
  declarations: [
    AdminFormComponent,
    PersonalDetailsFormComponent,
    ContactListFormComponent,
    SocialAccountFormComponent,
    PersonalProjectFormComponent,
    SkillsFormComponent,
    CertificationFormComponent,
    EducationFormComponent,
    ProfileFormComponent,
    WorkExperienceComponent
  ],
  exports: [
    AdminFormComponent,
  ]
})
export class AdminModule { }
