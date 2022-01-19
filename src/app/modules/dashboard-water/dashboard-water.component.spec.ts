import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWaterComponent } from './dashboard-water.component';

describe('DashboardWaterComponent', () => {
  let component: DashboardWaterComponent;
  let fixture: ComponentFixture<DashboardWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
