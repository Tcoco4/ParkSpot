import { Component, OnInit } from '@angular/core';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { StartPage } from '../start/start.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
 public pos: any;
  constructor(private mapModal: MapModalComponent) { }

  ngOnInit() {
    
  }
    currentCoordinates(){
      var bes=this;
      var a;
      var href;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            bes.pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          a = document.getElementsByTagName("a")[0];
          href = document.createAttribute("href");
          href.value ="mailto:?subject=My current Location&body=I am here https://www.google.com/maps/place/"+bes.pos.lat+","+bes.pos.lng;  
          a.setAttributeNode(href);
          document.getElementsByTagName("a")[0].click();
         
        });
      }
  }
  landmarkLocation(){
    var bes=this;
    var a;
    var href;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          bes.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        a = document.getElementsByTagName("a")[1];
        href = document.createAttribute("href");
        href.value ="mailto:?subject=My Landmark Location&body=Here is my landmark location https://www.google.com/maps/place/"+bes.pos.lat+","+bes.pos.lng;  
        a.setAttributeNode(href);
        document.getElementsByTagName("a")[1].click();
       
      });
    }
  }
  eventLocation(){
    var bes=this;
    var a;
    var href;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          bes.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        a = document.getElementsByTagName("a")[2];
        href = document.createAttribute("href");
        href.value ="mailto:?subject=Event Location&body=Come to this event location https://www.google.com/maps/place/McDonald's+Hatfield/@-25.752135,28.237606,17z";  
        a.setAttributeNode(href);
        document.getElementsByTagName("a")[2].click();
       
      });
    }
  }
}
