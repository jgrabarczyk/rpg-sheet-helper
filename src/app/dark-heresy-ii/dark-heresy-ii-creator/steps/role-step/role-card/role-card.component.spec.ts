import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCardComponent } from './role-card.component';
import { DHII_Role, ROLES } from '@dhii/types/dhii-role';

describe('RoleCardComponent', () => {
  let component: RoleCardComponent;
  let fixture: ComponentFixture<RoleCardComponent>;
  let compiled: HTMLElement;
  let aptitudes: HTMLElement;
  let talents: HTMLElement;

  /**
   * Agregate redundand config for each roll suits
   * @param role Role to check rendered template against
   */
  function assignRole(role: DHII_Role): void {
    component.role = role;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;

    [aptitudes, talents] = Array.from(compiled.querySelectorAll<HTMLElement>('.row.rs-list-item'));
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RoleCardComponent);
    component = fixture.componentInstance;
  });

  describe('for Ace roll', () => {
    const aceRole: DHII_Role = ROLES.get('ace')!;

    beforeEach(() => {
      assignRole(aceRole);
    });

    it('should correctly render aptitudes', async () => {
      const aptitudesTxt: string | null = aptitudes.getElementsByClassName('value')[0].textContent;
      expect(aptitudesTxt?.trim()).toEqual('Agility, Finesse, Perception, Tech, Willpower');
    });
    it('should correctly render talents', async () => {
      const talentsTxt: string | null = talents.getElementsByClassName('value')[0].textContent;
      expect(talentsTxt).toEqual('Hard Target or Hotshot Pilot');
    });
  });

  describe('for penitent roll', () => {
    const penitentRole: DHII_Role = ROLES.get('penitent')!;

    beforeEach(() => {
      assignRole(penitentRole);
    });

    it('should correctly render aptitudes', async () => {
      const aptitudesTxt: string | null = aptitudes.getElementsByClassName('value')[0].textContent;
      expect(aptitudesTxt?.trim()).toEqual('Agility, Fieldcraft, Intelligence, Offence, Toughness');
    });
    it('should correctly render talents', async () => {
      const talentsTxt: string | null = talents.getElementsByClassName('value')[0].textContent;
      expect(talentsTxt).toEqual('Die Hard or Flagellant');
    });
  });
});
