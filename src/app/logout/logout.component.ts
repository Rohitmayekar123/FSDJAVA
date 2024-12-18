import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service'; // Adjust the path as needed

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  showLogoutModal: boolean = false;  // Flag to control modal visibility

  constructor(private router: Router, private navigationService: NavigationService) {}

  // Open the logout confirmation modal
  openLogoutConfirmation(): void {
    this.showLogoutModal = true;
  }

  // Close the logout modal
  closeLogoutModal(): void {
    this.showLogoutModal = false;
  }

  // Perform logout and navigate to login page
  onLogout(): void {
    localStorage.clear();
    alert('Logging out...');
 
     // Redirect to home screen after logout
 setTimeout(() => {
  this.router.navigate(['/']);
}, 1000);
     this.router.navigate(['/login']);  // Redirect to the login page
  }

    // Cancel function - navigate back to the previous page
    // onCancel(): void {
    //   console.log('Cancel button clicked');
    //   this.router.navigateByUrl(this.router.url); // Use Router to navigate back
    // }

    onCancel(): void {
      const previousUrl = this.navigationService.getPreviousUrl();
      if (previousUrl) {
        this.router.navigateByUrl(previousUrl); // Navigate back to the previous route
      } else {
        this.router.navigate(['/']); // Fallback to home if no previous URL
      }
    }


}
