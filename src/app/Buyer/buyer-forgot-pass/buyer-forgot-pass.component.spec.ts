import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerForgotPassComponent } from './buyer-forgot-pass.component';

describe('BuyerForgotPassComponent', () => {
  let component: BuyerForgotPassComponent;
  let fixture: ComponentFixture<BuyerForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerForgotPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
