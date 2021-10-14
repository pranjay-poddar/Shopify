import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSignupComponent } from './vendor-signup.component';

describe('VendorSignupComponent', () => {
  let component: VendorSignupComponent;
  let fixture: ComponentFixture<VendorSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
