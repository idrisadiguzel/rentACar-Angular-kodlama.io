import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorAdminComponent } from './color-admin.component';

describe('ColorAdminComponent', () => {
  let component: ColorAdminComponent;
  let fixture: ComponentFixture<ColorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
