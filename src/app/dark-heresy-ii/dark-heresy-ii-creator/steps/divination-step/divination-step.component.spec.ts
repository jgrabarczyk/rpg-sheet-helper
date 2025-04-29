import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivinationStepComponent } from './divination-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('DivinationStepComponent', () => {
  let component: DivinationStepComponent;
  let fixture: ComponentFixture<DivinationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivinationStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivinationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
