import { Homeworld, HOMEWORLDS } from './../data/homeworlds';
import { Injectable } from '@angular/core';
import {
  Aptitude,
  DHII_Attribute,
  DHII_ATTRIBUTE_LIST,
  DHII_Skill,
  DHII_SKILLS_LIST
} from '../types/dark-heresy-ii';
import { BehaviorSubject, Observable } from 'rxjs';
import { Roll } from '../../types/roll';

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

  protected aptitudesSubject$: BehaviorSubject<Aptitude[]> = new BehaviorSubject<Aptitude[]>([
    'Defense',
    'Fellowship',
    'Social',
    'Knowledge',
    'Intelligence',
    'Perception',
    'Willpower',
    'Psyker',
    'General'
  ]);
  public aptitudes$: Observable<Aptitude[]> = this.aptitudesSubject$.asObservable();

  protected homeworldSubject$: BehaviorSubject<Homeworld | null> =
    new BehaviorSubject<Homeworld | null>(null);

  public homeworld: Observable<Homeworld | null> = this.homeworldSubject$.asObservable();
  public homeworlds = HOMEWORLDS;
  public homeworlds_array = Array.from(HOMEWORLDS.entries());


  updateAttribute(changedAttribute: DHII_Attribute) {
    const attributes: DHII_Attribute[] = this.attributesSubject$.value;
    const attribute: DHII_Attribute | undefined = attributes.find(
      attribute => attribute.name === changedAttribute.name
    );

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

  rollDice(roll: Roll){
    console.log("🚀 ~ DHII_SheetService ~ rollDice ~ roll:", roll)
    // let skill!: DHII_Skill;
    const testRoll: number = Math.ceil(Math.random() * 100);
    // const value: number = skill.value;
    const difficultyTier: number = Math.abs(Math.floor(testRoll / 10) - Math.floor(roll.value / 10)) + 1;
    
    console.log(roll.name, roll.value, testRoll, testRoll <= roll.value ? 'success' : 'fail', difficultyTier);
  }

  private updateSkillsBasedOnAttribute(changedAttribute: DHII_Attribute) {
    const skills: DHII_Skill[] = this.skillSubject$.value;

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
    return attribute.value + skill.lvl.current * 5;
  }
}
