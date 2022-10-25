import { Component, OnInit } from '@angular/core';

// TS Decorator
// Component config
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  customDate!: Date;
  date = new Date();

  constructor() {
  }

  ngOnInit() {
    this.customDate = new Date();
  }
}
