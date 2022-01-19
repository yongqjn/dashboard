import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAirComponent } from './dashboard-air.component';

describe('DashboardAirComponent', () => {
  let component: DashboardAirComponent;
  let fixture: ComponentFixture<DashboardAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
