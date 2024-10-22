import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeStepComponent } from './aptitude-step.component';

describe('AptitudeStepComponent', () => {
  let component: AptitudeStepComponent;
  let fixture: ComponentFixture<AptitudeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptitudeStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
