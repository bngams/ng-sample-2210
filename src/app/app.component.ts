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
  customDate!: Date;
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

  constructor() { 
    // Keep constructor for DI => use ngOnInit()
    // this.customDate = new Date();
  }

  ngOnInit(): void {
    this.customDate = new Date();
  }

  buttonClicked(eventData: MouseEvent, pElement: HTMLParagraphElement, title: string): void {
    console.log('title is already bind here', this.title);
    alert('Button clicked!');
    console.log('buttonClicked', eventData, pElement, title, this.title);
  }

  toggleButtonStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }

  receiveTemplateVar(myH2Title: HTMLHeadingElement): void {
    console.log()
  }
}
