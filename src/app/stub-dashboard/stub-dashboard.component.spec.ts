import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubDashboardComponent } from './stub-dashboard.component';

describe('StubDashboardComponent', () => {
  let component: StubDashboardComponent;
  let fixture: ComponentFixture<StubDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StubDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
