import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, 
    private appCom: AppComponent) {}
  onSignUp(){
    this.appCom.useAcc=true;
    this.appCom.noAcc=false;
    this.appCom.displayMenu();
    this.router.navigateByUrl('/auth');
  }
  onWithoutAccount(){
    this.appCom.noAcc=true;
    this.appCom.useAcc=false;
    this.appCom.displayMenu();
    this.router.navigateByUrl('/start');
  }


}
