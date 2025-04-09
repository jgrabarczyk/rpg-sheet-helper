import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollLogerComponent } from './roll-loger.component';

describe('RollLogerComponent', () => {
  let component: RollLogerComponent;
  let fixture: ComponentFixture<RollLogerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollLogerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollLogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
