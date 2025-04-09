import { DHII_Background, DHII_BackgroundNames } from './dhii-background';
import { DHII_Homeworld, DHII_HomeworldNames } from './dhii-homeworlds';
import { DHII_SkillName, DHII_Skill } from './dhii-skill';
import { DHII_Attribute, DHII_AttributeName } from './dhii-attribute';
import { DHII_Role, DHII_RoleNames } from './dhii-role';
import { DHII_Talent, DHII_TalentName } from './dhii-talents';
import { DHII_Divination } from './dhii-divination';

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

export type DHII_CharacterHomeworld = { key: DHII_HomeworldNames; value: DHII_Homeworld };
export type DHII_CharacterRole = { key: DHII_RoleNames; value: DHII_Role };
export type DHII_CharacterBackground = { key: DHII_BackgroundNames; value: DHII_Background };

export type DHII_Character = {
  aptitudes: DHII_Aptitude[];
  attributes: Map<DHII_AttributeName, DHII_Attribute>;
  skills: Map<DHII_SkillName, DHII_Skill>;
  tallents?: Map<DHII_TalentName, DHII_Talent>;
  homeworld?: DHII_CharacterHomeworld;
  role?: DHII_CharacterRole;
  background?: DHII_CharacterBackground;
  wounds?: number;
  fate?: number;
  divination?: DHII_Divination;
};
