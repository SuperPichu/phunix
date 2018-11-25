import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: object;

  constructor(private data: UserDataService) {
    this.feedback = data.getFeedback();
  }

  ngOnInit() {
  }

}
