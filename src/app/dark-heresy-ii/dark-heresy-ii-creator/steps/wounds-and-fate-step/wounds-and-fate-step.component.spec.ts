import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoundsAndFateStepComponent } from './wounds-and-fate-step.component';
import { CdkStepper } from '@angular/cdk/stepper';
import { HOMEWORLDS } from '@dhii/types/dhii-homeworlds';

describe('WoundsAndFateStepComponent', () => {
  let component: WoundsAndFateStepComponent;
  let fixture: ComponentFixture<WoundsAndFateStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoundsAndFateStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(WoundsAndFateStepComponent);
    component = fixture.componentInstance;
    component.homeworld = { key: 'highborn', value: HOMEWORLDS.get('highborn')! };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
