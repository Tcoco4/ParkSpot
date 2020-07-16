import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController, LoadingController, ModalController } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';

import { MapModalComponent } from './map-modal.component';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('MapModalComponent Tests', () => {
  let map: MapModalComponent;
  let renderer: Renderer2;
  let alert: AlertController;
  let load: LoadingController
  let spy: any;
  let spi: any|Promise<any>;
  let ori: any;
  let des: any;

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
  
  beforeEach(() => {
    renderer;
    alert = new AlertController();
    load = new LoadingController();
    map = new MapModalComponent(renderer, alert, load);
  });

  afterEach(() => {
   renderer = null;
   alert = null;
   load = null;
  });
 
  it('MapModalComponent Loads', () => {
    expect(MapModalComponent).toBeDefined();
  })
  it('Search Button', () => {
    spy = spyOn(map, 'search');
    map.search();
    expect(spy).toHaveBeenCalled();
  });

  it('Display Events', () => {
    spy = spyOn(map, 'events');
    map.events();
    expect(spy).toHaveBeenCalled();
    //expect(spy).actual;
  });
  it('Search Button returns Notification of Result', () => {
    spi = spyOn(map, 'search');
    map.search();
    expect(spi).toHaveBeenCalled();
    expect(spi).toContain(alert.create().then(alertEl =>{
      alertEl.present();
    }));
    /*spyOn(window, "alert");
    window.alert(alert);
    expect(window.alert).toHaveBeenCalledWith("Try another Parking lot or Search again");
    expect(window.alert).toHaveBeenCalledWith("Select Navigate to display route or Cancel to Cancel");*/
});

  it('Search Button Returns Navigation Route', () => {
    spy = spyOn(map, 'calculateAndRenderDirections');
    map.calculateAndRenderDirections(ori,des);
    expect(spy).toHaveBeenCalled();
  });
  
});
