import { DisplayService } from './services/display.service';
import { EducationService } from './services/education.service';
import { PersonalProjectService } from './services/personal-project.service';
import { CertificationService } from './services/certification.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { environment } from './../environments/environment';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AppComponent } from './app.component';
import { ContactListFormComponent } from './contact-list-form/contact-list-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { ExpCardComponent } from './exp-card/exp-card.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactService } from './services/contact.service';
import { HomeService } from './services/home.service';
import { PersonalService } from './services/personal.service';
import { SocialAccountService } from './services/social-account.service';
import { WorkExService } from './services/work-ex.service';
import { SocialAccountFormComponent } from './social-account-form/social-account-form.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PersonalProjectFormComponent } from './personal-project-form/personal-project-form.component';
import { PersonalProjectCardComponent } from './personal-project-card/personal-project-card.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { CertificationFormComponent } from './certification-form/certification-form.component';
import { CertificationCardComponent } from './certification-card/certification-card.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { SkillService } from './services/skill.service';
import { EducationCardComponent } from './education-card/education-card.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    AboutMeComponent,
    AdminFormComponent,
    CustomNavbarComponent,
    PersonalDetailsFormComponent,
    ContactListFormComponent,
    ContactsComponent,
    SocialAccountFormComponent,
    WorkExperienceComponent,
    ExpCardComponent,
    PersonalProjectFormComponent,
    PersonalProjectCardComponent,
    SkillsFormComponent,
    SkillCardComponent,
    CertificationFormComponent,
    CertificationCardComponent,
    EducationFormComponent,
    EducationCardComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SnotifyModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'about-me', component: AboutMeComponent},

      {path: 'admin', component: AdminFormComponent},
    ])
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
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
