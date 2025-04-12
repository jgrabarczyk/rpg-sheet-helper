import { DiceRoll } from '@appTypes/roll';
import { Availability } from '../accessibility-modifiers';
import { WeaponTraitKey } from './weapon-trait';
import { WeaponSpecialisation } from '@dhii/types/dhii-talents';

export type DamageType = 'Impact' | 'Energy' | 'Rending' | 'Explosive';

/**
 * Make sure there is at least one option avalible if single = true
 */
export type RateOfFire =
  | {
      single: true;
      semi?: number; //  3 for S/3/–
      full?: number; //  5 for S/–/5
    }
  | {
      single: false;
      semi: number;
    }
  | {
      single: false;
      full: number;
    }
  | {
      single: false;
      semi: number;
      full: number;
    };

export type WeaponClassKey =
  | 'Melee'
  | 'Basic'
  | 'Pistol'
  | 'Heavy'
  | 'Thrown'
  | 'Grenade'
  | 'Melee/Thrown';

export type WeaponClass = WeaponClassKey;
export type WeaponFamilyExtras = 'Grenade' | 'Psy'; // this do not require any specialisation to use. Psy weapon gain bonuses when wielded by psionic
export type WeaponFamily = WeaponSpecialisation | WeaponFamilyExtras;
export interface WeaponBase {
  name: string;
  family: WeaponFamily;
  class: WeaponClass;
  damage: DiceRoll;
  damageType: DamageType;
  armourPenetration: number;
  availability: Availability;
  weightInKilos?: number;
  traits?: WeaponTraitKey[];
  special?: string;
  notes?: string;
}

export enum WeaponJam {
  UNRELIABLE = 91,
  STANDARD = 96,
  RELIABLE = 100
}

export interface WeaponRanged extends WeaponBase {
  class: 'Basic' | 'Heavy' | 'Pistol';
  isRanged: true;
  weaponJamOn: WeaponJam;
  rangeInMeters: number;
  rateOfFire: RateOfFire;
  clipSize: number;
  reloadInActions: number; // "Full"= 2, "Half" = 1, "2 Full" = 4 etc
}

export interface WeaponThrown extends WeaponBase {
  class: 'Thrown' | 'Melee/Thrown' | 'Grenade';
  isRanged: true;
  rangeInMeters: number;
}

export interface WeaponMelee extends WeaponBase {
  isRanged: false;
}

export type Weapon = WeaponMelee | WeaponRanged | WeaponThrown;

export const WEAPONS: Weapon[] = [
  {
    name: 'Bolas',
    family: 'Low-Tech',
    class: 'Thrown',
    isRanged: true,
    rangeInMeters: 10,
    damage: '0d0',
    damageType: 'Impact',
    armourPenetration: 0,
    traits: ['Inaccurate', 'Snare (1)'],
    weightInKilos: 1.5,
    availability: Availability.AVERAGE
  },
  {
    name: 'Bow',
    family: 'Low-Tech',
    class: 'Basic',
    isRanged: true,
    weaponJamOn: WeaponJam.RELIABLE,
    clipSize: 1,
    rangeInMeters: 30,
    rateOfFire: {
      single: true
    },
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    reloadInActions: 1,
    traits: ['Primitive (6)'],
    weightInKilos: 2,
    availability: Availability.COMMON
  },
  {
    name: 'Crossbow',
    family: 'Low-Tech',
    class: 'Basic',
    isRanged: true,
    weaponJamOn: WeaponJam.STANDARD,
    clipSize: 1,
    rangeInMeters: 30,
    rateOfFire: {
      single: true
    },
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    reloadInActions: 4,
    traits: ['Primitive (7)'],
    weightInKilos: 3,
    availability: Availability.COMMON
  },
  {
    name: 'Great Weapon',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '2d10',
    damageType: 'Rending',
    armourPenetration: 0,
    traits: ['Unbalanced', 'Two-Handed'],
    weightInKilos: 7,
    availability: Availability.SCARCE
  },
  {
    name: 'Hunting Lance',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '2d10+3',
    damageType: 'Explosive',
    armourPenetration: 7,
    traits: ['Concussive (3)'],
    weightInKilos: 4,
    availability: Availability.SCARCE
  },
  {
    name: 'Improvised',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10-2',
    damageType: 'Impact',
    armourPenetration: 0,
    traits: ['Primitive (7)', 'Unbalanced'],
    weightInKilos: 0,
    availability: Availability.UBIQUITOUS
  },
  {
    name: 'Knife',
    family: 'Low-Tech',
    class: 'Melee/Thrown',
    isRanged: true,
    damage: '1d5',
    damageType: 'Rending',
    armourPenetration: 0,
    rangeInMeters: 5,
    weightInKilos: 1,
    availability: Availability.PLENTIFUL
  },
  {
    name: 'Shield',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d5',
    damageType: 'Impact',
    armourPenetration: 0,
    traits: ['Defensive'],
    weightInKilos: 3,
    availability: Availability.COMMON
  },
  {
    name: 'Spear',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    traits: ['Primitive (8)', 'Two-Handed'],
    weightInKilos: 3,
    availability: Availability.COMMON
  },
  {
    name: 'Staff',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10',
    damageType: 'Impact',
    armourPenetration: 0,
    traits: ['Balanced', 'Primitive (7)', 'Two-Handed'],
    weightInKilos: 3,
    availability: Availability.PLENTIFUL
  },
  {
    name: 'Sword',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    traits: ['Balanced'],
    weightInKilos: 3,
    availability: Availability.COMMON
  },
  {
    name: 'Truncheon',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10',
    damageType: 'Impact',
    armourPenetration: 0,
    traits: ['Primitive (7)'],
    weightInKilos: 2,
    availability: Availability.PLENTIFUL
  },
  {
    name: 'Warhammer',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10+3',
    damageType: 'Impact',
    armourPenetration: 1,
    traits: ['Concussive (1)', 'Primitive (8)', 'Two-Handed'],
    weightInKilos: 4.5,
    availability: Availability.SCARCE
  },
  {
    name: 'Whip',
    family: 'Low-Tech',
    class: 'Melee/Thrown', //exception
    isRanged: true,
    rangeInMeters: 3,
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    traits: ['Flexible', 'Primitive (6)'],
    weightInKilos: 2,
    availability: Availability.AVERAGE
  },
  {
    name: 'Unarmed',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d5-3',
    damageType: 'Impact',
    armourPenetration: 0,
    weightInKilos: 0,
    availability: Availability.UBIQUITOUS
  },
  {
    name: 'Rune Weapon (Sword)',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    traits: ['Balanced', 'Tainted', 'Tearing', 'Vengeful (8)'],
    weightInKilos: 3,
    availability: Availability.NEAR_UNIQUE,
    notes:
      'Can take the profile of any Low-Tech weapon and use those stats, losing the Primitive quality (if it was present). Cannot be destroyed by a Power Field weapon. Whenever the wielder triggers Righteous Fury, he gains 1d5 Corruption.'
  },
  {
    name: 'Stealth Claw',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10+4',
    damageType: 'Rending',
    armourPenetration: 4,
    traits: ['Felling (2)', 'Razor Sharp', 'Sanctified'],
    weightInKilos: 1.5,
    availability: Availability.VERY_RARE,
    notes:
      'Comes with the Compact modification. If the wielder successfully executes an All Out Attack, add damage equal to his Psy Rating.'
  },
  {
    name: 'Wailing Trident',
    family: 'Low-Tech',
    class: 'Melee',
    isRanged: false,
    damage: '1d10+8',
    damageType: 'Rending',
    armourPenetration: 4,
    traits: ['Balanced', 'Felling (3)', 'Sanctified'],
    weightInKilos: 9,
    availability: Availability.VERY_RARE,
    notes:
      'Two-handed weapon. Can be thrown with a range of 6m. When used against a Daemonic target, gains Crippling (3).'
  },
  {
    name: 'Arquebus',
    family: 'Low-Tech',
    class: 'Basic',
    isRanged: true,
    weaponJamOn: WeaponJam.UNRELIABLE,
    rangeInMeters: 45,
    rateOfFire: {
      single: true
    },
    damage: '2d10',
    damageType: 'Impact',
    armourPenetration: 2,
    clipSize: 1,
    reloadInActions: 4,
    traits: ['Concussive (1)', 'Inaccurate'],
    weightInKilos: 8,
    availability: Availability.COMMON,
    notes:
      'Counts as a Heavy weapon when fired with a SB of 3 or lower. Creates Smoke (1) around the firer that lasts for 1d5-1 rounds.'
  },
  {
    name: 'Castigator Heavy Crossbow',
    family: 'Low-Tech',
    class: 'Heavy',
    rangeInMeters: 70,
    isRanged: true,
    weaponJamOn: WeaponJam.RELIABLE,
    rateOfFire: {
      single: true
    },
    damage: '1d10+6',
    damageType: 'Impact',
    armourPenetration: 1,
    clipSize: 14,
    reloadInActions: 4,
    traits: ['Concussive (2)'],
    weightInKilos: 12,
    availability: Availability.SCARCE,
    notes:
      'Whenever this weapon deals damage to a target of Size (5) or smaller, that target is knocked prone. Damage, penetration, and special qualities are dependant upon ammunition used.'
  },
  {
    name: 'Deliverance Light Crossbow',
    family: 'Low-Tech',
    class: 'Pistol',
    rangeInMeters: 15,
    isRanged: true,
    weaponJamOn: WeaponJam.STANDARD,
    rateOfFire: {
      single: true
    },
    damage: '1d10',
    damageType: 'Rending',
    armourPenetration: 0,
    clipSize: 1,
    reloadInActions: 1,
    traits: ['Primitive (7)'],
    weightInKilos: 1,
    availability: Availability.RARE,
    notes:
      'If used with a Forearm Mounting, range is not reduced. Tests to find when concealed suffer -20, and counts as having a built-in Silencer. Damage, penetration, and special qualities are dependant upon ammunition used.'
  },
  {
    name: "Drake's Claw",
    family: 'Low-Tech',
    class: 'Heavy',
    rangeInMeters: 200,
    isRanged: true,
    weaponJamOn: WeaponJam.STANDARD,
    reloadInActions: 0,
    rateOfFire: {
      single: true
    },
    damage: '1d10+2',
    damageType: 'Explosive',
    armourPenetration: 2,
    clipSize: 1,
    traits: ['Blast (3)', 'Crippling (1)', 'Inaccurate', 'Primitive (7)', 'Tearing', 'One Use'],
    weightInKilos: 6,
    availability: Availability.RARE
  },
  {
    name: 'Flintlock Pistol',
    family: 'Low-Tech',
    class: 'Pistol',
    isRanged: true,
    weaponJamOn: WeaponJam.UNRELIABLE,
    rangeInMeters: 15,
    rateOfFire: {
      single: true
    },
    damage: '1d10+2',
    damageType: 'Impact',
    armourPenetration: 0,
    clipSize: 1,
    reloadInActions: 4,
    traits: ['Inaccurate', 'Primitive (8)'],
    weightInKilos: 3,
    availability: Availability.COMMON
  }
];
