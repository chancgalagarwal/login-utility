import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;
  validEmail:string = "mario@westpac.com.au";
  validPassword:string = "Today123"


  constructor() { }

  login(username, password) : boolean{
    if(username == this.validEmail && password == this.validPassword)
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
