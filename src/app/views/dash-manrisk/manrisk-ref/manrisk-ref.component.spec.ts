import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManriskRefComponent } from './manrisk-ref.component';

describe('ManriskRefComponent', () => {
  let component: ManriskRefComponent;
  let fixture: ComponentFixture<ManriskRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManriskRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManriskRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
