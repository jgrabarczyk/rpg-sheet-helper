import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentStepComponent } from './talent-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('TelentStepComponent', () => {
  let component: TalentStepComponent;
  let fixture: ComponentFixture<TalentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(TalentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
