import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepComponent } from './skill-step.component';

describe('SkillStepComponent', () => {
  let component: SkillStepComponent;
  let fixture: ComponentFixture<SkillStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
