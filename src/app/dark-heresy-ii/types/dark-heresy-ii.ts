import { Skill } from '../../types/skill';
import { Characteristic } from '../../types/characteristic';
import { Level } from '../../types/level';

export type DHII_AttributeName =
  | 'Weapon Skill'
  | 'Ballistic Skill'
  | 'Strength'
  | 'Toughness'
  | 'Agility'
  | 'Intelligence'
  | 'Perception'
  | 'Willpower'
  | 'Fellowship'
  | 'Influence';

type DHII_SkillName =
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

const DHII_MAX_SKILL_LEVEL: 4 = 4 as const;
const DHII_MAX_ATTRIBUTE_LEVEL: 5 = 5 as const;
export type DHII_SkillLevel = Level<4>;
export type DHII_AttributeLevel = Level<5>;

export type DHII_Attribute =
  | (Characteristic<Exclude<DHII_AttributeName, 'Influence'>> & {
      aptitudes: [Aptitude, Aptitude];
      lvl: DHII_AttributeLevel;
    })
  | Characteristic<'Influence'>;

export type DHII_Skill = Omit<Skill<DHII_AttributeName, DHII_SkillName>, 'lvl'> & {
  aptitudes: [Aptitude, Aptitude];
  lvl: DHII_SkillLevel;
  value: number;
};

export type DHII_Character = {
  aptitudes: Aptitude[];
  attributes: { [key in DHII_AttributeName]: DHII_Attribute };
  skills?: {
    [key in DHII_SkillName]: DHII_Skill
  };  
  tallents?: {
    [key in string]: string
  };  
};

export const DHII_ATTRIBUTE_LIST: DHII_Attribute[] = [
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Weapon Skill',
    value: 0,
    aptitudes: ['Weapon Skill', 'Offensive']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Ballistic Skill',
    value: 0,
    aptitudes: ['Ballistic Skill', 'Finesse']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Strength',
    value: 0,
    aptitudes: ['Strength', 'Offensive']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Toughness',
    value: 0,
    aptitudes: ['Toughness', 'Defense']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Agility',
    value: 0,
    aptitudes: ['Agility', 'Finesse']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Intelligence',
    value: 0,
    aptitudes: ['Intelligence', 'Knowledge']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Perception',
    value: 0,
    aptitudes: ['Perception', 'Fieldcraft']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Willpower',
    value: 0,
    aptitudes: ['Willpower', 'Psyker']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Fellowship',
    value: 0,
    aptitudes: ['Fellowship', 'Social']
  },
  {
    name: 'Influence',
    value: 0
  }
];

export const DHII_SKILLS_LIST: DHII_Skill[] = [
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Acrobatics',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'General']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Athletics',
    basedOn: 'Strength',
    aptitudes: ['Strength', 'General']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Awareness',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Fieldcraft']
  },

  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Charm',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Command',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Leadership']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Commerce',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Common Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Deceive',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social']
  },

  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Dodge',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Defense']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Forbidden Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Inquiry',
    basedOn: 'Fellowship',
    aptitudes: ['Fellowship', 'Social']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Interrogation',
    basedOn: 'Willpower',
    aptitudes: ['Willpower', 'Social']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Intimidate',
    basedOn: 'Strength',
    aptitudes: ['Strength', 'Social']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Linguistics',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Logic',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Medicae',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Fieldcraft']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Navigate',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Fieldcraft']
  },

  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Operate',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Fieldcraft']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Parry',
    basedOn: 'Weapon Skill',
    aptitudes: ['Weapon Skill', 'Defense']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Psyniscience',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Psyker']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Scholastic Lore',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Knowledge']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Scrutiny',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'General']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Security',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Tech']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Sleight of Hand',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Knowledge']
  },

  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Stealth',
    basedOn: 'Agility',
    aptitudes: ['Agility', 'Fieldcraft']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Survival',
    basedOn: 'Perception',
    aptitudes: ['Perception', 'Fieldcraft']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Tech-Use',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'Tech']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_SKILL_LEVEL
    },
    value: 0,
    name: 'Trade',
    basedOn: 'Intelligence',
    aptitudes: ['Intelligence', 'General']
  }
];
