import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  private modalCtrl: ModalController;
  //private alertCtrl: AlertController;
  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
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
/*userManual(){
  this.modal.create({component: LocationPickerComponent})
  .then(modalEl =>{
    modalEl.onDidDismiss().then(modalData =>{
    
    });
    modalEl.present();//THIS OPENS MODAL
  })
}*/

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
} displayRestaurants(){

  }
}
