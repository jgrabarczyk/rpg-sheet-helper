import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldCardComponent } from './homeworld-card.component';

describe('HomeworldCardComponent', () => {
  let component: HomeworldCardComponent;
  let fixture: ComponentFixture<HomeworldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworldCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
