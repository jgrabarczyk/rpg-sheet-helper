import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCardComponent } from './background-card.component';
import { BACKGROUNDS } from '@dhii/types/dhii-background';

describe('BackgroundCardComponent', () => {
  let component: BackgroundCardComponent;
  let fixture: ComponentFixture<BackgroundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundCardComponent);
    component = fixture.componentInstance;
    component.background = BACKGROUNDS.get('rogue')!;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
