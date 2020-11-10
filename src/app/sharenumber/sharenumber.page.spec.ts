import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharenumberPage } from './sharenumber.page';

describe('SharenumberPage', () => {
  let component: SharenumberPage;
  let fixture: ComponentFixture<SharenumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharenumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharenumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
