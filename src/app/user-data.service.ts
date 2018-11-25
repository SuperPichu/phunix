import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getFeedback() {
    // In the future this won't be hard-coded.
    return {
      'completed': 23,
      'correct': 15,
      'time': 1650
    };
  }
}
