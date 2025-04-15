import { DHII_Aptitude } from './dark-heresy-ii';
import { DHII_SkillName } from './dhii-skill';
import { DHII_TalentName } from './dhii-talents';

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
    aptitudes?: DHII_Aptitude[][];
    skills?: DHII_SkillName[][];
    talents?: DHII_TalentName[][];
    equipment?: DHII_BackgroundEquipment[][];
  };
  skills: DHII_SkillName[];
  talents?: DHII_TalentName[];
  equipment: DHII_BackgroundEquipment[];
};

export type DHII_BackgroundEquipment = {
  key: string;
  value: string;
  quantity: number;
};

export type DHII_Backgrounds = Map<DHII_BackgroundNames, DHII_Background>;
export const BACKGROUNDS: DHII_Backgrounds = new Map([
  [
    'admin',
    {
      pick: {
        aptitudes: [['Knowledge', 'Social']],
        skills: [['Commerce', 'Medicae']],
        talents: [['Weapon Training (Las)', 'Weapon Training (Solid Projectile)']],
        equipment: [
          [
            {
              value: 'Laspistol',
              key: 'Laspistol',
              quantity: 1
            },
            {
              value: 'Stub Automatic',
              key: 'Stub Automatic',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Master of Paperwork: An Adeptus Administratum character counts the Availability of all items as one level more available (Very Rare items count as Rare, Average items count as Common, etc.)',
      skills: [
        'Common Lore (Adeptus Administratum)',
        'Linguistics (High Gothic)',
        'Logic',
        'Scholastic Lore'
      ],
      equipment: [
        {
          value: 'Imperial Robes',
          key: 'Imperial Robes',
          quantity: 1
        },
        {
          value: 'Autoquill',
          key: 'Autoquill',
          quantity: 1
        },
        {
          value: 'Chrono',
          key: 'Chrono',
          quantity: 1
        },
        {
          value: 'Dataslate',
          key: 'Dataslate',
          quantity: 1
        },
        {
          value: 'Medi-Kit',
          key: 'Medi-Kit',
          quantity: 1
        }
      ],
      name: 'Adeptus Administratum'
    }
  ],
  [
    'arbite',
    {
      pick: {
        aptitudes: [['Offence', 'Defence']],
        skills: [['Inquiry', 'Interrogation']],
        talents: [['Weapon Training (Shock)', 'Weapon Training (Solid Projectile)']],
        equipment: [
          [
            {
              key: 'Shotgun',
              value: 'Shotgun',
              quantity: 1
            },
            {
              key: 'Shock Maul',
              value: 'Shock Maul',
              quantity: 1
            }
          ],
          [
            {
              key: 'Enforcer Light Carapace Armour',
              value: 'Enforcer Light Carapace',
              quantity: 1
            },
            {
              key: 'Carapace Chest Plate',
              value: 'Carapace Chestplate',
              quantity: 1
            }
          ]
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
      equipment: [
        {
          value: 'Stimm',
          key: '3 doses of Stimm',
          quantity: 3
        },
        {
          value: 'Manacles',
          key: 'Manacles',
          quantity: 1
        },
        {
          value: 'Lho-Sticks',
          key: '12 Lho Sticks',
          quantity: 12
        }
      ],
      name: 'Adeptus Arbites'
    }
  ],
  [
    'astra',
    {
      pick: {
        aptitudes: [['Defence', 'Psyker']],
        skills: [['Deceive', 'Interrogation']],
        equipment: [
          [
            {
              key: 'Staff',
              value: 'Staff',
              quantity: 1
            },
            {
              key: 'Whip',
              value: 'Whip',
              quantity: 1
            }
          ],
          [
            {
              key: 'Light Flak Cloak',
              value: 'Light Flak Cloak',
              quantity: 1
            },
            {
              key: 'Flak Vest',
              value: 'Flak Vest',
              quantity: 1
            }
          ],
          [
            {
              key: 'Micro-bead',
              value: 'Micro-bead',
              quantity: 1
            },
            {
              key: 'Psy Focus',
              value: 'Psy Focus',
              quantity: 1
            }
          ]
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
      equipment: [
        {
          value: 'Laspistol',
          key: 'Laspistol',
          quantity: 1
        }
      ],
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
          [
            {
              key: 'Autogun',
              value: 'Autogun',
              quantity: 1
            },
            {
              key: 'Hand Cannon',
              value: 'Hand Cannon',
              quantity: 1
            }
          ],
          [
            {
              key: 'Monotask Servo-skull (Utility)',
              value: 'Monotask Servo-skull (Utility)',
              quantity: 1
            },
            {
              key: 'Optical Mechadendrite',
              value: 'Optical Mechadendrite',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Replace the Weak Flesh: An Adeptus Mechanicus character counts the Availability of all cybernetics as two levels more available (Rare items count as Average, Very Rare items count as Scarce, etc.).Starting Trait: Mechanicus Implants (pg 137).',
      skills: ['Common Lore (Adeptus Mechanicus)', 'Logic', 'Security', 'Tech-Use'],
      talents: ['Mechadendrite Use (Utility)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        {
          value: 'Imperial Robes',
          key: 'Imperial Robes',
          quantity: 1
        },
        {
          value: '2 vials of Sacred Unguents',
          key: '2 vials of Sacred Unguents',
          quantity: 1
        }
      ],
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
          [
            {
              key: 'Hand Flamer',
              value: 'Hand Flamer',
              quantity: 1
            },
            {
              key: 'Warhammer and Stub Revolver',
              value: 'Warhammer and Stub Revolver',
              quantity: 1
            }
          ],
          [
            {
              key: 'Imperial Robes',
              value: 'Imperial Robes',
              quantity: 1
            },
            {
              key: 'Flak Vest',
              value: 'Flak Vest',
              quantity: 1
            }
          ]
        ],
        talents: [['Weapon Training (Low-Tech)', 'Weapon Training (Solid Projectile)']]
      },
      bonus:
        'Faith is All: When spending a Fate point to gain a+10 bonus to any one test, an Adeptus Ministorum character gains a +20 bonus instead.',
      skills: ['Charm', 'Command', 'Common Lore (Adeptus Ministorum)', 'Linguistics (High Gothic)'],
      talents: ['Weapon Training (Flame)'],
      equipment: [
        {
          value: 'Backpack',
          key: 'Backpack',
          quantity: 1
        },
        {
          value: 'Glow-globe',
          key: 'Glow-globe',
          quantity: 1
        },
        {
          value: 'Monotask Servo-skull (Laud Hailer)',
          key: 'Monotask Servo-skull (Laud Hailer)',
          quantity: 1
        }
      ],
      name: 'Adeptus Ministorum'
    }
  ],
  [
    'guard',
    {
      pick: {
        aptitudes: [['Fieldcraft', 'Leadership']],
        skills: [['Medicae', 'Operate (Surface)']],
        equipment: [
          [
            {
              key: 'Lasgun',
              value: 'Lasgun',
              quantity: 1
            },
            {
              key: 'Laspistol and Sword',
              value: 'Laspistol and Sword',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        "Hammer of the Emperor: When attacking a target that an ally attacked since the end of the Guardsman's last turn, the Guardsman can re-roll any results of 1 or 2 damage rolls. ",
      skills: ['Athletics', 'Command', 'Common Lore (Imperial Guard)', 'Navigate (Surface)'],
      talents: ['Weapon Training (Las)', 'Weapon Training (Low-Tech)'],
      equipment: [
        {
          value: 'Combat Vest',
          key: 'Combat Vest',
          quantity: 1
        },
        {
          value: 'Imperial Guard Flak Armour',
          key: 'Imperial Guard Flak Armour',
          quantity: 1
        },
        {
          value: 'Grapnel and Line',
          key: 'Grapnel and Line',
          quantity: 1
        },
        {
          value: '12 Lho-Sticks',
          key: '12 Lho-Sticks',
          quantity: 1
        },
        {
          value: 'Magnoculars',
          key: 'Magnoculars',
          quantity: 1
        }
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
          [
            {
              key: 'Autopistol',
              value: 'Autopistol',
              quantity: 1
            },
            {
              key: 'Laspistol',
              value: 'Laspistol',
              quantity: 1
            }
          ],
          [
            {
              key: 'Armoured Body Glove',
              value: 'Armoured Body Glove',
              quantity: 1
            },
            {
              key: 'Flak Vest',
              value: 'Flak Vest',
              quantity: 1
            }
          ],
          [
            {
              key: '2 doses of Obscura',
              value: 'Obscura',
              quantity: 2
            },
            {
              key: '2 doses of Slaught',
              value: 'Slaught',
              quantity: 2
            }
          ]
        ]
      },
      bonus:
        'Never Quit: An Outcast character counts his Toughness bonus as two higher for purposes of determining Fatigue.',
      skills: ['Common Lore (Underworld)', 'Deceive', 'Dodge', 'Stealth'],
      talents: ['Weapon Training (Chain)'],
      equipment: [
        {
          value: 'Chainsword',
          key: 'Chainsword',
          quantity: 1
        },
        {
          value: 'Injector',
          key: 'Injector',
          quantity: 1
        }
      ],
      name: 'Outcast'
    }
  ],
  [
    'sororitas',
    {
      pick: {
        aptitudes: [['Offence', 'Social']],
        skills: [
          ['Charm', 'Intimidate'],
          ['Medicae', 'Parry']
        ],
        talents: [['Weapon Training (Las)', 'Weapon Training (Flame)']],
        equipment: [
          [
            {
              key: 'Hand Flamer',
              value: 'Hand Flamer',
              quantity: 1
            },
            {
              key: 'Laspistol',
              value: 'Laspistol',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Incorruptible Devotion: Whenever an Adepta Sororitas character would gain 1 or more Corruption Points, she gains that many Insanity Points minus 1 (to a minimum of 0) instead.',
      skills: ['Athletics', 'Common Lore (Adepta Sororitas)', 'Linguistics (High Gothic)'],
      talents: ['Weapon Training (Chain)'],
      equipment: [
        {
          value: 'Chainblade',
          key: 'Chainblade',
          quantity: 1
        },
        {
          value: 'Armoured Body Glove',
          key: 'Armoured Body Glove',
          quantity: 1
        },
        {
          value: 'Chrono',
          key: 'Chrono',
          quantity: 1
        },
        {
          value: 'Dataslate',
          key: 'Dataslate',
          quantity: 1
        },
        {
          value: 'Stablight',
          key: 'Stablight',
          quantity: 1
        },
        {
          value: 'Micro-bead',
          key: 'Micro-bead',
          quantity: 1
        }
      ],
      name: 'Adepta Sororitas'
    }
  ],
  [
    'mutant',
    {
      pick: {
        aptitudes: [['Fieldcraft', 'Offence']],
        skills: [
          ['Acrobatics', 'Athletics'],
          ['Deceive', 'Intimidate']
        ],
        equipment: [
          [
            {
              key: 'Shotgun',
              value: 'Shotgun',
              quantity: 1
            },
            {
              key: 'Stub Revolver and Great Weapon', //@todo how to handle combo items in Pick between
              value: 'Stub Revolver and Great Weapon',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Twisted Flesh: A Mutant character can always choose to fail any test associated with resisting malignancy or mutation. Whenever he would gain a malignancy, he may roll to gain a mutation instead. Starts with 10 corruption and rolls 5d10 to determine starting mutation. Has one of the following Traits: Amphibious, Dark-sight, Natural Weapons, Sonar Sense, Sturdy, Toxic (1), Unnatural Agility (1), Unnatural Strength (1), or Unnatural Toughness (1)',
      skills: ['Awareness', 'Forbidden Lore (Mutants)', 'Survival'],
      talents: ['Weapon Training (Low-Tech)', 'Weapon Training (Solid Projectile)'],
      equipment: [
        {
          value: 'Grapnel and Line',
          key: 'Grapnel and Line',
          quantity: 1
        },
        {
          value: 'Heavy Leathers',
          key: 'Heavy Leathers',
          quantity: 1
        },
        {
          value: 'Combat Vest',
          key: 'Combat Vest',
          quantity: 1
        },
        {
          value: '2 doses of Stimm',
          key: '2 doses of Stimm',
          quantity: 1
        }
      ],
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
        equipment: [
          [
            {
              key: 'Man-Stopper Rounds',
              value: '2 clips of Man-Stopper Rounds',
              quantity: 2
            },
            {
              key: 'Expander Rounds',
              value: '2 clips of Expander Rounds',
              quantity: 2
            }
          ]
        ]
      },
      bonus:
        'Master of Hidden Lores: When a Heretek makes a Tech-Use test to comprehend, use, repair, or modify an unfamiliar device, he gains a +20 bonus if he has one or more relevant Forbidden Lore skill specialisations at Rank 1 (Known) or higher. Hereteks also start with Mechanicus Implants.',
      skills: ['Forbidden Lore', 'Tech-Use', 'Trade (Pick One)'], // @todo Forbidden Lore without specialisation break creator. fix skill specialistaions
      talents: ['Weapon Training (Solid Projectile)'],
      equipment: [
        {
          value: 'Stub Revolver',
          key: 'Stub Revolver',
          quantity: 1
        },
        {
          value: 'Web Grenade',
          key: 'Web Grenade',
          quantity: 1
        },
        {
          value: 'Combi-Tool',
          key: 'Combi-Tool',
          quantity: 1
        },
        {
          value: 'Flak Cloak',
          key: 'Flak Cloak',
          quantity: 1
        },
        {
          value: 'Filtration Plugs',
          key: 'Filtration Plugs',
          quantity: 1
        },
        {
          value: '1 dose of De-Tox',
          key: '1 dose of De-Tox',
          quantity: 1
        },
        {
          value: 'Dataslate',
          key: 'Dataslate',
          quantity: 1
        },
        {
          value: 'Stablight',
          key: 'Stablight',
          quantity: 1
        }
      ],
      name: 'Heretek'
    }
  ],
  [
    'navy',
    {
      pick: {
        aptitudes: [['Offence', 'Tech']],
        skills: [
          ['Command', 'Intimidate'],
          ['Operate (Aeronautica)', 'Operate (Voidship)']
        ],
        talents: [['Weapon Training (Chain)', 'Weapon Training (Shock)']],
        equipment: [
          [
            {
              key: 'Combat Shotgun',
              value: 'Combat Shotgun',
              quantity: 1
            },
            {
              key: 'Hand Cannon',
              value: 'Hand Cannon',
              quantity: 1
            }
          ],
          [
            {
              key: 'Chainsword',
              value: 'Chainsword',
              quantity: 1
            },
            {
              key: 'Shock Whip',
              value: 'Shock Whip',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Close Quarters Discipline: An Imperial Navy character scores one additional degree of success on successful Ballistic Skill tests he makes against targets at Point-Blank range, at Short range, and with whom he is engaged in melee.',
      skills: ['Athletics', 'Common Lore (Imperial Navy)', 'Navigate (Stellar)'],
      talents: ['Weapon Training (Solid Projectile)'],
      equipment: [
        {
          value: 'Flak Coat',
          key: 'Flak Coat',
          quantity: 1
        },
        {
          value: 'Rebreather',
          key: 'Rebreather',
          quantity: 1
        },
        {
          value: 'Micro-bead',
          key: 'Micro-bead',
          quantity: 1
        }
      ],
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
          [
            {
              key: 'Laspistol',
              value: 'Laspistol',
              quantity: 1
            },
            {
              key: 'Autopistol',
              value: 'Autopistol (Compact)', // how to automate weapon modification
              quantity: 1
            }
          ],
          [
            {
              key: 'Mesh Cloak',
              value: 'Mesh Cloak',
              quantity: 1
            },
            {
              key: 'Carapace Chest Plate',
              value: 'Carapace Chest Plate',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Inured to the Xenos: A character from a Rogue Trader Fleet gains a +10 bonus to Fear tests caused by aliens and a +20 bonus to Interaction skill tests with alien characters.',
      skills: ['Commerce', 'Common Lore (Rogue Traders)', 'Linguistics (Pick One Alien Language)'],
      talents: ['Weapon Training (Shock)'],
      equipment: [
        {
          value: 'Shock Maul',
          key: 'Shock Maul',
          quantity: 1
        },
        {
          value: 'Auspex',
          key: 'Auspex',
          quantity: 1
        },
        {
          value: 'Chrono',
          key: 'Chrono',
          quantity: 1
        }
      ],
      name: 'Rogue Trader Fleet'
    }
  ],
  [
    'exorcised',
    {
      pick: {
        aptitudes: [['Defence', 'Knowledge']],
        skills: [
          ['Deceive', 'Inquiry'],
          ['Intimidate', 'Scrutiny']
        ],
        equipment: [
          [
            {
              key: 'Autopistol',
              value: 'Autopistol',
              quantity: 1
            },
            {
              key: 'Stub Revolver',
              value: 'Stub Revolver',
              quantity: 1
            }
          ],
          [
            {
              key: '3 doses of  Obscura',
              value: 'Obscura',
              quantity: 3
            },
            {
              key: '3 doses of  Tranq',
              value: 'Tranq',
              quantity: 3
            }
          ],
          [
            {
              key: 'Disguise Kit',
              value: 'Disguise Kit',
              quantity: 1
            },
            {
              key: 'Excruciator Kit',
              value: 'Excruciator Kit',
              quantity: 1
            }
          ]
        ]
      },
      bonus:
        'Touched by a Daemon: An exorcised character counts his Insanity Bonus as 2 higher for purposes of avoiding Fear tests. Additionally, he can never again be possessed by a daemon. In addition, an exorcised character begins with one Malignancy',
      skills: ['Awareness', 'Dodge', 'Forbidden Lore (Daemonology)'],
      talents: ['Hatred (Daemon)', 'Weapon Training (Solid Projectile)', 'Weapon Training (Chain)'],
      equipment: [
        {
          value: 'Chainblade',
          key: 'Chainblade',
          quantity: 1
        },
        {
          value: 'Imperial Robes',
          key: 'Imperial Robes',
          quantity: 1
        },
        {
          value: 'Rebreather',
          key: 'Rebreather',
          quantity: 1
        },
        {
          value: 'Stablight',
          key: 'Stablight',
          quantity: 1
        },
        {
          value: 'Glow-globe',
          key: 'Glow-globe',
          quantity: 1
        }
      ],
      name: 'Exorcised'
    }
  ]
]);
