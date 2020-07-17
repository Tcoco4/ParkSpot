import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { LocationPickerComponent } from '../shared/pickers/location-picker/location-picker.component';

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
        header: 'Speak to Consultant',
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
  V1(){
    var file="../../../assets/Park_Spot_V1.pdf";
    window.open(file);
  }
  V2(){
    var file="../../../assets/Park_Spot_V2.pdf";
    window.open(file);
  }
  user(){
    var file="../../../assets/ParkSpot_User_Manual.pdf";
    window.open(file);

  }
  documentation(){
    this.alertCtrl.create({
      header: 'ParkSpot Documentaton',
      buttons: [
        {
          text: 'User Manual ',
          handler: () =>{
            this.user();
          }
        },
        {
          text: 'ParkSpot_V1 ',
          handler: () =>{
            this.V1();
          }
        },
        {
          text: 'ParkSpot_V2 ',
          handler: () =>{
            this.V2();
          }
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
