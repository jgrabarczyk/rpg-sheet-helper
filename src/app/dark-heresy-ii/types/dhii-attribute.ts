import { Characteristic } from '../../types/characteristic';
import { Level } from '../../types/level';
import { DHII_Aptitude } from './dark-heresy-ii';

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

const DHII_MAX_ATTRIBUTE_LEVEL: 5 = 5 as const;
export type DHII_AttributeLevel = Level<5>;

export type DHII_Attribute =
  | (Characteristic<Exclude<DHII_AttributeName, 'Influence'>> & {
      aptitudes: [DHII_Aptitude, DHII_Aptitude];
      lvl: DHII_AttributeLevel;
    })
  | Characteristic<'Influence'>;

export type DHII_Attributes = Map<DHII_AttributeName, DHII_Attribute>;
export const DHII_ATTRIBUTES: DHII_Attributes = new Map([
  [
    'Weapon Skill',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Weapon Skill',
      value: 0,
      aptitudes: ['Weapon Skill', 'Offence']
    }
  ],
  [
    'Ballistic Skill',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Ballistic Skill',
      value: 0,
      aptitudes: ['Ballistic Skill', 'Finesse']
    }
  ],
  [
    'Strength',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Strength',
      value: 0,
      aptitudes: ['Strength', 'Offence']
    }
  ],
  [
    'Toughness',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Toughness',
      value: 0,
      aptitudes: ['Toughness', 'Defence']
    }
  ],
  [
    'Agility',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Agility',
      value: 0,
      aptitudes: ['Agility', 'Finesse']
    }
  ],
  [
    'Intelligence',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Intelligence',
      value: 0,
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Perception',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Perception',
      value: 0,
      aptitudes: ['Perception', 'Fieldcraft']
    }
  ],
  [
    'Willpower',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Willpower',
      value: 0,
      aptitudes: ['Willpower', 'Psyker']
    }
  ],
  [
    'Fellowship',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_ATTRIBUTE_LEVEL
      },
      name: 'Fellowship',
      value: 0,
      aptitudes: ['Fellowship', 'Social']
    }
  ],
  [
    'Influence',
    {
      name: 'Influence',
      value: 0
    }
  ]
]);

export const DHII_ATTRIBUTE_LIST: DHII_Attribute[] = [
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Weapon Skill',
    value: 0,
    aptitudes: ['Weapon Skill', 'Offence']
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
    aptitudes: ['Strength', 'Offence']
  },
  {
    lvl: {
      current: 0,
      max: DHII_MAX_ATTRIBUTE_LEVEL
    },
    name: 'Toughness',
    value: 0,
    aptitudes: ['Toughness', 'Defence']
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
