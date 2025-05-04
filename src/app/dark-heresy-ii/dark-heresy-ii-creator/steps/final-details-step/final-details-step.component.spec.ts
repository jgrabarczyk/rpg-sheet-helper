import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDetailsStepComponent } from './final-details-step.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepper } from '@angular/cdk/stepper';

describe('FinalDetailsStepComponent', () => {
  let component: FinalDetailsStepComponent;
  let fixture: ComponentFixture<FinalDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalDetailsStepComponent, NoopAnimationsModule],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
