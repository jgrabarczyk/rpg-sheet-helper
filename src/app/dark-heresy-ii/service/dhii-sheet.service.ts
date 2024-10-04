import { Injectable } from '@angular/core';
import {
  DHII_Attribute,
  DHII_ATTRIBUTE_LIST,
  DHII_Skill,
  DHII_SKILLS_LIST
} from '../types/dark-heresy-ii';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DHII_SheetService {
  protected attributesSubject$ = new BehaviorSubject<DHII_Attribute[]>(
    structuredClone(DHII_ATTRIBUTE_LIST)
  );

  protected skillSubject$: BehaviorSubject<DHII_Skill[]> = new BehaviorSubject<DHII_Skill[]>(
    structuredClone(DHII_SKILLS_LIST).map(skill => ({
      ...skill,
      value:
        this.attributesSubject$.value.find(attribute => attribute.name === skill.basedOn)?.value ??
        0
    }))
  );

  attributes$: Observable<DHII_Attribute[]> = this.attributesSubject$.asObservable();

  skills$: Observable<DHII_Skill[]> = this.skillSubject$.asObservable();

  updateAttribute(changedAttribute: DHII_Attribute) {
    const attributes: DHII_Attribute[] = this.attributesSubject$.value;
    attributes.find(attribute => attribute.name === changedAttribute.name)?.value ===
      changedAttribute.value;

    this.attributesSubject$.next(attributes);

    this.updateSkillsBasedOnAttribute(changedAttribute);
  }

  changeSkill(changedSkill: DHII_Skill) {
    const attribute: DHII_Attribute = this.attributesSubject$.value.find(
      attribute => attribute.name === changedSkill.basedOn
    )!;
    const skills: DHII_Skill[] = this.skillSubject$.value;

    skills.find(skill => skill.name === changedSkill.name)!.value = this.calculateSkillValue(
      changedSkill,
      attribute
    );

    this.skillSubject$.next(skills);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute) {
    const skills: DHII_Skill[] = this.skillSubject$.value.filter(
      skill => skill.basedOn === changedAttribute.name
    );

    skills.forEach(skill => {
      skill.value = this.calculateSkillValue(skill, changedAttribute);
    });

    this.skillSubject$.next(skills);
  }

  private calculateSkillValue(skill: DHII_Skill, attribute: DHII_Attribute) {
    return attribute.value + skill.lvl.current * 5;
  }
}
