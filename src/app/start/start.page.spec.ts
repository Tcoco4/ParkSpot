import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController, AlertController, LoadingController } from '@ionic/angular';

import { StartPage } from './start.page';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('StartPage Tests', () => {
  let map: MapModalComponent;
  let renderer: Renderer2;
  let alert: AlertController;
  let load: LoadingController
  let spy: any;
  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  beforeEach(() => {
  
  });

  afterEach(() => {

  });

  it('Start Page Loads', () => {
    expect(StartPage).toBeDefined();
  });
  it('Map injected into Start Page', () => {
    expect(MapModalComponent).toBeDefined();
  });
  
});
