import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGroupComponent } from './skill-group.component';

describe('SkillGroupComponent', () => {
  let component: SkillGroupComponent;
  let fixture: ComponentFixture<SkillGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
