import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDashbaordComponent } from './chart-dashbaord.component';

describe('ChartDashbaordComponent', () => {
  let component: ChartDashbaordComponent;
  let fixture: ComponentFixture<ChartDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
