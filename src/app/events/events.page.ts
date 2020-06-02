import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  displayRestaurants(){
    /*this.router.navigateByUrl('/start');
    this.getGoogleMaps()
    .then(googleMaps =>{
      const mapEl =  this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: {lat:-25.7516134292926 , lng:28.233034014701847},
        zoom: 16
      });
        var request = {
        location: pos, //new google.maps.LatLng(-33.867646,151.243446),
        radius: 8047,
        types: ['restaurant']
        }
        var service = new googleMaps.places.PlacesService(map);
      service.nearbySearch(request,callback);
    `//['atm','car-wash','gas-station','restaurant']`*/
  }
}
