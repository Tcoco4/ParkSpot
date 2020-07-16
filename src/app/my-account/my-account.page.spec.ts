import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular';

import { MyAccountPage } from './my-account.page';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { Renderer2 } from '@angular/core';

describe('MyAccountPage Tests', () => {
  let alert: AlertController;
  let myAcc:  MyAccountPage;
  let modal: MapModalComponent;
  let spy: any;
  let render : Renderer2;
  let load: LoadingController
  
  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

   // fixture = TestBed.createComponent(MyAccountPage);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
    it('should create', () => {
      expect(component).toBeTrue();
    });
  }));*/
  beforeEach(() => {
    render;
    load = new LoadingController();
    modal = new MapModalComponent(render, alert, load);
    alert =  new AlertController();
    myAcc = new MyAccountPage(alert);
  });

  afterEach(() => {
    alert = null;
    myAcc = null;
  });
 
  it('User Account Loads', () => {
    expect(MyAccountPage).toBeDefined();
  });

  it('User Create Landmark', () => {
    expect(myAcc.NewFeatures).toBeDefined();
  });

  it('Settings method callable', () => {
    spy = spyOn(myAcc, 'Settings');
    myAcc.Settings();
    expect(spy).toHaveBeenCalled();
  });
});
