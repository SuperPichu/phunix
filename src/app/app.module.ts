import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule,
  MatIconModule, MatInputModule, MatCheckboxModule, MatCardModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PracticeSettingsComponent } from './practice-settings/practice-settings.component';
import { PracticeComponent } from './practice/practice.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TranscriptionProviderService } from './transcription-provider.service';
import { UserDataService } from './user-data.service';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'practice_settings', component: PracticeSettingsComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PracticeSettingsComponent,
    PracticeComponent,
    FeedbackComponent,
    DialogComponent
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
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [DialogComponent],
  providers: [TranscriptionProviderService, UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
