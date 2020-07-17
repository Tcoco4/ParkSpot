import { Component } from '@angular/core';

import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MapModalComponent } from './shared/map-modal/map-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 // private isDisabled: boolean = true;
  public useAcc: boolean;
  public noAcc: boolean;
  private isHidden: boolean = true;
  public createLand: boolean =false;
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private mapModal: MapModalComponent,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  displayEvents(){
    this.mapModal.events();
}
locateLandmark(){
 // console.log("In app Componet")
  this.mapModal.locateLandmark();
  
}
setting(){
  this.alertCtrl.create({
    header: 'Language-settings',
    message: '',
    buttons: [
      {
        text: 'Afrikaans ',
        role: 'cancel'
      },
      {
        text: 'Engish ',
        role: 'accept'
      }
  ]
}).then(alertEl =>{
    alertEl.present();
});
}
 displayMenu(){

  if(this.useAcc===true){
  //  this.menuCtrl.enable(false,"m2");
    this.menuCtrl.enable(true,"m1");
    console.log("UseAcc is "+this.useAcc)
  }else if(this.noAcc==true){
  //  this.menuCtrl.enable(false,"m1");
    this.menuCtrl.enable(true,"m2");
    console.log("NoAcc is "+this.noAcc)
  }
 }
}
