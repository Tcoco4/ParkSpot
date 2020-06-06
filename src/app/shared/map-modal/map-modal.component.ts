import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { from } from 'rxjs';
import { google } from 'google-maps';
import { map, combineAll } from 'rxjs/operators';
import { ConstantPool, ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit,  AfterViewInit{
  private isHidden: boolean = true;
  public google: google;
  public mapElem:any;
  public map;
  public holdThis;
  public globalMap;
  public infoWindow;
  public origin;
  public destination;
  @ViewChild('map')  mapElementRef: ElementRef;

  constructor(
    private modalCtrl: ModalController, 
    private renderer: Renderer2, 
    private http: HttpClient,
    private alertCtrl: AlertController 
    )
    
    {
     this.holdThis=this;
    }
  ngOnInit() {}
  //initialising Google maps
  ngAfterViewInit(){
 
    this.getGoogleMaps()
    .then(googleMaps =>{
       const mapEl =  this.mapElementRef.nativeElement;
       this.map = new googleMaps.Map(mapEl, {
        center: {lat:-25.7516134292926 , lng:28.233034014701847},
        zoom: 16
      }); 

  //////////////////// CODE TO DETECT LIVE LOCATION
  var map2 =this.map;
  this.infoWindow = new googleMaps.InfoWindow();
  var infoWin = this.infoWindow;

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    infoWin.setPosition(pos);
    infoWin.setContent('You are here');
    infoWin.open(map2);
    
    map2.setCenter(pos);
    var myMarkerOptions = {
      position: pos,
      map: map2,
      //title: "Here you are",
    }
    var myMarker = new googleMaps.Marker(myMarkerOptions);
  }, function() {
  });
  }
  ////////END OF CODE TO DETECT LIVE LOCATION


  googleMaps.event.addListenerOnce(this.map, 'idle', () =>{
    this.renderer.addClass(mapEl, 'visible');
  });
  this. map.addListener('click', event =>{
    const selectedCoords = {
      lat: event.latLng.lat(), 
      lng: event.latLng.lng()
    };
   //this.modalCtrl.dismiss(selectedCoords);
   // console.log("newLocation: "+selectedCoords.lat +" "+selectedCoords.lng);
   this.globalMap = map2;
   this.holdThis=this;
  });
  }).catch(err =>{
    console.log(err);
  }) ;
}

  private getGoogleMaps(): Promise<any>{ // will always return a promise that resolves the data to a map
    const win = window as any;
    const googleModule = win.google; //refers to a not set varable. will be set after importing JS sdk
    
    if(googleModule && googleModule.maps){ //if js sdk has beem looaded before
      console.log('THE MODULE HAS BEEN LOADED BEFORE');
      return Promise.resolve(googleModule.maps) //entry point to maps js sdk that exposes all funcs, methods we'll use
    }
    return new Promise((resolve, reject) => {
      console.log('LOADEDING FOR THE FIRST TIME');
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?v=quarterly&key='+environment.googleMapsAPIKey+'&libraries=places,geometry';
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

  landmark()
  {
    var localMap= this.map;
    console.log("the MAP: "+this.map)
    var pos, myMarker, myMarkerOptions;
    if (navigator.geolocation) {
      
        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      
      myMarkerOptions = {
        position: pos,
        map: localMap,    //Issue is here, no access to current Map
        title: "You Parked Here",
      }
      console.log("map "+myMarkerOptions.map);
      myMarker = new google.maps.Marker(myMarkerOptions);
    }
  }

  search()
  { 
    var nyika =this.map;
    var thisObi=this;
    var pos,pos2;
    
      if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
           pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        //Add logic to use a random generator that randomly finds a parking spot
        //or not. When it does, it should assign a destination location
        pos2 = {
          lat: -25.756020,
          lng:  28.239170
        }
        thisObi.destination=pos2;
        thisObi.origin=pos;
        
        var ranNum = Math.floor(Math.random() *(1+ 125-49))+ 49; 
        console.log("randNumwww: "+ranNum); 
        if(ranNum % 2=== 0 )    //Even number
        {
          setTimeout(
            () => { 
              thisObi.alertCtrl.create({
                header: 'Parking Space Found!',
                message: 'Select Navigate to display route or Cancel to Cancel',
                buttons: [
                  {
                    text: 'Navigate ',
                    handler: () =>{
                      thisObi.calculateAndRenderDirections(thisObi.origin, thisObi.destination);
                    }
                  },
                  {
                    text: 'Cancel',
                    role: 'cancel'
                  }
              ]
            }).then(alertEl =>{
                alertEl.present();
            }); 
            }, 3000
          );

        }else{
            setTimeout(
              () => { 
                  thisObi.alertCtrl.create({
                  header: 'No Parking Space Found!',
                  message: 'Try another Parking lot or Search again',
                  buttons: 
                  [
                      {
                        text: 'Search ',
                        handler: () =>{
                        thisObi.search();
                      }
                      },
                      {
                        text: 'Cancel',
                        role: 'cancel'
                      }
                  ]
                }).then(alertEl =>{
                  alertEl.present();
                });
              },
              3000
            );
        }
      });
    } 
  }

   calculateAndRenderDirections(origin, destination){
      var nyika =this.map;
      var thisObi=this;
      var directionsService = new google.maps.DirectionsService(),
          directionsDisplay = new google.maps.DirectionsRenderer(),
          request = 
          { 
            origin: origin,   
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
          }
        directionsDisplay.setMap(nyika);
        directionsService.route(request, (result, status) =>{
        if(status == 'OK'){
            directionsDisplay.setDirections(result);
        }
      })
  }

  events(){
    if(this.isHidden === true){
      this.isHidden = false;
      document.getElementById("events").hidden = false;
    }else if(this.isHidden === false){
      this.isHidden = true;
      document.getElementById("events").hidden = true;

    }
  }
  callback(results,status, holdThis){    
    var placeLoc, marker;
    if(status == google.maps.places.PlacesServiceStatus.OK){
        for(var i = 0; i < results.length; i++){
              holdThis.createMarker(results[i], holdThis);
          }
      }
  }
  createMarker(place, holdThis){
    var holdThisThis=holdThis;
    var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
          map:holdThis.map,
          position: placeLoc
      });
    
      google.maps.event.addListener(marker, 'click', function(){
        holdThisThis.infoWindow.setContent(place.name);
        holdThisThis.infoWindow.open(holdThisThis.map,this);
      });
  }
  restaurant()
  {
      var hhhe =this.map;
      var eeee=this;
      var request,service;
      
      navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        request = {
        location: pos,
        radius: 1000,
        types: ['restaurant','bakery','cafe']
        }
        var localMap =hhhe;
        var thisObj=eeee;
        service = new google.maps.places.PlacesService(localMap);
        service.nearbySearch(request, (results, status) => {
        thisObj.callback(results, status, thisObj);
          });
      });
  }
  fastFood()
  {
    var hhhe =this.map;
    var eeee=this;
    var request,service;
    
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      request = {
      location: pos,
      radius: 1000,
      types: ['fast-food']
      }
      var localMap =hhhe;
      var thisObj=eeee;
      service = new google.maps.places.PlacesService(localMap);
      service.nearbySearch(request, (results, status) => {
      thisObj.callback(results, status, thisObj);
        });
    });
  }
  carWash()
  {
    var hhhe =this.map;
    var eeee=this;
    var request,service;
    
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      request = {
      location: pos,
      radius: 1000,
      types: ['car-wash']
      }
      var localMap =hhhe;
      var thisObj=eeee;
      service = new google.maps.places.PlacesService(localMap);
      service.nearbySearch(request, (results, status) => {
      thisObj.callback(results, status, thisObj);
        });
    });
  }
  atms()
  {
    var hhhe =this.map;
    var eeee=this;
    var request,service;
    
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      request = {
      location: pos,
      radius: 1000,
      types: ['atm']
      }
      var localMap =hhhe;
      var thisObj=eeee;
      service = new google.maps.places.PlacesService(localMap);
      service.nearbySearch(request, (results, status) => {
      thisObj.callback(results, status, thisObj);
        });
    });

  }
}
