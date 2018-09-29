import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    AboutMeComponent,
    AdminFormComponent,
    CustomNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'about-me', component: AboutMeComponent},

      {path: 'admin', component: AdminFormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
