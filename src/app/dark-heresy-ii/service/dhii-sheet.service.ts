import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';

import {
  calculateSkillValue,
  DHII_Aptitude,
  DHII_Character,
  INITIAL_CHARACTER,
} from '@dhii/types/dark-heresy-ii';
import { DHII_Attributes, DHII_Attribute } from '@dhii/types/dhii-attribute';
import { DHII_Skill, DHII_SkillName } from '@dhii/types/dhii-skill';
import { DHII_Equipment } from '@dhii/types/items/generic-item';

import { LocalStorageService } from 'services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class DHII_SheetService {
  private readonly storageService = inject(LocalStorageService);
  private readonly router = inject(Router);

  private readonly INITIAL_CHARACTER: DHII_Character = INITIAL_CHARACTER;
  private readonly characterSubject$: BehaviorSubject<DHII_Character> =
    new BehaviorSubject<DHII_Character>(this.INITIAL_CHARACTER);

  readonly character$: Observable<DHII_Character> = this.characterSubject$
    .asObservable()
    .pipe(shareReplay(1));

  readonly attributes$: Observable<DHII_Attributes> = this.characterSubject$
    .asObservable()
    .pipe(map(character => character.attributes));

  readonly skills$: Observable<Map<DHII_SkillName, DHII_Skill>> =
    this.character$.pipe(map(character => character.skills));

  readonly aptitudes$: Observable<DHII_Aptitude[]> = this.character$.pipe(
    map(character => character.aptitudes)
  );

  readonly dhiiLocalStorageSaveNames$ = this.storageService.DHII_CharacterKeys$;

  public getCharacter(): DHII_Character {
    return structuredClone(this.characterSubject$.value);
  }

  public updateCharacter(character: DHII_Character): void {
    this.characterSubject$.next(character);
  }

  public saveCharacterToLocalStorage(): void {
    this.storageService
      .saveCharacterToLocalStorage(this.getCharacter(), 'dhii')
      .subscribe(saveName =>
        this.router.navigate(['/sheet', 'dhii', saveName])
      );
  }

  public loadCurrentCharacter(): void {
    this.storageService.loadCurrentCharacter();
  }

  public loadCharacterFromLocalStorage(
    item: string,
    skipRedirect: boolean = false
  ): void {
    const loadedCharacter: DHII_Character =
      this.storageService.loadCharacterFromLocalStorage(item, 'dhii');

    this.updateCharacter(loadedCharacter);

    if (skipRedirect) {
      return;
    }

    this.router.navigate(['/sheet', 'dhii', item]);
  }

  public deleteCharacterFromLocalStorage(item: string): void {
    this.storageService
      .deleteCharacterFromLocalStorage(item, 'dhii')
      .subscribe();
  }

  public deleteCurrentCharacter(): void {
    this.storageService.deleteCurrentCharacter().subscribe(() => {
      this.router.navigate(['/load']);
    });
  }

  public addEquipment(equipment: DHII_Equipment): void {
    const character: DHII_Character = this.getCharacter();
    const currentEquipment: DHII_Equipment | undefined =
      character.equipment ?? {
        armours: [],
        backpack: [],
        weapons: [],
      };

    character.equipment = {
      armours: [...currentEquipment.armours, ...equipment.armours],
      weapons: [...currentEquipment.weapons, ...equipment.weapons],
      backpack: [...currentEquipment.backpack, ...equipment.backpack],
    };

    this.updateCharacter(character);
  }

  public updateAttribute(changedAttribute: DHII_Attribute): void {
    const character: DHII_Character = this.getCharacter();
    const attribute: DHII_Attribute | undefined = character.attributes.get(
      changedAttribute.name
    );

    if (!attribute) {
      throw Error('No attribute found with name ' + changedAttribute.name);
    }

    attribute.value = this.calculateAttributeValue({
      current: attribute,
      updated: changedAttribute,
    });

    if (
      attribute.name !== 'Influence' &&
      changedAttribute.name !== 'Influence'
    ) {
      attribute.lvl = changedAttribute.lvl;
    }

    this.updateCharacter(character);
    this.updateSkillsBasedOnAttribute(attribute);
  }

  public updateSkill(changedSkill: DHII_Skill): void {
    const character: DHII_Character = this.getCharacter();
    const attribute: DHII_Attribute = character.attributes.get(
      changedSkill.basedOn
    )!;

    character.skills.get(changedSkill.name)!.value = calculateSkillValue(
      changedSkill,
      attribute
    );

    this.updateCharacter(character);
  }

  public updateAptitudes(aptitudes: DHII_Aptitude[]): void {
    const character: DHII_Character = this.getCharacter();
    character.aptitudes = aptitudes;

    this.updateCharacter(character);
  }

  public resetAll(): void {
    this.characterSubject$.next(this.INITIAL_CHARACTER);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute): void {
    const character: DHII_Character = this.getCharacter();
    character.skills.forEach(skill => {
      if (skill.basedOn === changedAttribute.name) {
        skill.value = calculateSkillValue(skill, changedAttribute);
      }
    });

    this.updateCharacter(character);
  }

  private calculateAttributeValue(attribute: {
    updated: DHII_Attribute;
    current: DHII_Attribute;
  }): number {
    return attribute.updated.name === 'Influence' ||
      attribute.current.name === 'Influence'
      ? attribute.updated.value
      : attribute.updated.value +
          (attribute.updated.lvl.current - attribute.current.lvl.current) * 5;
  }
}
