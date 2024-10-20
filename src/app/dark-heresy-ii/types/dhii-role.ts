import { DHII_Aptitude } from './dark-heresy-ii';
import { DHII_TalentName } from './talents';

export type DHII_Role = {
  aptitudes: DHII_Aptitude[];
  talents: DHII_TalentName[];
  bonus: string;
  name: string;
};

export type DHII_RoleNames =
  | 'assassin'
  | 'chirurgeon'
  | 'desperado'
  | 'hierophant'
  | 'mystic'
  | 'sage'
  | 'seeker'
  | 'warrior'
  | 'fanatic'
  | 'penitent'
  | 'ace'
  | 'crusader';

export const ROLES: Map<DHII_RoleNames, DHII_Role> = new Map<DHII_RoleNames, DHII_Role>([
  [
    'assassin',
    {
      aptitudes: [
        'Agility',
        'Ballistic Skill',
        'Weapon Skill',
        'Fieldcraft',
        'Finesse',
        'Perception'
      ],
      talents: ['Jaded', 'Leap Up'],
      bonus:
        'Sure Kill: In addition to the normal uses of Fate points(pg 293), when an Assassin successfully hits with an attack, he may spend a Fate point to inflict additional damage equal to his degrees of success on the attack roll on the first hit the attack inflicts.',
      name: 'Assassin'
    }
  ],
  [
    'chirurgeon',
    {
      aptitudes: ['Fieldcraft', 'Intelligence', 'Knowledge', 'Strength', 'Toughness'],
      talents: ['Resistance (Pick One)', 'Takedown'],
      bonus:
        'Dedicated Healer: In addition to the normal uses of Fate points (pg 293), when a Chirurgeon character fails a test to provide First Aid, he can spend a Fate point to automatically succeed instead with the degrees of success equal to his Intelligence bonus.',
      name: 'Chirurgeon'
    }
  ],
  [
    'desperado',
    {
      aptitudes: ['Agility', 'Ballistic Skill', 'Defense', 'Fellowship', 'Finesse'],
      talents: ['Catfall', 'Quick Draw'],
      bonus:
        'Move and Shoot: Once per round, after performing Move action, a Desperado character may perform a single Standard Attack with a Pistol weapon he is currently wielding as a Free Action.',
      name: 'Desperado'
    }
  ],
  [
    'hierophant',
    {
      aptitudes: ['Fellowship', 'Offensive', 'Social', 'Toughness', 'Willpower'],
      talents: ['Double Team', 'Hatred (Choose Group)'],
      bonus:
        'Sway the Masses: In addition to the normal uses of Fate points (pg 293), a Hierophant character may spend a Fate point to automatically succeed at a Charm, Command, or Intimidate skill test with a number of degrees of success equal to his Willpower bonus. ',
      name: 'Hierophant'
    }
  ],
  [
    'mystic',
    {
      aptitudes: ['Defense', 'Intelligence', 'Knowledge', 'Perception', 'Willpower'],
      talents: ['Resistance (Psychic Powers)', 'Warp Sense'],
      bonus:
        'Stare into the Warp: A Mystic character starts the game with the Psyker elite advance (pg 90). It is recommended that a character who wishes to be a Mystic have a Willpower of at least 35.',
      name: 'Mystic'
    }
  ],
  [
    'sage',
    {
      aptitudes: ['Intelligence', 'Knowledge', 'Perception', 'Tech', 'Willpower'],
      talents: ['Ambidextrous', 'Clues from the Crowds'],
      bonus:
        'Quest for Knowledge: In addition to the normal uses of Fate points (pg 293), a Sage character may spend a Fate point to automatically succeed at a Logic or any Lore skill test with a number of degrees of success equal to his Intelligence bonus.',
      name: 'Sage'
    }
  ],
  [
    'seeker',
    {
      aptitudes: ['Fellowship', 'Intelligence', 'Perception', 'Social', 'Tech'],
      talents: ['Keen Intuition', 'Disarm'],
      bonus:
        'Nothing Escapes My Sight: In addition to the normal uses of Fate points (pg 293), a Seeker character may spend a Fate point to automatically succeed at an Awareness or Inquiry skill test with a number of degrees of success equal to his Perception bonus.',
      name: 'Seeker'
    }
  ],
  [
    'warrior',
    {
      aptitudes: ['Ballistic Skill', 'Defense', 'Offensive', 'Strength', 'Weapon Skill'],
      talents: ['Iron Jaw', 'Rapid Reload'],
      bonus:
        'Expert at Violence: In addition to the normal uses of Fate points (pg 293), after making a successful attack test, but before determining hits, a Warrior character may spend a Fate point to substitute his Weapon Skill (for melee) or Ballistic Skill (for ranged) bonus for the degrees of success scored on the attack test.',
      name: 'Warrior'
    }
  ],
  [
    'fanatic',
    {
      aptitudes: ['Leadership', 'Offensive', 'Toughness', 'Weapon Skill', 'Willpower'],
      talents: ['Deny the Witch', 'Jaded'],
      bonus:
        'Death to All Who Oppose Me!: In addition to the normal uses of Fate points (see page 293 of the DARK HERESY Core Rulebook), a Fanatic character may spend a Fate point to count as having the Hatred talent against his current foe for the duration of the encounter. Should he choose to leave combat against a Hated foe in that encounter, however, he gains 1 Insanity point.',
      name: 'Fanatic'
    }
  ],
  [
    'penitent',
    {
      aptitudes: ['Agility', 'Fieldcraft', 'Intelligence', 'Offensive', 'Toughness'],
      talents: ['Die Hard', 'Flagellant'],
      bonus:
        'Cleansing Pain: Whenever a Penitent character sufers 1 or more points of damage (after reductions for Toughnessbonus and Armour), he gains a +10 bonus to the first test he makes before the end of his next turn.',
      name: 'Penitent'
    }
  ],
  [
    'ace',
    {
      aptitudes: ['Agility', 'Finesse', 'Perception', 'Tech', 'Willpower'],
      talents: ['Hard Target', 'Hotshot Pilot'],
      bonus:
        'Right Stuff: In addition to the normal uses of Fate points (see page 293 of the Dark Heresy Core Rulebook), an Ace character may spend a Fate point to automatically succeed at an Operate or Survival skill test involving vehicles or living steeds with a number of degrees of success equal to his Agility bonus',
      name: 'Ace'
    }
  ],
  [
    'crusader',
    {
      aptitudes: ['Knowledge', 'Offensive', 'Strength', 'Toughness', 'Willpower'],
      talents: ['Bodyguard', 'Deny the Witch'],
      bonus:
        "Smite the Unholy: In addition to the normal uses of Fate Points, a crusader can also spend a Fate Point to automatically pass a Fear test with a DoS equal to his Willpower Bonus. In addition, whenever he inflicts a hit with a melee weapon against a target with the Fear (X) trait, he inflicts X additional damage and counts his weapon's Penetration as being X higher.",
      name: 'Crusader'
    }
  ]
]);
