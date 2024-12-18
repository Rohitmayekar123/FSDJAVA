import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; // Add this for HTTP requests

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { ViewMeetingsComponent } from './view-meetings/view-meetings.component';
import { RegisterComponent } from './register/register.component'; 
import { LogoutComponent } from './logout/logout.component'; 

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ScheduleMeetingComponent,
    ViewMeetingsComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'meeting', component: ScheduleMeetingComponent },
      { path: 'view-meetings', component: ViewMeetingsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
