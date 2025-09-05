import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashManriskComponent } from './dash-manrisk.component';

describe('DashManriskComponent', () => {
  let component: DashManriskComponent;
  let fixture: ComponentFixture<DashManriskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashManriskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashManriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
