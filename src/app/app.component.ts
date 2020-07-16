import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MapModalComponent } from './shared/map-modal/map-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private isHidden: boolean = true;
  public createLand: boolean =false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private mapModal: MapModalComponent,
    private alertCtrl: AlertController
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

}
