import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSkmComponent } from './dash-skm.component';

describe('DashSkmComponent', () => {
  let component: DashSkmComponent;
  let fixture: ComponentFixture<DashSkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashSkmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashSkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
