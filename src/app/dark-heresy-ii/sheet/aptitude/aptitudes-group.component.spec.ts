import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AptitudesGroupComponent } from './aptitudes-group.component';

describe('AptitudesGroupComponent', () => {
  let component: AptitudesGroupComponent;
  let fixture: ComponentFixture<AptitudesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptitudesGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AptitudesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
