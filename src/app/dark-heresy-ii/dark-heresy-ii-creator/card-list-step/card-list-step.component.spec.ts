import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListStepComponent } from './card-list-step.component';

describe('CardListStepComponent', () => {
  let component: CardListStepComponent;
  let fixture: ComponentFixture<CardListStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
