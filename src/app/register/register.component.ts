import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService) {}

  onRegister(): void {
    const user = { email: this.email, password: this.password };

    this.authService.register(user).subscribe({
      next: (res) => {
        this.success = 'Registration successful! Please login.';
        this.error = '';
      },
      error: (err) => {
        this.error = 'Registration failed. Try again.';
        this.success = '';
      },
    });
  }
}
