import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdminComponent } from './car-admin.component';

describe('CarAdminComponent', () => {
  let component: CarAdminComponent;
  let fixture: ComponentFixture<CarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
