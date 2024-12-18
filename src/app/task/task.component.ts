import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-task',
 templateUrl: './task.component.html',
 styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 tasks = [
   { id: 1, title: 'Design Database', status: 'In Progress' },
   { id: 2, title: 'Develop API', status: 'Not Started' }
 ];
 constructor() {}
 ngOnInit(): void {}
}