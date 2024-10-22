import { DHII_Background } from './dhii-background';
import { DHII_Homeworld } from './dhii-homeworlds';
import { DHII_SkillName, DHII_Skill } from './dhii-skill';
import { DHII_Attribute, DHII_AttributeName } from './dhii-attribute';
import { DHII_Role } from './dhii-role';
import { DHII_Talent, DHII_TalentName } from './talents';
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

export type DHII_Character = {
  aptitudes: DHII_Aptitude[];
  attributes: Map<DHII_AttributeName, DHII_Attribute>;
  skills: Map<DHII_SkillName, DHII_Skill>;
  tallents?: Map<DHII_TalentName, DHII_Talent>;
  homeworld?: DHII_Homeworld;
  role?: DHII_Role;
  background?: DHII_Background;
  wounds?: number
  fate?: number
  divination?:DHII_Divination
};
