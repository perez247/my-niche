import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CertificationCardComponent } from 'shared/components/certification-card/certification-card.component';
import { CustomNavbarComponent } from 'shared/components/custom-navbar/custom-navbar.component';
import { ExpCardComponent } from 'shared/components/exp-card/exp-card.component';
import { PersonalProjectCardComponent } from 'shared/components/personal-project-card/personal-project-card.component';
import { SkillCardComponent } from 'shared/components/skill-card/skill-card.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CertificationService } from 'shared/services/certification.service';
import { ContactService } from 'shared/services/contact.service';
import { DisplayService } from 'shared/services/display.service';
import { EducationService } from 'shared/services/education.service';
import { HomeService } from 'shared/services/home.service';
import { PersonalProjectService } from 'shared/services/personal-project.service';
import { PersonalService } from 'shared/services/personal.service';
import { SkillService } from 'shared/services/skill.service';
import { SocialAccountService } from 'shared/services/social-account.service';
import { UserService } from 'shared/services/user.service';
import { WorkExService } from 'shared/services/work-ex.service';

import { EducationCardComponent } from './components/education-card/education-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
  ],
  declarations: [
    ExpCardComponent,
    PersonalProjectCardComponent,
    SkillCardComponent,
    CertificationCardComponent,
    EducationCardComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ExpCardComponent,
    PersonalProjectCardComponent,
    SkillCardComponent,
    CertificationCardComponent,
    EducationCardComponent,
  ],
  providers: [
    PersonalService,
    ContactService,
    SocialAccountService,
    HomeService,
    WorkExService,
    CertificationService,
    SkillService,
    PersonalProjectService,
    EducationService,
    DisplayService,
    AuthService,
    AuthGuardService,
    UserService,
  ]
})
export class SharedModule { }
