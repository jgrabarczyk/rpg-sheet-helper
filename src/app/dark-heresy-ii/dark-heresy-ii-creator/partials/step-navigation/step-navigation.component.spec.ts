import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNavigationComponent } from './step-navigation.component';
import { CdkStepper } from '@angular/cdk/stepper';

describe('StepFooterComponent', () => {
  let component: StepNavigationComponent;
  let fixture: ComponentFixture<StepNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepNavigationComponent],
      providers: [{ provide: CdkStepper, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
