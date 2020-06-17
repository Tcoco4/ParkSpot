import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController } from '@ionic/angular';

import { MyAccountPage } from './my-account.page';

describe('MyAccountPage Tests', () => {
  let alert: AlertController;
  let myAcc:  MyAccountPage;
  let spy: any;
  
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
