import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  NewFeatures(){
      this.alertCtrl.create({
        header: 'Make Friends',
        message: 'Make friends on the Parkspot Community which will allow you to share event locations, landmark locations and many more with friends',
        buttons: [
          {
            text: 'Dont Notify once update available  ',
            role: 'accept'
          },
          {
            text: 'Notify once update available ',
            role: 'accept'
          }
      ]
    }).then(alertEl =>{
        alertEl.present();
    }); 
  }

  help(){
      this.alertCtrl.create({
        header: 'Speak to a consultant',
        message: 'Dial  0 800 123 4567',
        buttons: [
          {
            text: 'Call ',
            role: 'accept'
          },
          {
            text: 'Cancel ',
            role: 'cancel'
          }
      ]
    }).then(alertEl =>{
        alertEl.present();
    });
  }

  Settings(){
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
