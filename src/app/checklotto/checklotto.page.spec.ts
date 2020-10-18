import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklottoPage } from './checklotto.page';

describe('ChecklottoPage', () => {
  let component: ChecklottoPage;
  let fixture: ComponentFixture<ChecklottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
