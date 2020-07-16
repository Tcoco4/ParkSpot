import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController, LoadingController } from '@ionic/angular';

import { SharePage } from './share.page';
import { MapModalComponent } from '../shared/map-modal/map-modal.component';
import { Renderer2 } from '@angular/core';

describe('SharePage Tests', () => {
  let share: SharePage;
  let map: MapModalComponent
  let renderer: Renderer2;
  let alert: AlertController;
  let load: LoadingController;
  let spy: any;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
  beforeEach(() => {
    alert = new AlertController();
    load = new LoadingController;
    map = new MapModalComponent(renderer,alert,load);
    share = new SharePage(map);
  });

  afterEach(() => {
    alert =null;
    load = null;
    map = null;
    share = null;
  });

  it('Share Page Loads', () => {
    expect(SharePage).toBeDefined();
  });
  it('Testing Share location via email', () => {
   spy = spyOn(share, 'currentCoordinates');
   share.currentCoordinates();
   expect(spy).toHaveBeenCalled();
  });

  /*it('Testing Landmark location via email', () => {
    spy = spyOn(share, 'landmarkLocation');
    share.landmarkLocation();
    expect(spy).toHaveBeenCalled();
   });
  
   it('Testing Event location via email', () => {
    spy = spyOn(share, 'eventLocation');
    share.eventLocation();
    expect(spy).toHaveBeenCalled();
   });*/
});
