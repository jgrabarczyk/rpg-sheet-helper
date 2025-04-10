import { Level } from '../../types/level';
import { Skill } from '../../types/skill';
import { DHII_Aptitude } from './dark-heresy-ii';
import { DHII_AttributeName } from './dhii-attribute';

export type DHII_SkillName<Base extends string = string> =
  | 'Acrobatics'
  | 'Athletics'
  | 'Awareness'
  | 'Charm'
  | 'Command'
  | 'Commerce'
  | 'Common Lore'
  | `Common Lore (${Base})`
  | 'Common Lore (Adeptus Administratum)'
  | 'Common Lore (Adeptus Arbites)'
  | 'Common Lore (Machine Cult)'
  | 'Common Lore (Imperial Creed)'
  | 'Common Lore (Imperial Guard)'
  | 'Common Lore (Imperium)'
  | 'Common Lore (Underworld)'
  | 'Common Lore (Tech)'
  | 'Common Lore (War)'
  | 'Deceive'
  | 'Dodge'
  | 'Forbidden Lore'
  | 'Forbidden Lore (The Black Library)'
  | 'Forbidden Lore (Cults)'
  | 'Forbidden Lore (Daemonology)'
  | 'Forbidden Lore (Heresy)'
  | 'Forbidden Lore (Inquisition)'
  | 'Forbidden Lore (Archeotech)'
  | 'Forbidden Lore (Mutants)'
  | 'Forbidden Lore (Ordos)'
  | 'Forbidden Lore (Adeptus Mechanicus)'
  | 'Forbidden Lore (Psykers)'
  | 'Forbidden Lore (Warp)'
  | 'Forbidden Lore (Xenos)'
  | 'Inquiry'
  | 'Interrogation'
  | 'Intimidate'
  | 'Linguistics'
  | `Linguistics (${Base})`
  | 'Logic'
  | 'Medicae'
  | 'Navigate'
  | 'Navigate (Surface)'
  | 'Navigate (Aeronautica)'
  | 'Navigate (Voidship)'
  | 'Navigate (Stellar)'
  | 'Operate'
  | 'Operate (Surface)'
  | 'Operate (Aeronautica)'
  | 'Operate (Voidship)'
  | 'Parry'
  | 'Psyniscience'
  | 'Scholastic Lore'
  | 'Scholastic Lore (Archaic)'
  | 'Scholastic Lore (Astromancy)'
  | 'Scholastic Lore (Beasts)'
  | 'Scholastic Lore (Bureaucracy)'
  | 'Scholastic Lore (Chymistry)'
  | 'Scholastic Lore (Cryptology)'
  | 'Scholastic Lore (Heraldry)'
  | 'Scholastic Lore (Imperial Creed)'
  | 'Scholastic Lore (Judgement)'
  | 'Scholastic Lore (Legend)'
  | 'Scholastic Lore (Numerology)'
  | 'Scholastic Lore (Occult)'
  | 'Scholastic Lore (Philosophy)'
  | 'Scholastic Lore (Tactica Imperialis)'
  | 'Scrutiny'
  | 'Security'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Survival'
  | 'Tech-Use'
  | `Trade`
  | `Trade (${Base})`;

const DHII_MAX_SKILL_LEVEL: 4 = 4 as const;
export type DHII_SkillLevel = Level<typeof DHII_MAX_SKILL_LEVEL>;

export type DHII_Skill = Omit<Skill<DHII_AttributeName, DHII_SkillName>, 'lvl'> & {
  aptitudes: [DHII_Aptitude, DHII_Aptitude];
  lvl: DHII_SkillLevel;
  value: number;
};
export type DHII_Skills = Map<DHII_SkillName, DHII_Skill>;
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
    'Common Lore (Adeptus Astra Telepathica)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Adeptus Astra Telepathica)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Adeptus Arbites)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Adeptus Arbites)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Machine Cult)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Machine Cult)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Imperial Creed)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Imperial Creed)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Imperial Guard)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Imperial Guard)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Imperium)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Imperium)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Underworld)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Underworld)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (Tech)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (Tech)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'General']
    }
  ],
  [
    'Common Lore (War)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Common Lore (War)',
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
      aptitudes: ['Agility', 'Defence']
    }
  ],
  [
    'Forbidden Lore (The Black Library)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (The Black Library)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Cults)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Cults)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Daemonology)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Daemonology)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Heresy)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Heresy)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Inquisition)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Inquisition)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Archeotech)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Archeotech)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Mutants)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Mutants)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Ordos)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Ordos)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Adeptus Mechanicus)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Adeptus Mechanicus)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Psykers)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Psykers)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Warp)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Warp)',
      basedOn: 'Intelligence',
      aptitudes: ['Intelligence', 'Knowledge']
    }
  ],
  [
    'Forbidden Lore (Xenos)',
    {
      lvl: {
        current: 0,
        max: DHII_MAX_SKILL_LEVEL
      },
      value: 0,
      name: 'Forbidden Lore (Xenos)',
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
      aptitudes: ['Weapon Skill', 'Defence']
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
