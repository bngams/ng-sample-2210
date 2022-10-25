import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// create a type on the fly
// if used once
type Picture = {
  url:string;
  alt: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

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

  constructor(private router: ActivatedRoute) { 
    // console.log('route param name = ', router.snapshot.paramMap.get('name'));
    // Keep constructor for DI => use ngOnInit()
    // this.customDate = new Date();
  }

  ngOnInit(): void {
    this.customDate = new Date();
    console.log('route param name = ', this.router.snapshot.paramMap.get('name'));
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
