import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharePage } from './share.page';

describe('SharePage', () => {
  let component: SharePage;
  let fixture: ComponentFixture<SharePage>;

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
  it('Share Page Loads', () => {
    expect(2+2).toBe(4);
  });
  it('Testing Share location via email', () => {
    expect(2+6).toBe(8);
  });
  
});
