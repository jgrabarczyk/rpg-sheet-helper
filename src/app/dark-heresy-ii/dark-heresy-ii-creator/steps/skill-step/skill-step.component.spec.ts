import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepComponent } from './skill-step.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepper } from '@angular/cdk/stepper';

describe('SkillStepComponent', () => {
  let component: SkillStepComponent;
  let fixture: ComponentFixture<SkillStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillStepComponent, NoopAnimationsModule],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
