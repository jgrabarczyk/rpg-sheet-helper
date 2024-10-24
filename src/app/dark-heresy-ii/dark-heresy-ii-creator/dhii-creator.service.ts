import { inject, Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject, distinctUntilChanged, tap } from 'rxjs';
import {
  DHII_Aptitude,
  DHII_Character,
  DHII_CharacterBackground,
  DHII_CharacterHomeworld,
  DHII_CharacterRole
} from '../types/dark-heresy-ii';
import { BACKGROUNDS } from '../types/dhii-background';
import { DHII_Homeworld, DHII_Homeworlds, HOMEWORLDS } from '../types/dhii-homeworlds';
import { ROLES } from '../types/dhii-role';
import { DHII_TalentName } from '../types/talents';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { DHII_Attributes, DHII_Attribute, DHII_AttributeName } from '../types/dhii-attribute';
import { DiceRoll } from '../../types/roll';
import { rollDices } from '../../utility/roll';
import { DHII_SkillName } from '../types/dhii-skill';
import { pickDivination } from '../types/dhii-divination';

@Injectable({
  providedIn: 'root'
})
export class DHII_CreatorService {
  sheetService = inject(DHII_SheetService);

  private readonly homeworldsSubject$: BehaviorSubject<DHII_Homeworlds> = new BehaviorSubject(
    HOMEWORLDS
  );
  public readonly homeworlds$: Observable<DHII_Homeworlds> = this.homeworldsSubject$.asObservable();
  public readonly homeworlds: DHII_Homeworlds = this.homeworldsSubject$.value;

  private readonly backgroundsSubject$ = new BehaviorSubject(BACKGROUNDS);
  public readonly backgrounds$ = this.backgroundsSubject$.asObservable();
  public readonly backgrounds = this.backgroundsSubject$.value;

  private readonly rolesSubject$ = new BehaviorSubject(ROLES);
  public readonly roles$ = this.rolesSubject$.asObservable();
  public readonly roles = this.rolesSubject$.value;

  public readonly character$: Observable<DHII_Character> = this.sheetService.character$;
  public readonly attributes$: Observable<DHII_Attributes> = this.sheetService.attributes$;

  public readonly aptitudes$: Observable<DHII_Aptitude[]> = this.character$.pipe(
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

  public readonly aptitudesToPick$: Observable<DHII_Aptitude[][]> =
    this.sheetService.character$.pipe(
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

  public readonly talents$: Observable<DHII_TalentName[]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.homeworld?.value.talents) === JSON.stringify(c.homeworld?.value.talents) &&
        JSON.stringify(p.background?.value.talents) === JSON.stringify(c.background?.value.talents)
    ),
    map(
      character =>
        [
          ...(character.homeworld?.value.talents ?? []),
          ...(character.background?.value.talents ?? [])
        ].filter(a => !!a),
      tap(v => console.log('talents', v))
    )
  );

  public readonly talentsToPick$: Observable<DHII_TalentName[][]> =
    this.sheetService.character$.pipe(
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

  public readonly skills$: Observable<DHII_SkillName[]> = this.sheetService.character$.pipe(
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

  public readonly skillsToPick$: Observable<DHII_SkillName[][]> = this.sheetService.character$.pipe(
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

  public readonly equipment$: Observable<string[]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.background?.value.equipment) ===
        JSON.stringify(c.background?.value.equipment)
    ),
    map(character => [...(character.background?.value.equipment ?? [])].filter(a => !!a))
  );

  public readonly equipmentToPick$: Observable<string[][]> = this.sheetService.character$.pipe(
    distinctUntilChanged(
      (p, c) =>
        JSON.stringify(p.background?.value.pick?.equipment) ===
        JSON.stringify(c.background?.value.pick?.equipment)
    ),
    map(character => {
      return [...(character.background?.value.pick?.equipment ?? [])];
    })
  );

  setHomeworld(homeworld: DHII_CharacterHomeworld) {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    chararcter.homeworld! = homeworld;
    this.sheetService.updateCharacter(chararcter);
  }

  setBackground(background: DHII_CharacterBackground) {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    chararcter.background! = background;
    this.sheetService.updateCharacter(chararcter);
  }

  setRole(role: DHII_CharacterRole) {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    chararcter.role! = role;
    this.sheetService.updateCharacter(chararcter);
  }

  setAptitudes(newAptitudes: DHII_Aptitude[]) {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    chararcter.aptitudes = newAptitudes;
    this.sheetService.updateAptitudes(newAptitudes);
  }

  setWounds() {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    const wounds: number | undefined = chararcter?.homeworld?.value.wounds;
    if (!wounds) {
      throw new Error('character.homewolrd is not set');
    }

    chararcter.wounds = wounds + rollDices('1d5');
    this.sheetService.updateCharacter(chararcter);
  }

  setDivination() {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    chararcter.divination = pickDivination();
  }

  setFate() {
    const chararcter: DHII_Character = this.sheetService.getCharacter();
    const homeworld: DHII_Homeworld | undefined = chararcter?.homeworld?.value;
    if (!homeworld) {
      throw new Error('character.homewolrd is not set');
    }

    chararcter.fate = homeworld.fate;

    if (rollDices('1d10') >= homeworld.blessingThreshold) {
      chararcter.fate++;
    }

    this.sheetService.updateCharacter(chararcter);
  }

  setAttributes() {
    const character: DHII_Character = this.sheetService.getCharacter();
    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      character.homeworld?.value.attributes.bonus;
    const penality: DHII_AttributeName | undefined = character.homeworld?.value.attributes.penality;

    if (!bonus || !penality) {
      throw Error('this.character is incomplete');
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
  }

  rerollAttribute(attributeName: DHII_AttributeName) {
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

  reset() {
    this.sheetService.resetAll();
  }

  private rollAttribute(roll: {
    attribute: DHII_Attribute;
    bonus: [DHII_AttributeName, DHII_AttributeName];
    penality: DHII_AttributeName;
  }): number {
    let diceRoll: DiceRoll = '2d10';
    let modifier: 'bonus' | 'penality' | undefined;

    if (roll.bonus.includes(roll.attribute.name)) {
      diceRoll = '3d10';
      modifier = 'bonus';
    } else if (roll.attribute.name === roll.penality) {
      diceRoll = '3d10';
      modifier = 'penality';
    }
    return rollDices(diceRoll, modifier);
  }
}
