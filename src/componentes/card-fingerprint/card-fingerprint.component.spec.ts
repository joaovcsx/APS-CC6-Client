import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardFingerprintComponent } from './card-fingerprint.component';

describe('CardFingerprintComponent', () => {
  let component: CardFingerprintComponent;
  let fixture: ComponentFixture<CardFingerprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFingerprintComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
