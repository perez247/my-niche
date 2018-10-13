import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { CustomNavbarComponent } from 'shared/components/custom-navbar/custom-navbar.component';
import { SharedModule } from 'shared/shared.module';

import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AdminFormComponent } from './admin/components/admin-form/admin-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/components/home/home.component';
import { LoginComponent } from './public/components/login/login.component';
import { PublicModule } from './public/public.module';
import { AuthGuardService } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavbarComponent,
  ],
  imports: [
    NgbModule,
    SharedModule,
    SnotifyModule,
    AdminModule,
    PublicModule,
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
