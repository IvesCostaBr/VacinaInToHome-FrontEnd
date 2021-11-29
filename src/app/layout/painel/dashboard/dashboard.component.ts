import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title='Dashboard';
  @Input() user : any

  constructor() { }

  ngOnInit() {
  }

}
