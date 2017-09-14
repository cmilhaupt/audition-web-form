import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JudgementComponent } from './judgement.component';
import { LeaderAuditioneeComponent } from './leader-auditionee.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    JudgementComponent,
    LeaderAuditioneeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'audition-web-form'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
