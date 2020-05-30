import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LocationPickerComponent } from '../shared/pickers/location-picker/location-picker.component';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private shared: SharedModule, private locationCo: LocationPickerComponent) { }

  ngOnInit() {
  }

  touchMapReturnAddress(){
    //need access to the locationPicker.component
    console.log('Need access to LocationPicker');
    this.locationCo.onPickLocation();
  }
}

/*

 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          const infoWindow = new googleMaps.InfoWindow;
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          //handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
     //   handleLocationError(false, infoWindow, map.getCenter());
      }
    }

*/