import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PracticeSettingsComponent } from './practice-settings/practice-settings.component';
import { PracticeComponent } from './practice/practice.component';
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'practice_settings', component: PracticeSettingsComponent },
  { path: 'practice/:id', component: PracticeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PracticeSettingsComponent,
    PracticeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
