import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentStepComponent } from './talent-step.component';

describe('TelentStepComponent', () => {
  let component: TalentStepComponent;
  let fixture: ComponentFixture<TalentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
