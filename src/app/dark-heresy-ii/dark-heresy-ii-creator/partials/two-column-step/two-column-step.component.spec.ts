import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnStepComponent } from './two-column-step.component';

describe('TwoColumnStepComponent', () => {
  let component: TwoColumnStepComponent;
  let fixture: ComponentFixture<TwoColumnStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColumnStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
