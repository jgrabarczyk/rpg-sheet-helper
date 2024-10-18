import { Homeworld } from './../data/homeworlds';
import { DHII_SkillName, DHII_Skill } from './dhii-skill';
import { DHII_Attribute, DHII_AttributeName } from './dhii-attribute';

export type Aptitude =
  | 'General'
  | 'Fieldcraft'
  | 'Social'
  | 'Leadership'
  | 'Knowledge'
  | 'Defense'
  | 'Offensive'
  | 'Finesse'
  | 'Psyker'
  | 'Tech'
  | DHII_AttributeName;

export type DHII_Character = {
  aptitudes: Aptitude[];
  attributes: Map<DHII_AttributeName, DHII_Attribute>;
  skills?: Map<DHII_SkillName, DHII_Skill>;
  tallents?: {
    [key in string]: string;
  };
  homeworld: Homeworld;
};
