import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userAuthenticated = false;
  get userIsAuthenticated(){
    return this._userAuthenticated;
  }
  constructor(private router:Router) { }

  login(){
    this._userAuthenticated = true;
    this.router.navigateByUrl('/start');
  }

  logout(){
    this._userAuthenticated = false;
  }
}
