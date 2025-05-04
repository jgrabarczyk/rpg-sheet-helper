import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeStepComponent } from './aptitude-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('AptitudeStepComponent', () => {
  let component: AptitudeStepComponent;
  let fixture: ComponentFixture<AptitudeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptitudeStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AptitudeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
