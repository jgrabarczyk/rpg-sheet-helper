import { inject, Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, distinctUntilChanged } from 'rxjs';

import { DHII_SheetService } from '../service/dhii-sheet.service';

import { DiceRoll } from '@appTypes/roll';

import {
  DHII_Aptitude,
  DHII_Character,
  DHII_CharacterBackground,
  DHII_CharacterDetails,
  DHII_CharacterHomeworld,
  DHII_CharacterRole
} from '@dhii/types/dark-heresy-ii';
import { BACKGROUNDS, DHII_BackgroundEquipment } from '@dhii/types/dhii-background';
import { DHII_Homeworld, DHII_Homeworlds, HOMEWORLDS } from '@dhii/types/dhii-homeworlds';
import { ROLES } from '@dhii/types/dhii-role';
import { DHII_Talent, DHII_TalentName, DHII_Talents, TALENTS } from '@dhii/types/dhii-talents';
import { DHII_Attributes, DHII_Attribute, DHII_AttributeName } from '@dhii/types/dhii-attribute';
import { DHII_Skill, DHII_SkillName } from '@dhii/types/dhii-skill';
import { rollDivinationTable } from '@dhii/types/roll-tables/dhii-divination';

import { RollService } from '@shared/roll/roll.service';
import { DHII_Equipment, GenericItem } from '@dhii/types/items/generic-item';
import { Armour, ARMOURS } from '@dhii/types/items/armour/armour';
import { WEAPONS } from '@dhii/types/items/weapon/weapons-data';
import { Weapon } from '@dhii/types/items/weapon/weapon';
import { BACKPACK_ITEMS } from '@dhii/types/items/all-items';
import { CYBERNETICS } from '@dhii/types/items/equipment/cybernetics';

@Injectable({
  providedIn: 'root'
})
export class DHII_CreatorService {
  private sheetService = inject(DHII_SheetService);
  private rollService = inject(RollService);

  private readonly homeworldsSubject$: BehaviorSubject<DHII_Homeworlds> = new BehaviorSubject(
    HOMEWORLDS
  );

  readonly homeworlds$: Observable<DHII_Homeworlds> = this.homeworldsSubject$.asObservable();
  readonly homeworlds: DHII_Homeworlds = this.homeworldsSubject$.value;

  private readonly backgroundsSubject$ = new BehaviorSubject(BACKGROUNDS);
  readonly backgrounds$ = this.backgroundsSubject$.asObservable();
  readonly backgrounds = this.backgroundsSubject$.value;

  private readonly rolesSubject$ = new BehaviorSubject(ROLES);
  readonly roles$ = this.rolesSubject$.asObservable();
  readonly roles = this.rolesSubject$.value;

  readonly character$: Observable<DHII_Character> = this.sheetService.character$;

  readonly attributes$: Observable<DHII_Attributes> = this.sheetService.attributes$;

  readonly aptitudes$: Observable<DHII_Aptitude[]> = this.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.aptitude) ===
          JSON.stringify(c.homeworld?.value.aptitude) &&
        JSON.stringify(p.role?.value.aptitudes) === JSON.stringify(c.role?.value.aptitudes)
    ),
    map(character =>
      [character.homeworld?.value.aptitude, ...(character.role?.value.aptitudes ?? [])].filter(
        a => !!a
      )
    ),
    map(array => [...array, 'General' as DHII_Aptitude])
  );

  readonly aptitudesToPick$: Observable<DHII_Aptitude[][]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.background?.value.pick?.aptitudes) ===
          JSON.stringify(c.background?.value.pick?.aptitudes) &&
        JSON.stringify(p.role?.value.pick.aptitudes) ===
          JSON.stringify(c.role?.value.pick.aptitudes)
    ),
    map(character => {
      return [
        ...(character.background?.value.pick?.aptitudes ?? []),
        ...(character.role?.value.pick.aptitudes ?? [])
      ];
    })
  );

  readonly talents$: Observable<DHII_TalentName[]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.talents) === JSON.stringify(c.homeworld?.value.talents) &&
        JSON.stringify(p.background?.value.talents) === JSON.stringify(c.background?.value.talents)
    ),
    map(character =>
      [
        ...(character.homeworld?.value.talents ?? []),
        ...(character.background?.value.talents ?? [])
      ].filter(a => !!a)
    )
  );

  readonly talentsToPick$: Observable<DHII_TalentName[][]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.pick?.talents) ===
          JSON.stringify(c.homeworld?.value.pick?.talents) &&
        JSON.stringify(p.background?.value.pick?.talents) ===
          JSON.stringify(c.background?.value.pick?.talents) &&
        JSON.stringify(p.role?.value.pick.talents) === JSON.stringify(c.role?.value.pick.talents)
    ),
    map(character => {
      return [
        ...(character.homeworld?.value.pick?.talents ?? []),
        ...(character.background?.value.pick?.talents ?? []),
        ...(character.role?.value.pick.talents ?? [])
      ];
    })
  );

  readonly skills$: Observable<DHII_SkillName[]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.skills) === JSON.stringify(c.homeworld?.value.skills) &&
        JSON.stringify(p.background?.value.skills) === JSON.stringify(c.background?.value.skills)
    ),
    map(character =>
      [
        ...(character.homeworld?.value.skills ?? []),
        ...(character.background?.value.skills ?? [])
      ].filter(a => !!a)
    )
  );

  readonly skillsToPick$: Observable<DHII_SkillName[][]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.pick?.skills) ===
          JSON.stringify(c.homeworld?.value.pick?.skills) &&
        JSON.stringify(p.background?.value.pick?.skills) ===
          JSON.stringify(c.background?.value.pick?.skills)
    ),
    map(character => {
      return [
        ...(character.homeworld?.value.pick?.skills ?? []),
        ...(character.background?.value.pick?.skills ?? [])
      ];
    })
  );

  readonly equipment$: Observable<DHII_BackgroundEquipment[]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.background?.value.equipment) ===
        JSON.stringify(c.background?.value.equipment)
    ),
    map(character => [...(character.background?.value.equipment ?? [])].filter(a => !!a))
  );

  readonly equipmentToPick$: Observable<DHII_BackgroundEquipment[][]> =
    this.sheetService.character$.pipe(
      distinctUntilChanged(
        (p, c) =>
          JSON.stringify(p.background?.value.pick?.equipment) ===
          JSON.stringify(c.background?.value.pick?.equipment)
      ),
      map(character => {
        return [...(character.background?.value.pick?.equipment ?? [])];
      })
    );

  public setHomeworld(homeworld: DHII_CharacterHomeworld): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.homeworld! = homeworld;
    this.sheetService.updateCharacter(character);
  }

  public setBackground(background: DHII_CharacterBackground): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.background! = background;
    this.sheetService.updateCharacter(character);
  }

  public setRole(role: DHII_CharacterRole): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.role! = role;
    this.sheetService.updateCharacter(character);
  }

  public setEquipment(eq: string[]): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.equipment = this.getEquipment(eq);
    this.sheetService.updateCharacter(character);
  }

  public setAptitudes(newAptitudes: DHII_Aptitude[]): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.aptitudes = newAptitudes;
    this.sheetService.updateAptitudes(newAptitudes);
  }

  public setTalents(talents: DHII_TalentName[]): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.tallents = this.getTalentsByNames(talents);
    this.sheetService.updateCharacter(character);
  }

  public setSkills(skillNames: DHII_SkillName[]): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    skillNames.forEach(skillName => {
      const skill: DHII_Skill | undefined = character.skills.get(skillName);
      if (skill) {
        skill.lvl.current++;
      }
    });

    this.sheetService.updateCharacter(character);

    skillNames.forEach(skillName => {
      const skill: DHII_Skill | undefined = character.skills.get(skillName);
      if (!skill) {
        throw Error('Skill not found: ' + skillName);
      }
      this.sheetService.updateSkill(skill);
    });
  }

  public setWounds(): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    const wounds: number | undefined = character?.homeworld?.value.wounds;

    if (!wounds) {
      throw new Error('character.homewolrd is not set');
    }

    const woundRoll: number =
      wounds +
      this.rollService.rollDices({
        roll: '1d5',
        type: 'default',
        title: 'Determine Wounds'
      });

    character.wounds.current = woundRoll;
    character.wounds.max = woundRoll;
    this.sheetService.updateCharacter(character);
  }

  public setDivination(): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    const divinationRoll: number = this.rollService.rollDices({
      roll: '1d100',
      type: 'default',
      title: 'Set Divination'
    });

    character.divination = rollDivinationTable(divinationRoll);

    this.sheetService.updateCharacter(character);
  }

  public setFate(): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    const homeworld: DHII_Homeworld | undefined = character?.homeworld?.value;

    if (!homeworld) {
      throw new Error('character.homewolrd is not set');
    }

    const fateRoll: number = this.rollService.rollDices({
      roll: '1d10',
      type: 'default',
      title: 'Determine Fate'
    });

    const fate: number =
      fateRoll >= homeworld.blessingThreshold ? homeworld.fate + 1 : homeworld.fate;
    character.fate.max = fate;
    character.fate.current = fate;

    this.sheetService.updateCharacter(character);
  }

  public setAttributes(): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      character.homeworld?.value.attributes.bonus;
    const penality: DHII_AttributeName | undefined = character.homeworld?.value.attributes.penality;

    if (!bonus || !penality) {
      throw Error('this.character.homeworld is incomplete');
    }

    character.attributes?.forEach(attribute => {
      attribute.value =
        this.rollAttribute({
          attribute,
          bonus,
          penality
        }) + 20;
    });

    this.sheetService.updateCharacter(character);
    character.skills.forEach(skill => this.sheetService.updateSkill(skill));
  }

  public setCharacterDetails(details: DHII_CharacterDetails): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    character.details = details;
    this.sheetService.updateCharacter(character);
  }

  public rerollAttribute(attributeName: DHII_AttributeName): void {
    const character: DHII_Character = this.sheetService.getCharacter();
    const attribute: DHII_Attribute = character.attributes.get(attributeName)!;
    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      character.homeworld?.value.attributes.bonus;
    const penality: DHII_AttributeName | undefined = character.homeworld?.value.attributes.penality;

    if (!bonus || !penality) {
      throw Error('this.character.homeworld is missing');
    }

    attribute.value =
      this.rollAttribute({
        attribute,
        bonus,
        penality
      }) + 20;

    this.sheetService.updateAttribute(attribute);
  }

  public saveCharacterToLocalStorage(): void {
    this.sheetService.saveCharacterToLocalStorage();
  }

  public resetAll(): void {
    this.sheetService.resetAll();
  }

  private rollAttribute(roll: {
    attribute: DHII_Attribute;
    bonus: [DHII_AttributeName, DHII_AttributeName];
    penality: DHII_AttributeName;
  }): number {
    let diceRoll: DiceRoll = '2d10';
    let modifier: 'bonus' | 'penality' | undefined;
    // @todo change roll implementation to not to require manually adding dice fot bonus/penality
    if (roll.bonus.includes(roll.attribute.name)) {
      diceRoll = '3d10';
      modifier = 'bonus';
    } else if (roll.attribute.name === roll.penality) {
      diceRoll = '3d10';
      modifier = 'penality';
    }

    return this.rollService.rollDices({
      roll: diceRoll,
      modifier,
      type: 'default',
      title: `Roll ${roll.attribute.name}`
    });
  }

  /**
   * @todo create additional options for talents with "PICK ONE" option Use specialistaion to propagate specific options.
   */
  private getTalentsByNames(talentNames: DHII_TalentName[]): DHII_Talents {
    const talents: DHII_Talents = new Map();

    talentNames.forEach(talentName => {
      const key: string = talentName.includes('(')
        ? `${talentName.split(' (')[0]} (Pick One)`
        : talentName;

      if (!key) {
        throw Error('Unable to find talent with key: ' + key);
      }
      const value: DHII_Talent | undefined = TALENTS.get(key as DHII_TalentName);
      if (!value) {
        throw Error('Unable to find talent value for key' + key);
      }
      talents.set(talentName, value);
    });

    return talents;
  }

  private getEquipment(eq: string[]): DHII_Equipment {
    const armours: Armour[] = [];
    const weapons: Weapon[] = [];
    const backpack: GenericItem[] = [];
    const variation: { name: string; quantity: number }[] = eq.map(item => {
      const el: string[] = item.split('|');
      return {
        name: el[0],
        quantity: Number(el[1])
      };
    });

    variation.forEach(el => {
      const armourItem: Armour | undefined = ARMOURS.get(el.name);
      if (armourItem) {
        armourItem.quantity = el.quantity;
        armours.push(armourItem);
        return;
      }

      const weaponItem: Weapon | undefined = WEAPONS.get(el.name);
      if (weaponItem) {
        weaponItem.quantity = el.quantity;
        weapons.push(weaponItem);
        return;
      }

      const backpackItem: GenericItem | undefined = BACKPACK_ITEMS.get(el.name);
      if (backpackItem) {
        backpackItem.quantity = el.quantity;
        backpack.push(backpackItem);
        return;
      }

      const cyberneticItem: GenericItem | undefined = CYBERNETICS.get(el.name);
      if (cyberneticItem) {
        backpack.push(cyberneticItem);
        return;
      }
    });

    return {
      armours,
      backpack,
      weapons
    };
  }
}
