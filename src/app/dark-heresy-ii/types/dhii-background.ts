import { DHII_Aptitude } from './dark-heresy-ii';
import { DHII_SkillName } from './dhii-skill';
import { DHII_TalentName } from './talents';

export type DHII_BackgroundNames =
  | 'admin'
  | 'arbite'
  | 'astra'
  | 'admech'
  | 'ministorum'
  | 'guard'
  | 'outcast'
  | 'sororitas'
  | 'mutant'
  | 'heretek'
  | 'navy'
  | 'rogue'
  | 'exorcised';

export type DHII_Background = {
  name: string;
  bonus: string;
  aptitudes: DHII_Aptitude[];
  skills: DHII_SkillName[];
  talents: DHII_TalentName[];
  equipment: string[];
};

export const BACKGROUNDS: Map<DHII_BackgroundNames, DHII_Background> = new Map([
  [
    'admin',
    {
      aptitudes: ['Knowledge', 'Social'],
      bonus:
        'Master of Paperwork: An Adeptus Administratum character counts the Availability of all items as one level more available (Very Rare items count as Rare, Average items count as Common, etc.)',
      skills: [
        'Commerce',
        'Medicae',
        'Common Lore (Adeptus Administratum)',
        'Linguistics (High Gothic)',
        'Logic',
        'Scholastic Lore'
      ],
      talents: ['Weapon Training (Las)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        'Laspistol',
        'Stub Automatic',
        'Imperial Robes',
        'Autoquill',
        'Chrono',
        'Dataslate',
        'Medi-Kit'
      ],
      name: 'Adeptus Administratum'
    }
  ],
  [
    'arbite',
    {
      aptitudes: ['Offensive', 'Defense'],
      bonus:
        'The Face of the Law: An Arbitrator can intimidation and Interrogation test, and can substitute his Willpower bonus for his degrees of success on these tests.',
      skills: [
        'Awareness',
        'Common Lore (Adeptus Arbites)',
        'Common Lore (Underworld)',
        'Inquiry',
        'Interrogation',
        'Intimidate',
        'Scrutiny'
      ],
      talents: ['Weapon Training (Shock)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        'Shotgun',
        'Shock Maul',
        'Enforcer Light Carapace Armour',
        'Carapace Chest Plate',
        '3 doses of Stimm',
        'Manacles',
        '12 Lho Sticks'
      ],
      name: 'Adeptus Arbites'
    }
  ],
  [
    'astra',
    {
      aptitudes: ['Defense', 'Psyker'],
      bonus:
        'The Constant Threat: When the character or an ally within 10 meters triggers a roll on the Table 6-2: Psychic Phenomenon (pg 196). Adeptus Astra Telepathica character can increase or decrease the result by amount equal to his Willpower bonus. Tested on Terra: If the character takes the Psyker elite advance during character creation, he also gains the Sanctioned trait (pg 138).',
      skills: [
        'Awareness',
        'Common Lore (Adeptus Astra Telepathica)',
        'Deceive',
        'Interrogation',
        'Forbidden Lore (Warp)',
        'Psyniscience',
        'Scrutiny'
      ],
      talents: ['Weapon Training (Las)', 'Weapon Training (Low-Tech)'],
      equipment: [
        'Laspistol',
        'Staff',
        'Whip',
        'Light Flak Cloak',
        'Flak Vest',
        'Micro-bead',
        'Psy Focus'
      ],
      name: 'Adeptus Astra Telepathica'
    }
  ],
  [
    'admech',
    {
      aptitudes: ['Knowledge', 'Tech'],
      bonus:
        'Replace the Weak Flesh: An Adeptus Mechanicus character counts the Availability of all cybernetics as two levels more available (Rare items count as Average, Very Rare items count as Scarce, etc.).Starting Trait: Mechanicus Implants (pg 137).',
      skills: [
        'Awareness',
        'Operate',
        'Common Lore (Adeptus Mechanicus)',
        'Logic',
        'Security',
        'Tech-Use'
      ],
      talents: ['Mechadendrite Use (Utility)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        'Autogun',
        'Hand Cannon',
        'Monotask Servo-skull (Utility)',
        'Optical Mechadendrite',
        'Imperial Robes',
        '2 vials of Sacred Unguents'
      ],
      name: 'Adeptus Mechanicus'
    }
  ],
  [
    'ministorum',
    {
      aptitudes: ['Leadership', 'Social'],
      bonus:
        'Faith is All: When spending a Fate point to gain a+10 bonus to any one test, an Adeptus Ministorum character gains a +20 bonus instead.',
      skills: [
        'Charm',
        'Command',
        'Common Lore (Adeptus Ministorum)',
        'Inquiry',
        'Scrutiny',
        'Linguistics (High Gothic)'
      ],
      talents: ['Weapon Training (Flame)', 'Weapon Training (Low-Tech | Solid Projectile)'],
      equipment: [
        'Hand Flamer',
        'Warhammer and Stub Revolver',
        'Imperial Robes',
        'Flak Vest',
        'Backpack',
        'Glow-globe',
        'Monotask Servo-skull (Laud Hailer)'
      ],
      name: 'Adeptus Ministorum'
    }
  ],
  [
    'guard',
    {
      aptitudes: ['Fieldcraft', 'Leadership'],
      bonus:
        "Hammer of the Emperor: When attacking a target that an ally attacked since the end of the Guardsman's last turn, the Guardsman can re-roll any results of 1 or 2 damage rolls. ",
      skills: [
        'Athletics',
        'Command',
        'Common Lore (Imperial Guard)',
        'Medicae',
        'Operate (Surface)',
        'Navigate (Surface)'
      ],
      talents: ['Weapon Training (Las)', 'Weapon Training (Low-Tech)'],
      equipment: [
        'Lasgun',
        'Laspistol and Sword',
        'Combat Vest',
        'Imperial Guard Flak Armour',
        'Grapnel and Line',
        '12 Lho Sticks',
        'Magnoculars'
      ],
      name: 'Imperial Guard'
    }
  ],
  [
    'outcast',
    {
      aptitudes: ['Fieldcraft', 'Social'],
      bonus:
        'Never Quit: An Outcast character counts his Toughness bonus as two higher for purposes of determining Fatigue.',
      skills: [
        'Acrobatics',
        'Sleight of Hand',
        'Common Lore (Underworld)',
        'Deceive',
        'Dodge',
        'Stealth'
      ],
      talents: [
        'Weapon Training (Chain)',
        'Weapon Training (Las)',
        'Weapon Training (Solid Projectile)'
      ],
      equipment: [
        'Autopistol',
        'Laspistol',
        'Chainsword',
        'Armoured Body Glove',
        'Flak Vest',
        'Injector',
        '2 doses of Obscura',
        '2 doses of Slaught'
      ],
      name: 'Outcast'
    }
  ],
  [
    'sororitas',
    {
      aptitudes: ['Offensive', 'Social'],
      bonus:
        'Incorruptible Devotion: Whenever an Adepta Sororitas character would gain 1 or more Corruption Points, she gains that many Insanity Points minus 1 (to a minimum of 0) instead.',
      skills: [
        'Athletics',
        'Charm',
        'Intimidate',
        'Common Lore (Adepta Sororitas)',
        'Linguistics (High Gothic)',
        'Medicae',
        'Parry'
      ],
      talents: ['Weapon Training (Chain)', 'Weapon Training (Las)', 'Weapon Training (Flame)'],
      equipment: [
        'Hand Flamer',
        'Laspistol',
        'Chainblade',
        'Armoured Body Glove',
        'Chrono',
        'Dataslate',
        'Stablight',
        'Micro-bead'
      ],
      name: 'Adepta Sororitas'
    }
  ],
  [
    'mutant',
    {
      aptitudes: ['Fieldcraft', 'Offensive'],
      bonus:
        'Twisted Flesh: A Mutant character can always choose to fail any test associated with resisting malignancy or mutation. Whenever he would gain a malignancy, he may roll to gain a mutation instead. Starts with 10 corruption and rolls 5d10 to determine starting mutation. Has one of the following Traits: Amphibious, Dark-sight, Natural Weapons, Sonar Sense, Sturdy, Toxic (1), Unnatural Agility (1), Unnatural Strength (1), or Unnatural Toughness (1)',
      skills: [
        'Acrobatics',
        'Athletics',
        'Awareness',
        'Deceive',
        'Intimidate',
        'Forbidden Lore (Mutants)',
        'Survival'
      ],
      talents: ['Weapon Training (Low-Tech)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        'Shotgun',
        'Stub Revolver and Great Weapon',
        'Grapnel and Line',
        'Heavy Leathers',
        'Combat Vest',
        '2 doses of Stimm'
      ],
      name: 'Mutant'
    }
  ],
  [
    'heretek',
    {
      aptitudes: ['Finesse', 'Tech'],
      bonus:
        'Master of Hidden Lores: When a Heretek makes a Tech-Use test to comprehend, use, repair, or modify an unfamiliar device, he gains a +20 bonus if he has one or more relevant Forbidden Lore skill specialisations at Rank 1 (Known) or higher. Hereteks also start with Mechanicus Implants.',
      skills: [
        'Deceive',
        'Inquiry',
        'Forbidden Lore',
        'Medicae',
        'Security',
        'Tech-Use',
        'Trade (Pick One)'
      ],
      talents: ['Weapon Training (Solid Projectile)'],
      equipment: [
        'Stub Revolver',
        '2 clips of Man-Stopper Rounds',
        '2 clips of Expander Bullets',
        'Web Grenade',
        'Combi-Tool',
        'Flak Cloak',
        'Filtration Plugs',
        '1 dose of De-Tox',
        'Dataslate',
        'Stablight'
      ],
      name: 'Heretek'
    }
  ],
  [
    'navy',
    {
      aptitudes: ['Offensive', 'Tech'],
      bonus:
        'Close Quarters Discipline: An Imperial Navy character scores one additional degree of success on successful Ballistic Skill tests he makes against targets at Point-Blank range, at Short range, and with whom he is engaged in melee.',
      skills: [
        'Athletics',
        'Command',
        'Intimidate',
        'Common Lore (Imperial Navy)',
        'Navigate (Stellar)',
        'Operate (Aeronautica)',
        'Operate (Voidship)'
      ],
      talents: [
        'Weapon Training (Chain)',
        'Weapon Training (Shock)',
        'Weapon Training (Solid Projectile)'
      ],
      equipment: [
        'Combat Shotgun',
        'Hand Cannon',
        'Chainsword',
        'Shock Whip',
        'Flak Coat',
        'Rebreather',
        'Micro-bead'
      ],
      name: 'Imperial Navy'
    }
  ],
  [
    'rogue',
    {
      aptitudes: ['Finesse', 'Social'],
      bonus:
        'Inured to the Xenos: A character from a Rogue Trader Fleet gains a +10 bonus to Fear tests caused by aliens and a +20 bonus to Interaction skill tests with alien characters.',
      skills: [
        'Charm',
        'Scrutiny',
        'Commerce',
        'Common Lore (Rogue Traders)',
        'Linguistics (Pick One Alien Language)',
        'Operate (Surface)',
        'Operate (Aeronautica)'
      ],
      talents: [
        'Weapon Training (Las)',
        'Weapon Training (Solid Projectile)',
        'Weapon Training (Shock)'
      ],
      equipment: [
        'Laspistol',
        'Autopistol (Compact)',
        'Shock Maul',
        'Mesh Cloak',
        'Carapace Chest Plate',
        'Auspex',
        'Chrono'
      ],
      name: 'Rogue Trader Fleet'
    }
  ],
  [
    'exorcised',
    {
      aptitudes: ['Defense', 'Knowledge'],
      bonus:
        'Touched by a Daemon: An exorcised character counts his Insanity Bonus as 2 higher for purposes of avoiding Fear tests. Additionally, he can never again be possessed by a daemon. In addition, an exorcised character begins with one Malignancy',
      skills: [
        'Awareness',
        'Deceive',
        'Inquiry',
        'Dodge',
        'Forbidden Lore (Daemonology)',
        'Intimidate',
        'Scrutiny'
      ],
      talents: [
        'Hatred (Daemons)',
        'Weapon Training (Solid Projectile)',
        'Weapon Training (Chain)'
      ],
      equipment: [
        'Autopistol',
        'Stub Revolver',
        'Chainblade',
        'Imperial Robes',
        '3 doses of Obscura',
        '3 doses of Tranq',
        'Disguise Kit',
        'Excruciator Kit',
        'Rebreather',
        'Stablight',
        'Glow-globe'
      ],
      name: 'Exorcised'
    }
  ]
]);
