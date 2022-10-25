import { Component, OnInit } from '@angular/core';

type Picture = {
  url:string;
  alt: string;
}

// TS Decorator
// Component config
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  date = new Date();
  picture: Picture = {
    url: 'https://picsum.photos/200',
    alt: 'Description'
  };
  buttonDisabled = true;
  words = [
    'hello',
    'world',
    '!'
  ];
  iconBgColor = "black";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(): void {
    console.log('Button clicked!');
  }

  toggleButtonStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }

  receiveTemplateVar(myH2Title: HTMLHeadingElement): void {
    console.log()
  }
}
