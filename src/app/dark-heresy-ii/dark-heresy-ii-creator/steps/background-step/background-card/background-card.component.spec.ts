import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundCardComponent } from './background-card.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
