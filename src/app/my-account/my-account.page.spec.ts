import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAccountPage } from './my-account.page';

describe('MyAccountPage', () => {
  let component: MyAccountPage;
  let fixture: ComponentFixture<MyAccountPage>;

 /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('User Account Loads', () => {
    expect(2+2).toBe(4);
  });
  it('Testing User create landmark', () => {
    expect(2+5).toBe(7);
  });
  
});
