import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddPropComponent } from './car-add-prop.component';

describe('CarAddPropComponent', () => {
  let component: CarAddPropComponent;
  let fixture: ComponentFixture<CarAddPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAddPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
