import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelentStepComponent } from './telent-step.component';

describe('TelentStepComponent', () => {
  let component: TelentStepComponent;
  let fixture: ComponentFixture<TelentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelentStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
