import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  // Using BehaviorSubject to store and update meetings data
  private meetingsSubject = new BehaviorSubject<any[]>([]);

  meetings$ = this.meetingsSubject.asObservable();  // Observable for the meetings data

  constructor() {
    // Initialize with any saved data in localStorage
    const savedMeetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    this.meetingsSubject.next(savedMeetings);
  }

  // Method to add a meeting
  addMeeting(meeting: any): void {
    const currentMeetings = this.meetingsSubject.value;
    currentMeetings.push(meeting);

    // Update the meetings in localStorage
    localStorage.setItem('meetings', JSON.stringify(currentMeetings));

    // Update the BehaviorSubject
    this.meetingsSubject.next(currentMeetings);
  }
}
