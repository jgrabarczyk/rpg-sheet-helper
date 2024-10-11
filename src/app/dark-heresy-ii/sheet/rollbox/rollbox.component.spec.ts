import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollboxComponent } from './rollbox.component';

describe('RollboxComponent', () => {
  let component: RollboxComponent;
  let fixture: ComponentFixture<RollboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
