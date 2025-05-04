import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentStepComponent } from './equipment-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('EquipmentStepComponent', () => {
  let component: EquipmentStepComponent;
  let fixture: ComponentFixture<EquipmentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
