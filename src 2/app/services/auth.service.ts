import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;

  constructor() { }

  login(username, password) : boolean{
    if(username == 'mario' && password == 'Today123')
    {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  isUserLoggedIn() {
    return this.isLoggedIn; 
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
