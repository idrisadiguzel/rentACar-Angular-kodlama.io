import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAdminComponent } from './brand-admin.component';

describe('BrandAdminComponent', () => {
  let component: BrandAdminComponent;
  let fixture: ComponentFixture<BrandAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
