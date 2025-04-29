import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleStepComponent } from './role-step.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('RoleStepComponent', () => {
  let component: RoleStepComponent;
  let fixture: ComponentFixture<RoleStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleStepComponent],
      providers: [{ provide: CdkStepper, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
