import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoundsAndFateStepComponent } from './wounds-and-fate-step.component';

describe('WoundsAndFateStepComponent', () => {
  let component: WoundsAndFateStepComponent;
  let fixture: ComponentFixture<WoundsAndFateStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoundsAndFateStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoundsAndFateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
