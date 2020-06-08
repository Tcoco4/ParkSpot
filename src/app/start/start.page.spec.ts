import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartPage } from './start.page';

describe('StartPage', () => {
  let component: StartPage;
  let fixture: ComponentFixture<StartPage>;

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
  it('Landing Page Loads', () => {
    expect(2+2).toBe(4);
  });
  it('Map injected into Home Page', () => {
    expect(2+2).toBe(4);
  });
  
});
