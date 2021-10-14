import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompComponent } from './update-comp.component';

describe('UpdateCompComponent', () => {
  let component: UpdateCompComponent;
  let fixture: ComponentFixture<UpdateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
