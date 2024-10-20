import { Injectable } from '@angular/core';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BehaviorSubject, Observable } from 'rxjs';
import { DHII_Attribute, DHII_AttributeName, DHII_ATTRIBUTES } from '../types/dhii-attribute';
import { DHII_Skill, DHII_SkillName, DHII_SKILLS } from '../types/dhii-skill';

@Injectable({
  providedIn: 'root'
})
export class DHII_SheetService {
  protected characterSubject$: BehaviorSubject<Partial<DHII_Character>> = new BehaviorSubject<
    Partial<DHII_Character>
  >({});

  public readonly character$: Observable<Partial<DHII_Character>> =
    this.characterSubject$.asObservable();
  public readonly character = this.characterSubject$.value;

  protected attributesSubject$ = new BehaviorSubject<Map<DHII_AttributeName, DHII_Attribute>>(
    structuredClone(DHII_ATTRIBUTES)
  );

  public readonly attributes$: Observable<Map<DHII_AttributeName, DHII_Attribute>> =
    this.attributesSubject$.asObservable();
  public readonly attributes = this.attributesSubject$.value;

  protected readonly skillSubject$: BehaviorSubject<Map<DHII_SkillName, DHII_Skill>> =
    new BehaviorSubject<Map<DHII_SkillName, DHII_Skill>>(
      new Map(
        Array.from(structuredClone(DHII_SKILLS), ([name, skill]) =>
          this.initializeSkills(name, skill)
        )
      )
    );

  public readonly skills$: Observable<Map<DHII_SkillName, DHII_Skill>> =
    this.skillSubject$.asObservable();
  public readonly skills = this.skillSubject$.value;

  protected aptitudesSubject$: BehaviorSubject<DHII_Aptitude[]> = new BehaviorSubject<
    DHII_Aptitude[]
  >([]);
  public readonly aptitudes$: Observable<DHII_Aptitude[]> = this.aptitudesSubject$.asObservable();
  public readonly aptitudes: DHII_Aptitude[] = this.aptitudesSubject$.value;

  updtaeAptitudes(aptitudes: DHII_Aptitude[]) {
    this.aptitudesSubject$.next(aptitudes);
  }

  updateCharacter(character: Partial<DHII_Character>) {
    console.log('🚀 ~ DHII_SheetService ~ updateCharacter ~ character:', character);
    this.characterSubject$.next(character);
  }

  updateAttribute(changedAttribute: DHII_Attribute) {
    const attributes: Map<DHII_AttributeName, DHII_Attribute> = this.attributesSubject$.value;
    const attribute: DHII_Attribute | undefined = attributes.get(changedAttribute.name);
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

    this.attributesSubject$.next(attributes);

    this.updateSkillsBasedOnAttribute(attribute);
  }

  updateSkill(changedSkill: DHII_Skill) {
    const attribute: DHII_Attribute = this.attributesSubject$.value.get(changedSkill.basedOn)!;
    const skills: Map<DHII_SkillName, DHII_Skill> = this.skillSubject$.value;

    skills.get(changedSkill.name)!.value = this.calculateSkillValue(changedSkill, attribute);

    this.skillSubject$.next(skills);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute) {
    const skills: Map<DHII_SkillName, DHII_Skill> = this.skillSubject$.value;

    skills.forEach(skill => {
      if (skill.basedOn === changedAttribute.name) {
        skill.value = this.calculateSkillValue(skill, changedAttribute);
      }
    });

    this.skillSubject$.next(skills);
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
    const attribute: DHII_Attribute = this.attributesSubject$.value.get(skill.basedOn)!;

    return [
      name,
      {
        ...skill,
        value: this.calculateSkillValue(skill, attribute)
      }
    ];
  }
}
