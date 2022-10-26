import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <!-- <mat-toolbar [color]="'primary'"> -->
    <mat-toolbar color="primary">
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="spacer"></span>
      <!-- ul>li.menu-item*2 -->
      <ul>
        <li class="menu-item">
          <a href="#" [routerLink]="'/home'">Home</a>
        </li>
        <li class="menu-item">
          <a href="#" routerLink="/start">Start</a>
        </li>
        <li class="menu-item" *ngIf="authService.isLoggedIn">
          <a href="#" routerLink="/admin">Admin</a>
        </li>
        <li class="menu-item"  *ngIf="!authService.isLoggedIn">
          <a href="#" routerLink="/auth/login">Login</a>
        </li>
        <li class="menu-item"  *ngIf="authService.isLoggedIn">
          <a href="javascript:void(0)" (click)="authService.logout()">Logout</a>
        </li>
      </ul>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [
    `    
      .spacer {
        flex: 1 1 auto;
      }

      button {
        background: none;
        border: none;
      }

      ul {
        display: flex;
        list-style-type: none;

        .menu-item {
          margin: 15px;

          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    `
  ],
})
export class HeaderComponent implements OnInit {

  isLoggedInFromObservable = false;

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
    
  }

  subscribeToIsLoggedInSubject(): void {
    this.authService.isLoggedInObservable.subscribe((value) => {
      this.isLoggedInFromObservable = value;
    })
  }

}
