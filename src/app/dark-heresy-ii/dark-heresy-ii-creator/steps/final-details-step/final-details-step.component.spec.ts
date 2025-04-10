import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDetailsStepComponent } from './final-details-step.component';

describe('FinalDetailsStepComponent', () => {
  let component: FinalDetailsStepComponent;
  let fixture: ComponentFixture<FinalDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
