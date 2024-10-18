import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkHeresyIICreatorComponent } from './dark-heresy-ii-creator.component';

describe('DarkHeresyIiCreatorComponent', () => {
  let component: DarkHeresyIICreatorComponent;
  let fixture: ComponentFixture<DarkHeresyIICreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkHeresyIICreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkHeresyIICreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
