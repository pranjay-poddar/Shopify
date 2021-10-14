import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSignupComponent } from './buyer-signup.component';

describe('BuyerSignupComponent', () => {
  let component: BuyerSignupComponent;
  let fixture: ComponentFixture<BuyerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
