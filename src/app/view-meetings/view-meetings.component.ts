import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MeetingService } from '../services/meeting.service'; 

@Component({
  selector: 'app-view-meetings',
  standalone: true,  // Mark this as a standalone component
  templateUrl: './view-meetings.component.html',
  styleUrls: ['./view-meetings.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class ViewMeetingsComponent implements OnInit {

  meetings: any[] = [];

  constructor(private router: Router, private meetingService: MeetingService) {}

  ngOnInit(): void {
    this.meetingService.meetings$.subscribe(meetings => {
      this.meetings = meetings;
    });
  }

  onBack(): void {
    this.router.navigate(['/meeting']);
  }

  onLogout(): void {
    this.router.navigate(['/logout']);
  }

  onDelete(meeting: { topic: string; startDateTime: string; endDateTime: string; numParticipants: number }): void {
    const confirmDelete = confirm(`Are you sure you want to delete "${meeting.topic}"?`);
    if (confirmDelete) {
      this.meetings = this.meetings.filter((m) => m !== meeting);
      localStorage.setItem('meetings', JSON.stringify(this.meetings));
    }
  }
}
