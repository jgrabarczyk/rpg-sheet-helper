import { Skill } from '../../types/skill';
import { Characteristic } from '../../types/characteristic';
import { Enumerate } from '../../types/enumerative';

type DHII_AttributesNames =
  | 'Weapon Skill'
  | 'Ballistic Skill'
  | 'Strength'
  | 'Toughness'
  | 'Agility'
  | 'Intelligence'
  | 'Perception'
  | 'Willpower'
  | 'Fellowship'
  | 'Influance';

type DHII_SkillNames =
  | 'Acrobatics'
  | 'Athletics'
  | 'Awareness'
  | 'Charm'
  | 'Command'
  | 'Commerce'
  | 'Common Lore'
  | 'Deceive'
  | 'Dodge'
  | 'Forbidden Lore'
  | 'Inquiry'
  | 'Interrogation'
  | 'Intimidate'
  | 'Linguistics'
  | 'Logic'
  | 'Medicae'
  | 'Navigate'
  | 'Operate'
  | 'Parry'
  | 'Psyniscience'
  | 'Scholastic Lore'
  | 'Scrutiny'
  | 'Security'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Survival'
  | 'Tech-Use'
  | 'Trade';

type Aptitude =
  | 'General'
  | 'Fieldcraft'
  | 'Social'
  | 'Leadership'
  | 'Knowledge'
  | 'Defense'
  | 'Offence'
  | 'Finesse'
  | 'Psyker'
  | 'Tech'
  | DHII_AttributesNames;

type Level<N extends number> =  {
  current: Enumerate<N>;
  max: N;
};

export type DHII_Attribute =
  | (Characteristic<Exclude<DHII_AttributesNames, 'Influance'>> & {
      aptitudes: [Aptitude, Aptitude];
      lvl: Level<5>
    })
  | Characteristic<'Influance'>;
export type DHII_Skill = Skill<DHII_AttributesNames, DHII_SkillNames> & {
  aptitudes: [Aptitude, Aptitude];
  lvl: Level<4>
  value: number;
};

export const DHII_ATTRIBUTE_LIST: DHII_Attribute[] = [
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Weapon Skill',
    value: 0,
    aptitudes: ['Weapon Skill', 'Offence'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Ballistic Skill',
    value: 0,
    aptitudes: ['Ballistic Skill', 'Finesse'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Strength',
    value: 0,
    aptitudes: ['Strength', 'Offence'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Toughness',
    value: 0,
    aptitudes: ['Toughness', 'Defense'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Agility',
    value: 0,
    aptitudes: ['Agility', 'Finesse'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Intelligence',
    value: 0,
    aptitudes: ['Intelligence', 'Knowledge'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Perception',
    value: 0,
    aptitudes: ['Perception', 'Fieldcraft'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Willpower',
    value: 0,
    aptitudes: ['Willpower', 'Psyker'],
  },
  {
    lvl: {
      current: 0,
      max: 5,
    },
    name: 'Fellowship',
    value: 0,
    aptitudes: ['Fellowship', 'Social'],
  },
  {
    name: 'Influance',
    value: 0,
  },
];


export const DHII_SKILLS_LIST: DHII_Skill[] = [
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Acrobatics',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'General'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Athletics',
    basedOn: 'Strength',
    aptitudes: ['Strength', 'General'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Awareness',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Fieldcraft'],
  },

  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Charm',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Command',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Leadership'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Commerce',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Common Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Deceive',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social'],
  },

  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Dodge',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Defense'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Forbidden Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Inquiry',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Interrogation',
    basedOn: 'Willpower',
    aptitudes: ['Willpower', 'Social'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Intimidate',
    basedOn: 'Strength',
    aptitudes: ['Strength', 'Social'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Linguistics',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Logic',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Medicae',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Fieldcraft'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Navigate',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Fieldcraft'],
  },

  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Operate',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Fieldcraft'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Parry',
    basedOn: 'Weapon Skill',
    aptitudes: ['Weapon Skill', 'Defense'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Psyniscience',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Psyker'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Scholastic Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Scrutiny',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'General'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Security',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Tech'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Sleight of Hand',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Knowledge'],
  },

  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Stealth',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Fieldcraft'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Survival',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Fieldcraft'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Tech-Use',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Tech'],
  },
  {
    lvl: {
      current: 0,
      max: 4,
    },
    value: 0,
    name: 'Trade',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General'],
  },
];
