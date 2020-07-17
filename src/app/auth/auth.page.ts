import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private appComp: AppComponent) { }

  ngOnInit() {
  }
  onSignUp(){
    this.appComp.useAcc=true;
    this.appComp.displayMenu();
    this.authService.login();
  }
}
