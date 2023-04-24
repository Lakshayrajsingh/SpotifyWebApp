import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // isLoggedIn:boolean=false;

  constructor() { }

  IsloggedIn(){
    
    return !!localStorage.getItem('jwt');
    
  }

  // loggedIn(){
  //   this.isLoggedIn=true;
  // }

  // loggedOut(){
  //  this.isLoggedIn=false;
  // }

  // logInStatus(){
  //   return this.isLoggedIn;
  // }
}
