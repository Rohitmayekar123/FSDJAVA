import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Inject the Router into the constructor
  constructor(private router: Router) {}

  // Login Functionality
  onLogin(event: Event, username: string, password: string): void {
    event.preventDefault(); // Prevent form reload

    // Validate Username and Password
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and Password cannot be empty!');
      return;
    }

    // Example check (this would typically be done via an API call)
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Check if credentials are correct
    if (username === validUsername && password === validPassword) {
      // Success case
      alert('Login successful!');
      
      // Use Router to navigate to '/dashboard'
      this.router.navigate(['/dashboard']);
    } else {
      // Failure case
      alert('Invalid username or password!');
    }
  }

  // Register Functionality
  onRegister(): void {
    // Use Router to navigate to '/register'
    this.router.navigate(['/register']);
  }
}
