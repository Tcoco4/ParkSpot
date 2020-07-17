import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
 private alertCtrl: AlertController;
 private modalCtrl: ModalController;
  constructor( private http: HttpClient) { }

  ngOnInit() {}
  onPickLocation(){
    this.modalCtrl.create({component: MapModalComponent})
    .then(modalEl =>{
      modalEl.onDidDismiss().then(modalData =>{
         if(!modalData.data){ // this is not set/selected
           return ;
         }
        this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
          (address)=>{
            console.log(address);
          }
          );
        console.log(modalData.data);
      });
     // modalEl.present();//THIS OPENS MODAL
    })
  }

  private getAddress(lat: number, lng: number){
    return this.http
    .get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
      environment.googleMapsAPIKey
    }`
    ).pipe(
      map(geoData =>{
        if(!geoData || !geoData.results || geoData.results.length===0){
          return null;
        }
        return geoData.results[0].formatted_address;
    })
    );
  }

  onclose(){
    this.modalCtrl.dismiss();
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
}
}
