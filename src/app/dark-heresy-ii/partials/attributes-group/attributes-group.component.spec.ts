import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesGroupComponent } from './attributes-group.component';

describe('AttributesGroupComponent', () => {
  let component: AttributesGroupComponent;
  let fixture: ComponentFixture<AttributesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
