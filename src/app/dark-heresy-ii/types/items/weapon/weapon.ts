import { DiceRoll } from '@appTypes/roll';
import { WeaponTraitKey } from './weapon-trait';
import { WeaponSpecialisation } from '@dhii/types/dhii-talents';
import { GenericItem } from '../generic-item';

export type DamageType = 'Impact' | 'Energy' | 'Rending' | 'Explosive' | 'Special';

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
  | 'Melee/Thrown'
  | 'Charge';

export type XenosType = 'Eldar' | 'Ork' | 'Necron' | 'Kroot' | 'Lost Races'
export type ExoticType = 'Graviton'

export type WeaponClassExoticFamily = 'Exotic' | `Exotic (${ExoticType})` | `Xenos (${XenosType})` | 'Varies'

export type WeaponClass = WeaponClassKey ;
export type WeaponFamilyExtras = 'Grenade' | 'Force' | 'Explosives'| 'Missile'; // this do not require any specialisation to use. Psy weapon gain bonuses when wielded by psionic
export type WeaponFamily = WeaponSpecialisation | WeaponFamilyExtras | WeaponClassExoticFamily;

export interface WeaponBase extends GenericItem {
  family: WeaponFamily;
  class: WeaponClass;
  damage: DiceRoll;
  damageType: DamageType;
  armourPenetration: number;
  traits?: WeaponTraitKey[];
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
