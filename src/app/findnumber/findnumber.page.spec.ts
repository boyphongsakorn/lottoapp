import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindnumberPage } from './findnumber.page';

describe('FindnumberPage', () => {
  let component: FindnumberPage;
  let fixture: ComponentFixture<FindnumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindnumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindnumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
