import { Component, OnInit } from '@angular/core';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { StartPage } from '../start/start.page';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
 public coords: any
  constructor(private mapModal: MapModalComponent) { }

  ngOnInit() {
   // this.coords = this.mapModal;
  }
    currentCoordinates(){
      console.log("Fetchign Coordinates");
      var pos;
      if (navigator.geolocation) {
        console.log("heeelo");
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.coords =pos;
          console.log("position: "+pos.lat+" "+pos.lng);
          return pos;
            
        });
      }else{
        console.log("Not insde");
      }
      
  }
  landmarkLocation(){

  }
  eventLocation(){

  }
}
