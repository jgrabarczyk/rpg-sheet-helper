import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsGroupComponent } from './talents-group.component';

describe('TalentsGroupComponent', () => {
  let component: TalentsGroupComponent;
  let fixture: ComponentFixture<TalentsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentsGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TalentsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
