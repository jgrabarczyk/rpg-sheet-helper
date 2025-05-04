import { DHII_Background, DHII_BackgroundNames } from './dhii-background';
import { DHII_Homeworld, DHII_HomeworldNames } from './dhii-homeworlds';
import { DHII_SkillName, DHII_Skill, DHII_SKILLS } from './dhii-skill';
import {
  DHII_Attribute,
  DHII_AttributeName,
  DHII_ATTRIBUTES,
  DHII_Attributes,
} from './dhii-attribute';
import { DHII_Role, DHII_RoleNames } from './dhii-role';
import { DHII_Talent, DHII_TalentName } from './dhii-talents';
import { DHII_Divination } from './roll-tables/dhii-divination';
import { DHII_Equipment } from './items/generic-item';

export type DHII_Aptitude =
  | 'General'
  | 'Fieldcraft'
  | 'Social'
  | 'Leadership'
  | 'Knowledge'
  | 'Defence'
  | 'Offence'
  | 'Finesse'
  | 'Psyker'
  | 'Tech'
  | DHII_AttributeName;

export type DHII_CharacterDetails = {
  characterName: string;
  age: number;
};
export type DHII_CharacterHomeworld = {
  key: DHII_HomeworldNames;
  value: DHII_Homeworld;
};
export type DHII_CharacterRole = { key: DHII_RoleNames; value: DHII_Role };
export type DHII_CharacterBackground = {
  key: DHII_BackgroundNames;
  value: DHII_Background;
};
export interface ResourcePool {
  max: number;
  current: number;
}

export type DHII_Character = {
  experience: {
    spent: number;
    free: number;
  };
  equipment?: DHII_Equipment;
  corruption: number;
  insanity: number;
  wounds: ResourcePool;
  fate: ResourcePool;
  aptitudes: DHII_Aptitude[];
  attributes: Map<DHII_AttributeName, DHII_Attribute>;
  details?: DHII_CharacterDetails;
  skills: Map<DHII_SkillName, DHII_Skill>;
  tallents?: Map<DHII_TalentName, DHII_Talent>;
  homeworld?: DHII_CharacterHomeworld;
  role?: DHII_CharacterRole;
  background?: DHII_CharacterBackground;
  divination?: DHII_Divination;
};

const ATTRIBUTES: DHII_Attributes = structuredClone(DHII_ATTRIBUTES);
const SKILLS: Map<DHII_SkillName<string>, DHII_Skill> = structuredClone(
  DHII_SKILLS
);

function initializeSkills(
  name: DHII_SkillName,
  skill: DHII_Skill
): [DHII_SkillName, DHII_Skill] {
  const attribute: DHII_Attribute = ATTRIBUTES.get(skill.basedOn)!;

  return [
    name,
    {
      ...skill,
      value: calculateSkillValue(skill, attribute),
    },
  ];
}

export function calculateSkillValue(
  skill: DHII_Skill,
  attribute: DHII_Attribute
): number {
  const modifier: number =
    skill.lvl.current === 0 ? -20 : skill.lvl.current * 10 - 10;
  return attribute.value + modifier;
}

export const INITIAL_CHARACTER: DHII_Character = {
  corruption: 0,
  insanity: 0,
  experience: { free: 0, spent: 0 },
  fate: { max: 0, current: 0 },
  wounds: { max: 0, current: 0 },
  attributes: ATTRIBUTES,
  skills: new Map(
    Array.from(SKILLS, ([name, skill]) => initializeSkills(name, skill))
  ),
  aptitudes: ['General'],
};
