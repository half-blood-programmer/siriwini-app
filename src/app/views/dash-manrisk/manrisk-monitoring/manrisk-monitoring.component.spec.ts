import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManriskMonitoringComponent } from './manrisk-monitoring.component';

describe('ManriskMonitoringComponent', () => {
  let component: ManriskMonitoringComponent;
  let fixture: ComponentFixture<ManriskMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManriskMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManriskMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
