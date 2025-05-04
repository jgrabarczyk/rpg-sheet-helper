import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldStepComponent } from './homeworld-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('HomeworldStepComponent', () => {
  let component: HomeworldStepComponent;
  let fixture: ComponentFixture<HomeworldStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworldStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworldStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
