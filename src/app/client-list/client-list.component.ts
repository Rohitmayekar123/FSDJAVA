import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-client-list',
 templateUrl: './client-list.component.html',
 styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
 clients = [
   { id: 1, name: 'Client A', portfolio: 'Finance' },
   { id: 2, name: 'Client B', portfolio: 'Healthcare' }
 ];
 constructor() {}
 ngOnInit(): void {}
}