import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { from } from 'rxjs';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  @ViewChild('map')  mapElementRef: ElementRef;
  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }

  ngOnInit() {}

  //initialising Google maps
  ngAfterViewInit(){
    this.getGoogleMaps()
    .then(googleMaps =>{
      const mapEl =  this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: {lat:-25.746020 , lng:28.187120},
        zoom: 16
      });
//////////////////// CODE TO DETECT LIVE LOCATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    const infoWindow = new googleMaps.InfoWindow;
    infoWindow.setPosition(pos);
    infoWindow.setContent('You are here');
    infoWindow.open(map);
    map.setCenter(pos);

    var myMarkerOptions = {
      position: pos,
      map: map,
      //title: "Here you are",
    }
  
    var myMarker = new googleMaps.Marker(myMarkerOptions);
  }, function() {
    //handleLocationError(true, infoWindow, map.getCenter());
  });
}/* else {
  // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
}*/
/////////////////////////////////////////////////END OF CODE TO DETECT LIVE LOCATION
      googleMaps.event.addListenerOnce(map, 'idle', () =>{
        this.renderer.addClass(mapEl, 'visible');
      });
      map.addListener('click', event =>{
        const selectedCoords = {
          lat: event.latLng.lat(), 
          lng: event.latLng.lng()
        };
        this.modalCtrl.dismiss(selectedCoords);
      });
    }).catch(err =>{
      console.log(err);
    }) ;

  }

  onCancel(){
    this.modalCtrl.dismiss();
  }
  private getGoogleMaps(): Promise<any>{ // will always return a promise that resolves the data to a map
    const win = window as any;
    const googleModule = win.google; //refers to a not set varable. will be set after importing JS sdk
    
    if(googleModule && googleModule.maps){ //if js sdk has beem looaded before
      return Promise.resolve(googleModule.maps) //entry point to maps js sdk that exposes all funcs, methods we'll use
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key='+environment.googleMapsAPIKey;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload =() =>{
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps){
          resolve(loadedGoogleModule.maps);
        }
        else{
          reject('Google maps SDK not available');
        }
      }
    })
  }
}
