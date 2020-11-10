import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumbertopfourPage } from './numbertopfour.page';

describe('NumbertopfourPage', () => {
  let component: NumbertopfourPage;
  let fixture: ComponentFixture<NumbertopfourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbertopfourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumbertopfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
