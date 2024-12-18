import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component'; 
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meeting', component: ScheduleMeetingComponent },
  { path: 'view-meetings', component: ViewMeetingsComponent },
  { path: 'logout', component: LogoutComponent },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
