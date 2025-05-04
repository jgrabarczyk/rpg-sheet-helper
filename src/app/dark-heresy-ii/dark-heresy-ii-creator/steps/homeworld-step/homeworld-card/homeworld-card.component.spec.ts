import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldCardComponent } from './homeworld-card.component';
import { HOMEWORLDS } from '@dhii/types/dhii-homeworlds';

describe('HomeworldCardComponent', () => {
  let component: HomeworldCardComponent;
  let fixture: ComponentFixture<HomeworldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworldCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworldCardComponent);
    component = fixture.componentInstance;
    component.homeworld = HOMEWORLDS.get('hive')!;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
