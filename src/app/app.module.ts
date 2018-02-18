import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicModule } from './dynamic-module';
import { MatInputModule, MatButtonModule, MatSelectModule, MatAutocompleteModule,
  MatOptionModule, MatRadioModule, MatTabsModule, MatTableModule, MatFormFieldModule,
  MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LoginGuard } from './shared/login-guard.module';
import { AppComponent } from './app.component';
import { JudgementComponent } from './judgement/judgement.component';
import { LeaderAuditioneeComponent } from './leader-auditionee/leader-auditionee.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { ReviewComponent } from './review/review.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { CommentsService } from './shared/comments.service';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LeaderAuditioneeComponent,
    JudgementComponent,
    WelcomeComponent,
    TabPageComponent,
    ReviewComponent
  ],
  entryComponents: [ JudgementComponent ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'audition-web-form'),
    AngularFireDatabaseModule,
    DynamicModule.withComponents([JudgementComponent]),
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthService,
    LoginGuard,
    CommentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    firebase.initializeApp(environment.firebase);
  }

}
