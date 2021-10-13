import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLoginComponent } from './vendor-login.component';

describe('VendorLoginComponent', () => {
  let component: VendorLoginComponent;
  let fixture: ComponentFixture<VendorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
