import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // bind basic attributes
  username!: string; // without init
  password = ""; // with init
  
  // or bind complex object
  credentials: Partial<User> = {
    username: '',
    password: ''
  };

  // shortcut typescript to handle attribute creation/assignation
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('submit', this.credentials);
    this.authService.login(this.credentials);
  }

}
