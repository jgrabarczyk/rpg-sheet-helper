import { DHII_AttributeName } from './dhii-attribute';
import { DHII_Aptitude } from './dark-heresy-ii';
import { DHII_TalentName } from './talents';
import { DHII_SkillName } from './dhii-skill';
export type DHII_HomeworldNames =
  | 'feral'
  | 'forge'
  | 'highborn'
  | 'hive'
  | 'shrine'
  | 'voidborn'
  | 'agri-world'
  | 'feudal'
  | 'frontier'
  | 'death'
  | 'garden'
  | 'research'
  | 'daemon'
  | 'penal'
  | 'quarantine';

export interface DHII_Homeworld {
  name: string;
  bonus: string;
  attributes: {
    bonus: [DHII_AttributeName, DHII_AttributeName];
    penality: DHII_AttributeName;
  };
  wounds: number;
  fate: number;
  blessingThreshold: number;
  aptitude: DHII_Aptitude;
  pick?: {
    talents?: DHII_TalentName[][];
    skills?: DHII_SkillName[][];
  };
  talents?: DHII_TalentName[];
  skills?: DHII_SkillName[];
}
export const HOMEWORLDS: Map<DHII_HomeworldNames, DHII_Homeworld> = new Map<
  DHII_HomeworldNames,
  DHII_Homeworld
>([
  [
    'feral',
    {
      name: 'Feral World',
      aptitude: 'Toughness',
      attributes: {
        bonus: ['Strength', 'Toughness'],
        penality: 'Influence'
      },
      blessingThreshold: 3,
      bonus:
        "The Old Ways: A Feral World character's Low-Tech weapons lose any present Primitive Qualities and gain the Proven (3) Quality.",
      fate: 2,
      wounds: 9
    }
  ],
  [
    'forge',
    {
      name: 'Forge World',
      aptitude: 'Intelligence',
      attributes: {
        bonus: ['Intelligence', 'Toughness'],
        penality: 'Fellowship'
      },
      fate: 3,
      blessingThreshold: 8,
      wounds: 8,
      bonus:
        "Omnissiah's Chosen: A Forge World character gains the Technical Knock or Weapon-Tech Talent. ",
      pick: { talents: [['Technical Knock', 'Weapon-Tech']] }
    }
  ],
  [
    'highborn',
    {
      name: 'Hightborn',
      aptitude: 'Fellowship',
      attributes: {
        bonus: ['Fellowship', 'Influence'],
        penality: 'Toughness'
      },
      blessingThreshold: 10,
      fate: 4,
      bonus:
        'Breeding Counts: A Highborn character reduces Influence losses by 1, to a minimum loss of 1. ',
      wounds: 9
    }
  ],
  [
    'hive',
    {
      name: 'Hive World',
      aptitude: 'Perception',
      attributes: {
        bonus: ['Agility', 'Perception'],
        penality: 'Willpower'
      },
      blessingThreshold: 6,
      fate: 2,
      bonus:
        'Teeming Masses in Metal Mountains: A Hive World character moves through crowds as if they were open terrain and gains a +20 bonus to Navigate (Surface) Tests in closed spaces. ',
      wounds: 8
    }
  ],
  [
    'shrine',
    {
      name: 'Shrine World',
      aptitude: 'Willpower',
      attributes: {
        bonus: ['Fellowship', 'Willpower'],
        penality: 'Perception'
      },
      blessingThreshold: 6,
      fate: 3,
      bonus:
        "Faith in the Creed: When spending a Fate Point, a Shrine World character's number of Fate Points are not reduced on a 1d10 result of 1.",
      wounds: 8
    }
  ],
  [
    'voidborn',
    {
      attributes: {
        bonus: ['Intelligence', 'Willpower'],
        penality: 'Strength'
      },
      fate: 3,
      blessingThreshold: 5,
      wounds: 7,
      bonus:
        'Child of the Dark: A voidborn character starts with the Strong Minded talent, and gains a +30 bonus to tests for moving in zero-gravity',
      aptitude: 'Intelligence',
      talents: ['Strong Minded'],
      name: 'Voidborn'
    }
  ],
  [
    'agri-world',
    {
      attributes: {
        bonus: ['Fellowship', 'Strength'],
        penality: 'Agility'
      },
      fate: 2,
      blessingThreshold: 7,
      wounds: 8,
      bonus:
        'Strength from the Land: An agri-world character starts with the Brutal Charge (2) Trait',
      aptitude: 'Strength',
      name: 'Agri-World',
      talents: []
    }
  ],
  [
    'feudal',
    {
      attributes: {
        bonus: ['Perception', 'Weapon Skill'],
        penality: 'Intelligence'
      },
      fate: 3,
      blessingThreshold: 6,
      wounds: 9,
      bonus:
        'At Home in Armour: A feudal world character ignores the maximum Agility value imposed by any armour he is wearing',
      aptitude: 'Weapon Skill',
      name: 'Feudal World',
      talents: []
    }
  ],
  [
    'frontier',
    {
      attributes: {
        bonus: ['Ballistic Skill', 'Perception'],
        penality: 'Fellowship'
      },
      fate: 3,
      blessingThreshold: 7,
      wounds: 7,
      bonus:
        'Rely on None but Yourself: A frontier world character gains a +20 bonus to Tech-Use tests when applying a personal weapon modification, and a +10 bonus when repairing damaged items',
      aptitude: 'Ballistic Skill',
      name: 'Frontier World',
      talents: []
    }
  ],
  [
    'death',
    {
      attributes: {
        bonus: ['Agility', 'Perception'],
        penality: 'Fellowship'
      },
      fate: 2,
      blessingThreshold: 5,
      wounds: 9,
      bonus:
        "Survivor's Paranoia: While a death world character is Surprised, non-Surprised attackers do not gain the normal +30 bonus to their Weapon and Ballistic Skill tests when targeting this character",
      aptitude: 'Fieldcraft',
      name: 'Death World',
      talents: []
    }
  ],
  [
    'garden',
    {
      attributes: {
        bonus: ['Fellowship', 'Agility'],
        penality: 'Toughness'
      },
      fate: 2,
      blessingThreshold: 4,
      wounds: 7,
      bonus:
        'Serenity of the Green: A garden world character halves the duration (rounding up) of any result from Shock or Mental Traumas, and can remove Insanity Points for 50xp per point, rather than the normal 100xp',
      aptitude: 'Social',
      name: 'Garden World',
      talents: []
    }
  ],
  [
    'research',
    {
      attributes: {
        bonus: ['Intelligence', 'Perception'],
        penality: 'Fellowship'
      },
      fate: 2,
      blessingThreshold: 4,
      wounds: 8,
      bonus:
        'Pursuit of Data: Whenever a research station character reaches Rank 2 (Trained) in a Scholastic Lore skill, he also gains Rank 1 (Known) in one related or identical Forbidden Lore skill specialisation of their choice. The GM is the final arbiter of whether the two specialisations are related.',
      aptitude: 'Knowledge',
      name: 'Research Station',
      talents: []
    }
  ],
  [
    'daemon',
    {
      attributes: {
        bonus: ['Willpower', 'Perception'],
        penality: 'Fellowship'
      },
      fate: 3,
      blessingThreshold: 4,
      wounds: 7,
      bonus:
        'Touched by the Warp: A Daemon world native begins with one rank in the Psyniscience skill. Should he gain this skill again in a later step of character creation, he instead gains one additional rank of this skill. This character also begins with 1d10+5 Corruption Points ',
      aptitude: 'Willpower',
      skills: ['Psyniscience'],
      name: 'Daemon World',
      talents: []
    }
  ],
  [
    'penal',
    {
      attributes: {
        bonus: ['Toughness', 'Perception'],
        penality: 'Influence'
      },
      fate: 3,
      blessingThreshold: 8,
      wounds: 10,
      bonus:
        'Finger on the Pulse: One survives a penal colony by instinctively knowing who is in charge and who is a threat. A penal colony character begins with one rank in Common Lore (Underworld) and Scrutiny skills, and starts with the Peer (Criminal Cartels) talent.',
      talents: ['Peer (Criminal Cartels)'],
      aptitude: 'Toughness',
      name: 'Penal Colony'
    }
  ],
  [
    'quarantine',
    {
      attributes: {
        bonus: ['Ballistic Skill', 'Intelligence'],
        penality: 'Strength'
      },
      fate: 3,
      blessingThreshold: 9,
      wounds: 8,
      bonus:
        "Secretive by Nature: Those who manage to leave a quarantine world learn how to keep secrets. Wheneve the warband's Subtlety would decrease, it decreases by 2 less (to a minimum of 1)",
      aptitude: 'Fieldcraft',
      name: 'Quarantine World',
      talents: []
    }
  ]
]);
