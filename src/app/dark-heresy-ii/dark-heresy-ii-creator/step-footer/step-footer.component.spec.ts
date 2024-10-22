import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFooterComponent } from './step-footer.component';

describe('StepFooterComponent', () => {
  let component: StepFooterComponent;
  let fixture: ComponentFixture<StepFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
