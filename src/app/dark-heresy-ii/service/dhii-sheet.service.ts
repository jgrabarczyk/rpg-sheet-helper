import { Injectable } from '@angular/core';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { DHII_Attributes, DHII_Attribute, DHII_ATTRIBUTES } from '../types/dhii-attribute';
import { DHII_Skill, DHII_SkillName, DHII_SKILLS } from '../types/dhii-skill';

const ATTRIBUTES: DHII_Attributes = structuredClone(DHII_ATTRIBUTES);
const SKILLS: Map<DHII_SkillName<string>, DHII_Skill> = structuredClone(DHII_SKILLS);

@Injectable({
  providedIn: 'root'
})
export class DHII_SheetService {
  private readonly INITIAL_CHARACTER: DHII_Character = {
    attributes: ATTRIBUTES,
    skills: new Map(Array.from(SKILLS, ([name, skill]) => this.initializeSkills(name, skill))),
    aptitudes: ['General']
  };

  protected characterSubject$: BehaviorSubject<DHII_Character> =
    new BehaviorSubject<DHII_Character>(this.INITIAL_CHARACTER);

  public readonly character$: Observable<DHII_Character> = this.characterSubject$
    .asObservable()
    .pipe(shareReplay(1));

  public readonly attributes$: Observable<DHII_Attributes> = this.characterSubject$
    .asObservable()
    .pipe(map(character => character.attributes));

  public readonly skills$: Observable<Map<DHII_SkillName, DHII_Skill>> = this.character$.pipe(
    map(character => character.skills)
  );

  public readonly aptitudes$: Observable<DHII_Aptitude[]> = this.character$.pipe(
    map(character => character.aptitudes)
  );

  public getCharacter(): DHII_Character {
    return structuredClone(this.characterSubject$.value);
  }

  updateCharacter(character: DHII_Character) {
    this.characterSubject$.next(character);
  }

  updateAttribute(changedAttribute: DHII_Attribute) {
    const character: DHII_Character = this.getCharacter();
    const attribute: DHII_Attribute | undefined = character.attributes.get(changedAttribute.name);
    if (!attribute) {
      throw Error('No attribute found with name ' + changedAttribute.name);
    }

    attribute.value = this.calculateAttributeValue({
      current: attribute,
      updated: changedAttribute
    });

    if (attribute.name !== 'Influence' && changedAttribute.name !== 'Influence') {
      attribute.lvl = changedAttribute.lvl;
    }

    this.characterSubject$.next(character);

    this.updateSkillsBasedOnAttribute(attribute);
  }

  updateSkill(changedSkill: DHII_Skill) {
    const character: DHII_Character = this.getCharacter();
    const attribute: DHII_Attribute = character.attributes.get(changedSkill.basedOn)!;

    character.skills.get(changedSkill.name)!.value = this.calculateSkillValue(
      changedSkill,
      attribute
    );

    this.characterSubject$.next(character);
  }

  updateAptitudes(aptitudes: DHII_Aptitude[]) {
    const character: DHII_Character = this.getCharacter();
    character.aptitudes = aptitudes;
    this.characterSubject$.next(character);
  }

  resetAll() {
    this.characterSubject$.next(this.INITIAL_CHARACTER);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute) {
    const character: DHII_Character = this.getCharacter();

    character.skills.forEach(skill => {
      if (skill.basedOn === changedAttribute.name) {
        skill.value = this.calculateSkillValue(skill, changedAttribute);
      }
    });
    this.characterSubject$.next(character);
  }

  private calculateAttributeValue(attribute: {
    updated: DHII_Attribute;
    current: DHII_Attribute;
  }): number {
    return attribute.updated.name === 'Influence' || attribute.current.name === 'Influence'
      ? attribute.updated.value
      : attribute.current.value +
          (attribute.updated.lvl.current - attribute.current.lvl.current) * 5;
  }

  private calculateSkillValue(skill: DHII_Skill, attribute: DHII_Attribute): number {
    const modifier: number = skill.lvl.current === 0 ? -20 : skill.lvl.current * 10 - 10;
    return attribute.value + modifier;
  }

  private initializeSkills(name: DHII_SkillName, skill: DHII_Skill): [DHII_SkillName, DHII_Skill] {
    const attribute: DHII_Attribute = ATTRIBUTES.get(skill.basedOn)!;

    return [
      name,
      {
        ...skill,
        value: this.calculateSkillValue(skill, attribute)
      }
    ];
  }
}
