import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtDetailsCompComponent } from './pdt-details-comp.component';

describe('PdtDetailsCompComponent', () => {
  let component: PdtDetailsCompComponent;
  let fixture: ComponentFixture<PdtDetailsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdtDetailsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdtDetailsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
