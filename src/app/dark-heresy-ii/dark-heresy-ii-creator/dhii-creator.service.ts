import { inject, Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BACKGROUNDS, DHII_Background } from '../types/dhii-background';
import { DHII_Homeworld, DHII_Homeworlds, HOMEWORLDS } from '../types/dhii-homeworlds';
import { DHII_Role, ROLES } from '../types/dhii-role';
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

  public readonly aptitudes$: Observable<DHII_Aptitude[]> = this.sheetService.character$.pipe(
    map(character =>
      [character.homeworld?.aptitude, ...(character.role?.aptitudes ?? [])].filter(a => !!a)
    ),
    map(array => [...array, 'General'])
  );

  public readonly aptitudesToPick$: Observable<DHII_Aptitude[][]> =
    this.sheetService.character$.pipe(
      map(character => {
        return [
          ...(character.background?.pick?.aptitudes ?? []),
          ...(character.role?.pick.aptitudes ?? [])
        ];
      })
    );

  public readonly talents$: Observable<DHII_TalentName[]> = this.sheetService.character$.pipe(
    map(character =>
      [...(character.homeworld?.talents ?? []), ...(character.background?.talents ?? [])].filter(
        a => !!a
      )
    )
  );

  public readonly talentsToPick$: Observable<DHII_TalentName[][]> =
    this.sheetService.character$.pipe(
      map(character => {
        return [
          ...(character.homeworld?.pick?.talents ?? []),
          ...(character.background?.pick?.talents ?? []),
          ...(character.role?.pick.talents ?? [])
        ];
      })
    );

  public readonly skills$: Observable<DHII_SkillName[]> = this.sheetService.character$.pipe(
    map(character =>
      [...(character.homeworld?.skills ?? []), ...(character.background?.skills ?? [])].filter(
        a => !!a
      )
    )
  );

  public readonly skillsToPick$: Observable<DHII_SkillName[][]> = this.sheetService.character$.pipe(
    map(character => {
      return [
        ...(character.homeworld?.pick?.skills ?? []),
        ...(character.background?.pick?.skills ?? [])
      ];
    })
  );

  public readonly equipment$: Observable<string[]> = this.sheetService.character$.pipe(
    map(character => [...(character.background?.equipment ?? [])].filter(a => !!a))
  );

  public readonly equipmentToPick$: Observable<string[][]> = this.sheetService.character$.pipe(
    map(character => {
      return [...(character.background?.pick?.equipment ?? [])];
    })
  );

  setHomeworld(homeworld: DHII_Homeworld) {
    const chararcter: DHII_Character = this.sheetService.character;
    chararcter.homeworld = homeworld;
    this.sheetService.updateCharacter(chararcter);
  }

  setBackground(background: DHII_Background) {
    const chararcter: DHII_Character = this.sheetService.character;
    chararcter.background = background;
    this.sheetService.updateCharacter(chararcter);
  }

  setRole(role: DHII_Role) {
    const chararcter: DHII_Character = this.sheetService.character;
    chararcter.role = role;
    this.sheetService.updateCharacter(chararcter);
  }

  setAptitudes(newAptitudes: DHII_Aptitude[]) {
    const chararcter: DHII_Character = this.sheetService.character;
    chararcter.aptitudes = newAptitudes;
    this.sheetService.updateAptitudes(newAptitudes);
  }

  setWounds() {
    const chararcter: DHII_Character = this.sheetService.character;
    const wounds: number | undefined = chararcter?.homeworld?.wounds;
    if (!wounds) {
      throw new Error('character.homewolrd is not set');
    }

    chararcter.wounds = wounds + rollDices('1d5');
    this.sheetService.updateCharacter(chararcter);
  }

  setDivination() {
    const chararcter: DHII_Character = this.sheetService.character;
    chararcter.divination = pickDivination();
  }

  setFate() {
    const chararcter: DHII_Character = this.sheetService.character;
    const homeworld: DHII_Homeworld | undefined = chararcter?.homeworld;
    if (!homeworld) {
      throw new Error('character.homewolrd is not set');
    }

    chararcter.fate = homeworld.fate;

    if (rollDices('1d10') >= homeworld.blessingThreshold) {
      chararcter.fate++;
    }

    this.sheetService.updateCharacter(chararcter);
    this.sheetService.updateCharacter(chararcter);
  }

  generateAttributes() {
    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      this.sheetService.character.homeworld?.attributes.bonus;
    const penality: DHII_AttributeName | undefined =
      this.sheetService.character.homeworld?.attributes.penality;

    if (!bonus || !penality) {
      throw Error('this.character is incomplete');
    }

    this.sheetService.attributes?.forEach(attribute => {
      attribute.value =
        this.rollAttribute({
          attribute,
          bonus,
          penality
        }) + 20;
    });
  }

  rerollAttribute(attributeName: DHII_AttributeName) {
    const attribute: DHII_Attribute = this.sheetService.attributes.get(attributeName)!;

    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      this.sheetService.character.homeworld?.attributes.bonus;

    const penality: DHII_AttributeName | undefined =
      this.sheetService.character.homeworld?.attributes.penality;
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
