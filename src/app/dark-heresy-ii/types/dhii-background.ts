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
  pick?: {
    aptitudes?: Array<DHII_Aptitude[]>;
    skills?: Array<DHII_SkillName[]>;
    talents?: Array<DHII_TalentName[]>;
    equipment?: Array<string[]>;
  };
  skills: DHII_SkillName[];
  talents: DHII_TalentName[];
  equipment: string[];
};

export const BACKGROUNDS: Map<DHII_BackgroundNames, DHII_Background> = new Map([
  [
    'admin',
    {
      pick: {
        aptitudes: [['Knowledge', 'Social']],
        skills: [['Commerce', 'Medicae']],
        talents: [['Weapon Training (Las)', 'Weapon Training (Solid Projectile)']],
        equipment: [['Laspistol', 'Stub Automatic']]
      },
      bonus:
        'Master of Paperwork: An Adeptus Administratum character counts the Availability of all items as one level more available (Very Rare items count as Rare, Average items count as Common, etc.)',
      skills: [
        'Common Lore (Adeptus Administratum)',
        'Linguistics (High Gothic)',
        'Logic',
        'Scholastic Lore'
      ],
      talents: [],
      equipment: ['Imperial Robes', 'Autoquill', 'Chrono', 'Dataslate', 'Medi-Kit'],
      name: 'Adeptus Administratum'
    }
  ],
  [
    'arbite',
    {
      pick: {
        aptitudes: [['Offensive', 'Defense']],
        skills: [['Inquiry', 'Interrogation']],
        talents: [['Weapon Training (Shock)', 'Weapon Training (Solid Projectile)']],
        equipment: [
          ['Shotgun', 'Shock Maul'],
          ['Enforcer Light Carapace Armour', 'Carapace Chest Plate']
        ]
      },
      bonus:
        'The Face of the Law: An Arbitrator can intimidation and Interrogation test, and can substitute his Willpower bonus for his degrees of success on these tests.',
      skills: [
        'Awareness',
        'Common Lore (Adeptus Arbites)',
        'Common Lore (Underworld)',
        'Intimidate',
        'Scrutiny'
      ],
      talents: [],
      equipment: ['3 doses of Stimm', 'Manacles', '12 Lho Sticks'],
      name: 'Adeptus Arbites'
    }
  ],
  [
    'astra',
    {
      pick: {
        aptitudes: [['Defense', 'Psyker']],
        skills: [['Deceive', 'Interrogation']],
        equipment: [
          ['Staff', 'Whip'],
          ['Light Flak Cloak', 'Flak Vest'],
          ['Micro-bead', 'Psy Focus']
        ]
      },
      bonus:
        'The Constant Threat: When the character or an ally within 10 meters triggers a roll on the Table 6-2: Psychic Phenomenon (pg 196). Adeptus Astra Telepathica character can increase or decrease the result by amount equal to his Willpower bonus. Tested on Terra: If the character takes the Psyker elite advance during character creation, he also gains the Sanctioned trait (pg 138).',
      skills: [
        'Awareness',
        'Common Lore (Adeptus Astra Telepathica)',
        'Forbidden Lore (Warp)',
        'Psyniscience',
        'Scrutiny'
      ],
      talents: ['Weapon Training (Las)', 'Weapon Training (Low-Tech)'],
      equipment: ['Laspistol'],
      name: 'Adeptus Astra Telepathica'
    }
  ],
  [
    'admech',
    {
      pick: {
        aptitudes: [['Knowledge', 'Tech']],
        skills: [['Awareness', 'Operate']],
        equipment: [
          ['Autogun', 'Hand Cannon'],
          ['Monotask Servo-skull (Utility)', 'Optical Mechadendrite']
        ]
      },
      bonus:
        'Replace the Weak Flesh: An Adeptus Mechanicus character counts the Availability of all cybernetics as two levels more available (Rare items count as Average, Very Rare items count as Scarce, etc.).Starting Trait: Mechanicus Implants (pg 137).',
      skills: ['Common Lore (Adeptus Mechanicus)', 'Logic', 'Security', 'Tech-Use'],
      talents: ['Mechadendrite Use (Utility)', 'Weapon Training (Solid Projectile)'],
      equipment: ['Imperial Robes', '2 vials of Sacred Unguents'],
      name: 'Adeptus Mechanicus'
    }
  ],
  [
    'ministorum',
    {
      pick: {
        aptitudes: [['Leadership', 'Social']],
        skills: [['Inquiry', 'Scrutiny']],
        equipment: [
          ['Hand Flamer', 'Warhammer and Stub Revolver'],
          ['Imperial Robes', 'Flak Vest']
        ]
      },
      bonus:
        'Faith is All: When spending a Fate point to gain a+10 bonus to any one test, an Adeptus Ministorum character gains a +20 bonus instead.',
      skills: ['Charm', 'Command', 'Common Lore (Adeptus Ministorum)', 'Linguistics (High Gothic)'],
      talents: ['Weapon Training (Flame)', 'Weapon Training (Low-Tech | Solid Projectile)'],
      equipment: ['Backpack', 'Glow-globe', 'Monotask Servo-skull (Laud Hailer)'],
      name: 'Adeptus Ministorum'
    }
  ],
  [
    'guard',
    {
      pick: {
        aptitudes: [['Fieldcraft', 'Leadership']],
        skills: [['Medicae', 'Operate (Surface)']],
        equipment: [['Lasgun', 'Laspistol and Sword']]
      },
      bonus:
        "Hammer of the Emperor: When attacking a target that an ally attacked since the end of the Guardsman's last turn, the Guardsman can re-roll any results of 1 or 2 damage rolls. ",
      skills: ['Athletics', 'Command', 'Common Lore (Imperial Guard)', 'Navigate (Surface)'],
      talents: ['Weapon Training (Las)', 'Weapon Training (Low-Tech)'],
      equipment: [
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
      pick: {
        aptitudes: [['Fieldcraft', 'Social']],
        skills: [['Acrobatics', 'Sleight of Hand']],
        talents: [['Weapon Training (Las)', 'Weapon Training (Solid Projectile)']],
        equipment: [
          ['Autopistol', 'Laspistol'],
          ['Armoured Body Glove', 'Flak Vest'],
          ['2 doses of Obscura', '2 doses of Slaught']
        ]
      },
      bonus:
        'Never Quit: An Outcast character counts his Toughness bonus as two higher for purposes of determining Fatigue.',
      skills: ['Common Lore (Underworld)', 'Deceive', 'Dodge', 'Stealth'],
      talents: ['Weapon Training (Chain)'],
      equipment: ['Chainsword', 'Injector'],
      name: 'Outcast'
    }
  ],
  [
    'sororitas',
    {
      pick: {
        aptitudes: [['Offensive', 'Social']],
        skills: [
          ['Charm', 'Intimidate'],
          ['Medicae', 'Parry']
        ],
        talents: [['Weapon Training (Las)', 'Weapon Training (Flame)']],
        equipment: [['Hand Flamer', 'Laspistol']]
      },
      bonus:
        'Incorruptible Devotion: Whenever an Adepta Sororitas character would gain 1 or more Corruption Points, she gains that many Insanity Points minus 1 (to a minimum of 0) instead.',
      skills: ['Athletics', 'Common Lore (Adepta Sororitas)', 'Linguistics (High Gothic)'],
      talents: ['Weapon Training (Chain)'],
      equipment: [
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
      pick: {
        aptitudes: [['Fieldcraft', 'Offensive']],
        skills: [
          ['Acrobatics', 'Athletics'],
          ['Deceive', 'Intimidate']
        ],
        equipment: [['Shotgun', 'Stub Revolver and Great Weapon']]
      },
      bonus:
        'Twisted Flesh: A Mutant character can always choose to fail any test associated with resisting malignancy or mutation. Whenever he would gain a malignancy, he may roll to gain a mutation instead. Starts with 10 corruption and rolls 5d10 to determine starting mutation. Has one of the following Traits: Amphibious, Dark-sight, Natural Weapons, Sonar Sense, Sturdy, Toxic (1), Unnatural Agility (1), Unnatural Strength (1), or Unnatural Toughness (1)',
      skills: ['Awareness', 'Forbidden Lore (Mutants)', 'Survival'],
      talents: ['Weapon Training (Low-Tech)', 'Weapon Training (Solid Projectile)'],
      equipment: ['Grapnel and Line', 'Heavy Leathers', 'Combat Vest', '2 doses of Stimm'],
      name: 'Mutant'
    }
  ],
  [
    'heretek',
    {
      pick: {
        aptitudes: [['Finesse', 'Tech']],
        skills: [
          ['Deceive', 'Inquiry'],
          ['Medicae', 'Security']
        ],
        equipment: [['2 clips of Man-Stopper Rounds', '2 clips of Expander Bullets']]
      },
      bonus:
        'Master of Hidden Lores: When a Heretek makes a Tech-Use test to comprehend, use, repair, or modify an unfamiliar device, he gains a +20 bonus if he has one or more relevant Forbidden Lore skill specialisations at Rank 1 (Known) or higher. Hereteks also start with Mechanicus Implants.',
      skills: ['Forbidden Lore', 'Tech-Use', 'Trade (Pick One)'],
      talents: ['Weapon Training (Solid Projectile)'],
      equipment: [
        'Stub Revolver',
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
      pick: {
        aptitudes: [['Offensive', 'Tech']],
        skills: [
          ['Command', 'Intimidate'],
          ['Operate (Aeronautica)', 'Operate (Voidship)']
        ],
        talents: [['Weapon Training (Chain)', 'Weapon Training (Shock)']],
        equipment: [
          ['Combat Shotgun', 'Hand Cannon'],
          ['Chainsword', 'Shock Whip']
        ]
      },
      bonus:
        'Close Quarters Discipline: An Imperial Navy character scores one additional degree of success on successful Ballistic Skill tests he makes against targets at Point-Blank range, at Short range, and with whom he is engaged in melee.',
      skills: ['Athletics', 'Common Lore (Imperial Navy)', 'Navigate (Stellar)'],
      talents: ['Weapon Training (Solid Projectile)'],
      equipment: ['Flak Coat', 'Rebreather', 'Micro-bead'],
      name: 'Imperial Navy'
    }
  ],
  [
    'rogue',
    {
      pick: {
        aptitudes: [['Finesse', 'Social']],
        skills: [
          ['Charm', 'Scrutiny'],
          ['Operate (Surface)', 'Operate (Aeronautica)']
        ],
        talents: [['Weapon Training (Las)', 'Weapon Training (Solid Projectile)']],
        equipment: [
          ['Laspistol', 'Autopistol (Compact)'],
          ['Mesh Cloak', 'Carapace Chest Plate']
        ]
      },
      bonus:
        'Inured to the Xenos: A character from a Rogue Trader Fleet gains a +10 bonus to Fear tests caused by aliens and a +20 bonus to Interaction skill tests with alien characters.',
      skills: ['Commerce', 'Common Lore (Rogue Traders)', 'Linguistics (Pick One Alien Language)'],
      talents: ['Weapon Training (Shock)'],
      equipment: ['Shock Maul', 'Auspex', 'Chrono'],
      name: 'Rogue Trader Fleet'
    }
  ],
  [
    'exorcised',
    {
      pick: {
        aptitudes: [['Defense', 'Knowledge']],
        skills: [
          ['Deceive', 'Inquiry'],
          ['Intimidate', 'Scrutiny']
        ],
        equipment: [
          ['Autopistol', 'Stub Revolver'],
          ['3 doses of Obscura', '3 doses of Tranq'],
          ['Disguise Kit', 'Excruciator Kit']
        ]
      },
      bonus:
        'Touched by a Daemon: An exorcised character counts his Insanity Bonus as 2 higher for purposes of avoiding Fear tests. Additionally, he can never again be possessed by a daemon. In addition, an exorcised character begins with one Malignancy',
      skills: ['Awareness', 'Dodge', 'Forbidden Lore (Daemonology)'],
      talents: [
        'Hatred (Daemons)',
        'Weapon Training (Solid Projectile)',
        'Weapon Training (Chain)'
      ],
      equipment: ['Chainblade', 'Imperial Robes', 'Rebreather', 'Stablight', 'Glow-globe'],
      name: 'Exorcised'
    }
  ]
]);
