import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeStepComponent } from './attribute-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('AttributeStepComponent', () => {
  let component: AttributeStepComponent;
  let fixture: ComponentFixture<AttributeStepComponent>;
  // eslint-disable-next-line @typescript-eslint/typedef
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
