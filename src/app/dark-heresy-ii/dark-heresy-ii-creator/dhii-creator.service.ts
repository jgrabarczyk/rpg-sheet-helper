import { inject, Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BACKGROUNDS, DHII_Background } from '../types/dhii-background';
import { DHII_Homeworld, HOMEWORLDS } from '../types/dhii-homeworlds';
import { DHII_Role, ROLES } from '../types/dhii-role';
import { DHII_TalentName } from '../types/talents';
import { DHII_SheetService } from '../service/dhii-sheet.service';
import { DHII_Attribute, DHII_AttributeName } from '../types/dhii-attribute';
import { DiceRoll } from '../../types/roll';
import { rollDices } from '../../utility/roll';

@Injectable({
  providedIn: 'root'
})
export class DHII_CreatorService {
  sheetService = inject(DHII_SheetService);

  private readonly homeworldsSubject$ = new BehaviorSubject(HOMEWORLDS);
  public homeworlds$ = this.homeworldsSubject$.asObservable();
  public homeworlds = this.homeworldsSubject$.value;

  private readonly backgroundsSubject$ = new BehaviorSubject(BACKGROUNDS);
  public backgrounds$ = this.backgroundsSubject$.asObservable();
  public backgrounds = this.backgroundsSubject$.value;

  private readonly rolesSubject$ = new BehaviorSubject(ROLES);
  public roles$ = this.rolesSubject$.asObservable();
  public roles = this.rolesSubject$.value;

  public aptitudes$: Observable<DHII_Aptitude[]> = this.sheetService.character$.pipe(
    map(character =>
      [character.homeworld?.aptitude, ...(character.role?.aptitudes ?? [])].filter(a => !!a)
    ),
    map(array => [...array, 'General'])
  );

  public aptitudesToPick$: Observable<DHII_Aptitude[][]> = this.sheetService.character$.pipe(
    map(character => {
      return [
        ...(character.background?.pick?.aptitudes ?? []),
        ...(character.role?.pick.aptitudes ?? [])
      ];
    })
  );

  public talents$: Observable<DHII_TalentName[]> = this.sheetService.character$.pipe(
    map(character =>
      [...(character.homeworld?.talents ?? []), ...(character.background?.talents ?? [])].filter(
        a => !!a
      )
    )
  );

  public talentsToPick$: Observable<DHII_TalentName[][]> = this.sheetService.character$.pipe(
    map(character => {
      return [
        ...(character.homeworld?.pick?.talents ?? []),
        ...(character.background?.pick?.talents ?? []),
        ...(character.role?.pick.talents ?? [])
      ];
    })
  );


  setHomeworld(homeworld: DHII_Homeworld) {
    const chararcter: Partial<DHII_Character> = this.sheetService.character;
    chararcter.homeworld = homeworld;
    this.sheetService.updateCharacter(chararcter);
  }

  setBackground(background: DHII_Background) {
    const chararcter: Partial<DHII_Character> = this.sheetService.character;
    chararcter.background = background;
    this.sheetService.updateCharacter(chararcter);
  }

  setRole(role: DHII_Role) {
    const chararcter: Partial<DHII_Character> = this.sheetService.character;
    chararcter.role = role;
    this.sheetService.updateCharacter(chararcter);
  }

  setAptitudes(newAptitudes: DHII_Aptitude[]) {
    const chararcter: Partial<DHII_Character> = this.sheetService.character;
    chararcter.aptitudes = newAptitudes;
    this.sheetService.updtaeAptitudes(newAptitudes);
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
