import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PublicCertificationComponent } from './components/public-certification/public-certification.component';
import { PublicContactComponent } from './components/public-contact/public-contact.component';
import { PublicEducationComponent } from './components/public-education/public-education.component';
import { PublicPersonalProjectsComponent } from './components/public-personal-projects/public-personal-projects.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { PublicSkillsComponent } from './components/public-skills/public-skills.component';
import { PublicWorkExperienceComponent } from './components/public-work-experience/public-work-experience.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PublicWorkExperienceComponent,
    PublicPersonalProjectsComponent,
    PublicProfileComponent,
    PublicEducationComponent,
    PublicSkillsComponent,
    PublicCertificationComponent,
    HomeComponent,
    LoginComponent,
    PublicContactComponent,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
  ]
})
export class PublicModule { }
