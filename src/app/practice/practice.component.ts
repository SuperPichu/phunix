import {Component, Input, OnInit} from '@angular/core';
import { TranscriptionProviderService } from '../transcription-provider.service';
import { MatDialog } from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  transcriptions: any[];
  current: number;
  @Input() answer;

  constructor(private transcriptionProvider: TranscriptionProviderService,
              private dialog: MatDialog) {
    this.transcriptions = transcriptionProvider.getRecordings();
    this.current = 0;
  }

  next() {
    if (this.current < this.transcriptions.length) {
      this.current += 1;
    }
  }

  prev() {
    if (this.current > 1) {
      this.current -= 1;
    }
  }

  checkAnswer() {
    if (this.answer === this.transcriptions[this.current].ipa) {
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Correct!',
          text: 'You answered the question correctly!'
        }
      });
    } else {
      this.dialog.open(DialogComponent, {
        data: {
          title: 'Incorrect.',
          text: 'Please try again.'
        }
      });    }
  }

  ngOnInit() {
  }

}
