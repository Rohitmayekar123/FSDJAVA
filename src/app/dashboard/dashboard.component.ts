import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  // Navigate to the Meeting Page
  goToMeeting(): void {
    this.router.navigate(['/meeting']);  // Navigate to '/meeting' page
  }

  // Navigate to View Meetings Page
  goToViewMeetings(): void {
    this.router.navigate(['/view-meetings']);  // Navigate to '/view-meetings' page
  }

  // Optionally, you can implement a logout function
  onLogout(): void {
    alert('Logging out...');
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
