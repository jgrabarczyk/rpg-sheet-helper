import { Level } from '../../types/level';
import { Skill } from '../../types/skill';
import { Aptitude } from './dark-heresy-ii';
import { DHII_AttributeName } from './dhii-attribute';

export type DHII_SkillName =
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

const DHII_MAX_SKILL_LEVEL: 4 = 4 as const;
export type DHII_SkillLevel = Level<typeof DHII_MAX_SKILL_LEVEL>;

export type DHII_Skill = Omit<Skill<DHII_AttributeName, DHII_SkillName>, 'lvl'> & {
  aptitudes: [Aptitude, Aptitude];
  lvl: DHII_SkillLevel;
  value: number;
};

export const DHII_SKILLS: Map<DHII_SkillName, DHII_Skill> = new Map([
  [
    'Acrobatics',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Acrobatics',
      basedOn: 'Agility',
      aptitudes: ['Agility', 'General']
    }
  ],
  [
    'Athletics',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Athletics',
      basedOn: 'Strength',
      aptitudes: ['Strength', 'General']
    }
  ],
  [
    'Awareness',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Awareness',
      basedOn: 'Perception',
      aptitudes: ['Perception', 'Fieldcraft']
    }
  ],

  [
    'Charm',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Charm',
      basedOn: 'Fellowship',
      aptitudes: ['Fellowship', 'Social']
    }
  ],
  [
    'Command',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Command',
      basedOn: 'Fellowship',
      aptitudes: ['Fellowship', 'Leadership']
    }
  ],
  [
    'Commerce',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Commerce',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Common Lore',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Deceive',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Deceive',
      basedOn: 'Fellowship',
      aptitudes: ['Fellowship', 'Social']
    }
  ],

  [
    'Dodge',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Dodge',
      basedOn: 'Agility',
      aptitudes: ['Agility', 'Defense']
    }
  ],
  [
    'Forbidden Lore',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Inquiry',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Inquiry',
      basedOn: 'Fellowship',
      aptitudes: ['Fellowship', 'Social']
    }
  ],
  [
    'Interrogation',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Interrogation',
      basedOn: 'Willpower',
      aptitudes: ['Willpower', 'Social']
    }
  ],
  [
    'Intimidate',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Intimidate',
      basedOn: 'Strength',
      aptitudes: ['Strength', 'Social']
    }
  ],
  [
    'Linguistics',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Linguistics',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Logic',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Logic',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Medicae',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Medicae',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Fieldcraft']
    }
  ],
  [
    'Navigate',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Navigate',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Fieldcraft']
    }
  ],

  [
    'Operate',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Operate',
      basedOn: 'Agility',
      aptitudes: ['Agility', 'Fieldcraft']
    }
  ],
  [
    'Parry',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Parry',
      basedOn: 'Weapon Skill',
      aptitudes: ['Weapon Skill', 'Defense']
    }
  ],
  [
    'Psyniscience',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Psyniscience',
      basedOn: 'Perception',
      aptitudes: ['Perception', 'Psyker']
    }
  ],
  [
    'Scholastic Lore',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Scholastic Lore',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Scrutiny',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Scrutiny',
      basedOn: 'Perception',
      aptitudes: ['Perception', 'General']
    }
  ],
  [
    'Security',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Security',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Tech']
    }
  ],
  [
    'Sleight of Hand',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Sleight of Hand',
      basedOn: 'Agility',
      aptitudes: ['Agility', 'Knowledge']
    }
  ],

  [
    'Stealth',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Stealth',
      basedOn: 'Agility',
      aptitudes: ['Agility', 'Fieldcraft']
    }
  ],
  [
    'Survival',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Survival',
      basedOn: 'Perception',
      aptitudes: ['Perception', 'Fieldcraft']
    }
  ],
  [
    'Tech-Use',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Tech-Use',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Tech']
    }
  ],
  [
    'Trade',
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
  ]
]);
