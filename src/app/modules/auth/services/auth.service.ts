import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // Observable
  isLoggedInObservable = new Subject<boolean>();

  constructor(private router: Router) {
    // this.isLoggedIn = (localStorage.getItem('token')) ? true: false;
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  login(user: Partial<User>): void {
    this.isLoggedIn = true;
    this.isLoggedInObservable.next(true);
    this.router.navigateByUrl('/admin');
    localStorage.setItem('token', 'xyz...');
  }

  logout() {
    this.isLoggedIn = false;
    this.isLoggedInObservable.next(false);
    this.router.navigateByUrl('/');
    localStorage.removeItem('token');
  }
}
