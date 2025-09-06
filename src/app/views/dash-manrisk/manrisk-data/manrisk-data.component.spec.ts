import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManriskDataComponent } from './manrisk-data.component';

describe('ManriskDataComponent', () => {
  let component: ManriskDataComponent;
  let fixture: ComponentFixture<ManriskDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManriskDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManriskDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
