import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorForgetPassComponent } from './vendor-forget-pass.component';

describe('VendorForgetPassComponent', () => {
  let component: VendorForgetPassComponent;
  let fixture: ComponentFixture<VendorForgetPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorForgetPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorForgetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
