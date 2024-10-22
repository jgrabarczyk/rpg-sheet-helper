import { Injectable } from '@angular/core';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DHII_Attribute, DHII_AttributeName, DHII_ATTRIBUTES } from '../types/dhii-attribute';
import { DHII_Skill, DHII_SkillName, DHII_SKILLS } from '../types/dhii-skill';

const ATTRIBUTES: Map<DHII_AttributeName, DHII_Attribute> = structuredClone(DHII_ATTRIBUTES);
const SKILLS: Map<DHII_SkillName<string>, DHII_Skill> = structuredClone(DHII_SKILLS);

@Injectable({
  providedIn: 'root'
})
export class DHII_SheetService {
  protected characterSubject$: BehaviorSubject<DHII_Character> =
    new BehaviorSubject<DHII_Character>({
      attributes: ATTRIBUTES,
      skills: new Map(Array.from(SKILLS, ([name, skill]) => this.initializeSkills(name, skill))),
      aptitudes: ['General']
    });

  public readonly character$: Observable<DHII_Character> = this.characterSubject$.asObservable();
  public readonly character = this.characterSubject$.value;

  public readonly attributes$: Observable<Map<DHII_AttributeName, DHII_Attribute> | undefined> =
    this.characterSubject$.asObservable().pipe(map(character => character.attributes));
  public readonly attributes = this.character.attributes;

  public readonly skills$: Observable<Map<DHII_SkillName, DHII_Skill>> = this.character$.pipe(
    map(character => character.skills)
  );
  public readonly skills = this.character.skills;

  protected aptitudesSubject$: BehaviorSubject<DHII_Aptitude[]> = new BehaviorSubject<
    DHII_Aptitude[]
  >([]);
  public readonly aptitudes$: Observable<DHII_Aptitude[]> = this.aptitudesSubject$.asObservable();
  public readonly aptitudes: DHII_Aptitude[] = this.aptitudesSubject$.value;

  updtaeAptitudes(aptitudes: DHII_Aptitude[]) {
    this.aptitudesSubject$.next(aptitudes);
  }

  updateCharacter(character: DHII_Character) {
    this.characterSubject$.next(character);
  }

  updateAttribute(changedAttribute: DHII_Attribute) {
    const attribute: DHII_Attribute | undefined = this.attributes.get(changedAttribute.name);
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

    this.characterSubject$.next(this.character);

    this.updateSkillsBasedOnAttribute(attribute);
  }

  updateSkill(changedSkill: DHII_Skill) {
    const attribute: DHII_Attribute = this.attributes.get(changedSkill.basedOn)!;

    this.skills.get(changedSkill.name)!.value = this.calculateSkillValue(changedSkill, attribute);

    this.characterSubject$.next(this.character);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute) {
    this.skills.forEach(skill => {
      if (skill.basedOn === changedAttribute.name) {
        skill.value = this.calculateSkillValue(skill, changedAttribute);
      }
    });
    this.characterSubject$.next(this.character);
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
