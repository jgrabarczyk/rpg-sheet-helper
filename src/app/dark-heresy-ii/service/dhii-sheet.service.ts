import { DHII_Homeworld, HOMEWORLDS } from '../types/dhii-homeworlds';
import { Injectable } from '@angular/core';
import { DHII_Aptitude, DHII_Character } from '../types/dark-heresy-ii';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { DiceRoll, Roll } from '../../types/roll';
import { DHII_Attribute, DHII_AttributeName, DHII_ATTRIBUTES } from '../types/dhii-attribute';
import { DHII_Skill, DHII_SkillName, DHII_SKILLS } from '../types/dhii-skill';
import { BACKGROUNDS, DHII_Background } from '../types/dhii-background';
import { DHII_Role, ROLES } from '../types/dhii-role';

@Injectable({
  providedIn: 'root'
})
export class DHII_SheetService {
  protected characterSubject$: BehaviorSubject<Partial<DHII_Character>> = new BehaviorSubject<
    Partial<DHII_Character>
  >({});

  public character = this.characterSubject$.value;

  protected attributesSubject$ = new BehaviorSubject<Map<DHII_AttributeName, DHII_Attribute>>(
    structuredClone(DHII_ATTRIBUTES)
  );

  protected skillSubject$: BehaviorSubject<Map<DHII_SkillName, DHII_Skill>> = new BehaviorSubject<
    Map<DHII_SkillName, DHII_Skill>
  >(
    new Map(
      Array.from(structuredClone(DHII_SKILLS), ([name, skill]) =>
        this.initializeSkills(name, skill)
      )
    )
  );

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

  attributes$: Observable<Map<DHII_AttributeName, DHII_Attribute>> =
    this.attributesSubject$.asObservable();

  skills$: Observable<Map<DHII_SkillName, DHII_Skill>> = this.skillSubject$.asObservable();

  public aptitudes$: Observable<DHII_Aptitude[]> = this.characterSubject$
    .asObservable()
    .pipe(
      map(character =>
        [
          ...(character.background?.aptitudes ?? []),
          character.homeworld?.aptitude,
          ...(character.role?.aptitudes ?? [])
        ].filter(a => !!a)
      )
    );

  private readonly homeworldsSubject$ = new BehaviorSubject(HOMEWORLDS);
  public homeworlds$ = this.homeworldsSubject$.asObservable();
  public homeworlds = this.homeworldsSubject$.value;

  private readonly backgroundsSubject$ = new BehaviorSubject(BACKGROUNDS);
  public backgrounds$ = this.backgroundsSubject$.asObservable();
  public backgrounds = this.backgroundsSubject$.value;

  private readonly rolesSubject$ = new BehaviorSubject(ROLES);
  public roles$ = this.rolesSubject$.asObservable();
  public roles = this.rolesSubject$.value;

  protected character$: Observable<Partial<DHII_Character>> = combineLatest([
    this.attributes$,
    this.skills$,
    this.characterSubject$.asObservable()
  ]).pipe(
    map(([attributes, skills, character]) => {
      return {
        ...character,
        skills,
        attributes
      };
    })
  );

  updateHomeworld(homeworld: DHII_Homeworld) {
    const chararcter: Partial<DHII_Character> = this.characterSubject$.value;
    chararcter.homeworld = homeworld;
    this.updateAptitudes([homeworld.aptitude]);
    this.characterSubject$.next(chararcter);
  }

  updateBackground(background: DHII_Background) {
    const chararcter: Partial<DHII_Character> = this.characterSubject$.value;
    chararcter.background = background;
    this.updateAptitudes(background.aptitudes);
    this.characterSubject$.next(chararcter);
  }

  updateRole(role: DHII_Role) {
    const chararcter: Partial<DHII_Character> = this.characterSubject$.value;
    chararcter.role = role;
    this.updateAptitudes(role.aptitudes);
    this.characterSubject$.next(chararcter);
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

  updateAptitudes(newAptitudes: DHII_Aptitude[]) {
    // const aptitudes: DHII_Aptitude[] = this.aptitudesSubject$.value;
    console.log(newAptitudes);
    // newAptitudes.forEach(aptitude => {
    //   aptitudes.push(aptitude);
    // });

    // this.aptitudesSubject$.next(aptitudes);
  }

  generateAttributes() {
    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      this.character.homeworld?.attributes.bonus;
    const penality: DHII_AttributeName | undefined = this.character.homeworld?.attributes.penality;
    if (!bonus || !penality) {
      throw Error('this.character is incomplete');
    }

    this.attributesSubject$.value?.forEach(attribute => {
      attribute.value =
        this.rollAttribute({
          attribute,
          bonus,
          penality
        }) + 20;
    });
  }

  rerollAttribute(attributeName: DHII_AttributeName) {
    const attribute: DHII_Attribute = this.attributesSubject$.value.get(attributeName)!;

    const bonus: [DHII_AttributeName, DHII_AttributeName] | undefined =
      this.character.homeworld?.attributes.bonus;

    const penality: DHII_AttributeName | undefined = this.character.homeworld?.attributes.penality;
    if (!bonus || !penality) {
      throw Error('this.character.homeworld is missing');
    }

    attribute.value =
      this.rollAttribute({
        attribute,
        bonus,
        penality
      }) + 20;

    this.updateAttribute(attribute);
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
    return this.rollDices(diceRoll, modifier);
  }

  rollDices(roll: DiceRoll, modifier?: 'bonus' | 'penality'): number {
    const [diceQuantity, diceFaces] = roll.split('d').map(el => Number(el));

    const results: number[] = Array.from(
      { length: diceQuantity },
      () => Math.floor(Math.random() * diceFaces) + 1
    ).sort((a, b) => a - b);

    if (modifier === 'bonus') {
      results.shift();
    } else if (modifier === 'penality') {
      results.pop();
    }

    return results.reduce((acc, current) => acc + current);
  }

  rollTest(roll: Roll) {
    const testRoll: number = this.rollDices('1d100');
    const difficultyTier: number =
      Math.abs(Math.floor(testRoll / 10) - Math.floor(roll.value / 10)) + 1;

    console.log(
      `Test: ${roll.name} \nChance:\n  ${roll.value} \nRoll: \n  ${testRoll} \nResult: \n  ${
        testRoll <= roll.value ? 'success' : 'fail'
      } (${difficultyTier}).`
    );
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
}
