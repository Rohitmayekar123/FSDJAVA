import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'meeting', component: ScheduleMeetingComponent },
  { path: 'view-meetings', component: ViewMeetingsComponent },
  { path: 'logout', component: LogoutComponent }
];
