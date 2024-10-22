import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundStepComponent } from './background-step.component';

describe('BackgroundStepComponent', () => {
  let component: BackgroundStepComponent;
  let fixture: ComponentFixture<BackgroundStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
