import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { CustomFormsModule } from 'ng2-validation';
import { CustomNavbarComponent } from 'shared/components/custom-navbar/custom-navbar.component';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminFormComponent } from './admin/components/admin-form/admin-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PublicCertificationComponent } from './public-certification/public-certification.component';
import { PublicContactComponent } from './public-contact/public-contact.component';
import { PublicEducationComponent } from './public-education/public-education.component';
import { PublicPersonalProjectsComponent } from './public-personal-projects/public-personal-projects.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { PublicSkillsComponent } from './public-skills/public-skills.component';
import { PublicWorkExperienceComponent } from './public-work-experience/public-work-experience.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PublicContactComponent,
    CustomNavbarComponent,
    PublicWorkExperienceComponent,
    PublicPersonalProjectsComponent,
    PublicProfileComponent,
    PublicEducationComponent,
    PublicSkillsComponent,
    PublicCertificationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SharedModule,
    SnotifyModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminFormComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
