import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeComponent } from './attribute.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AttributeComponent', () => {
  let component: AttributeComponent;
  let fixture: ComponentFixture<AttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
