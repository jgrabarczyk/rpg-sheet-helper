import { Availability } from './accessibility-modifiers';
import { Armour } from './armour/armour';
import { Weapon } from './weapon/weapon';
export type ItemQuality = 'POOR' | 'COMMON' | 'GOOD ' | 'EXCEPTIONAL';

export enum ItemQualityAvalibilityModifier {
  POOR = 10,
  COMMON = 0,
  GOOD = -20,
  EXCEPTIONAL = -30,
}

export type GenericItem = {
  name: string;
  weightInKilos: number;
  availability: Availability;
  notes?: string;
  quality?: ItemQuality;
  quantity?: number;
};

export interface DHII_Equipment {
  weapons: Weapon[];
  armours: Armour[];
  backpack: GenericItem[];
}
