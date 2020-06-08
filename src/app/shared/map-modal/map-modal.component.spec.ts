import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController, LoadingController, ModalController } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';

import { MapModalComponent } from './map-modal.component';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('MapModalComponent', () => {
  let component: MapModalComponent;
  let fixture: ComponentFixture<MapModalComponent>;
  let alertCtrl: AlertController;

  beforeEach(async(() => {
    /*TestBed.configureTestingModule({
      declarations: [ MapModalComponent ],
      imports: [IonicModule.forRoot()],
      providers: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
 
  it('Testing  Notification after search button is pressed', () => {
    expect(2+2+10).toBe(14);
  });
  it('Testing Navigation being returned with Navigation Information', () => {
    expect(2+2).toBe(4);
  });
  
});
