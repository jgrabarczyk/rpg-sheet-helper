import { BodyLocation } from '@appTypes/body-location';
import { Availability } from '../accessibility-modifiers';
import { GenericItem } from '../generic-item';

export type ArmourClass = 'Basic' | 'Carapace' | 'Flak' | 'Mesh' | 'Power';
export type ProtectedLocations = BodyLocation | 'All';
export interface BaseArmour extends GenericItem {
  class: ArmourClass;
  agilityCap: number;
  protectedLocations: ProtectedLocations[];
  armorPoints: number;
}

export type ForceField = 'Force Field';

export interface ForceFieldArmour extends GenericItem {
  class: ForceField;
  protectionRating: number;
  // overheatChance: '01-15' | '01-10' | '01-05' | '01-01' // based on item Quality
}

export type Armour = ForceFieldArmour | BaseArmour;

export const ARMOURS: Map<string, Armour> = new Map<string, Armour>([
  [
    'Armoured Bodyglove',
    {
      name: 'Armoured Bodyglove',
      class: 'Basic',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 2,
      agilityCap: 999,
      weightInKilos: 5,
      availability: Availability.RARE
    }
  ],
  [
    'Chainmail Suit',
    {
      name: 'Chainmail Suit',
      class: 'Basic',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 3,
      agilityCap: 35,
      weightInKilos: 15,
      availability: Availability.COMMON
    }
  ],
  [
    'Feudal World Plate',
    {
      name: 'Feudal World Plate',
      class: 'Basic',
      protectedLocations: ['All'],
      armorPoints: 5,
      agilityCap: 25,
      weightInKilos: 30,
      availability: Availability.SCARCE
    }
  ],
  [
    'Heavy Leathers',
    {
      name: 'Heavy Leathers',
      class: 'Basic',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body'],
      armorPoints: 1,
      agilityCap: 999,
      weightInKilos: 5,
      availability: Availability.COMMON
    }
  ],
  [
    'Imperial Robes',
    {
      name: 'Imperial Robes',
      class: 'Basic',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 1,
      agilityCap: 999,
      weightInKilos: 4,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Mould Suit',
    {
      name: 'Mould Suit',
      class: 'Basic',
      protectedLocations: ['All'],
      armorPoints: 0,
      agilityCap: 40,
      weightInKilos: 10,
      availability: Availability.RARE,
      notes:
        'Grants a +40 bonus to any Toughness test made to resist the effects of gasses, as well as a +10 bonus for resisting extreme temperatures and being set on fire. Contains rebreather for 5 hours. If takes more than 5 points of damage in a single round, the suit becomes damaged and require repair.'
    }
  ],
  [
    'Carapace Chestplate',
    {
      name: 'Carapace Chestplate',
      class: 'Carapace',
      protectedLocations: ['Body'],
      armorPoints: 6,
      agilityCap: 55,
      weightInKilos: 7,
      availability: Availability.RARE
    }
  ],
  [
    'Carapace Gauntlets',
    {
      name: 'Carapace Gauntlets',
      class: 'Carapace',
      protectedLocations: ['Left Arm', 'Right Arm'],
      armorPoints: 5,
      agilityCap: 999,
      weightInKilos: 2,
      availability: Availability.RARE
    }
  ],
  [
    'Carapace Greaves',
    {
      name: 'Carapace Greaves',
      class: 'Carapace',
      protectedLocations: ['Left Leg', 'Right Leg'],
      armorPoints: 5,
      agilityCap: 999,
      weightInKilos: 3,
      availability: Availability.RARE
    }
  ],
  [
    'Carapace Helm',
    {
      name: 'Carapace Helm',
      class: 'Carapace',
      protectedLocations: ['Head'],
      armorPoints: 4,
      agilityCap: 999,
      weightInKilos: 2,
      availability: Availability.RARE
    }
  ],
  [
    'Enforcer Light Carapace',
    {
      name: 'Enforcer Light Carapace',
      class: 'Carapace',
      protectedLocations: ['All'],
      armorPoints: 5,
      agilityCap: 45,
      weightInKilos: 15,
      availability: Availability.RARE
    }
  ],
  [
    'Militarum Tempestus Carapace',
    {
      name: 'Militarum Tempestus Carapace',
      class: 'Carapace',
      protectedLocations: ['All'],
      armorPoints: 6,
      agilityCap: 45,
      weightInKilos: 15,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Flak Cloak',
    {
      name: 'Flak Cloak',
      class: 'Flak',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 3,
      agilityCap: 55,
      weightInKilos: 8,
      availability: Availability.SCARCE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Flak Coat',
    {
      name: 'Flak Coat',
      class: 'Flak',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body'],
      armorPoints: 3,
      agilityCap: 60,
      weightInKilos: 5,
      availability: Availability.SCARCE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Flak Gauntlets',
    {
      name: 'Flak Gauntlets',
      class: 'Flak',
      protectedLocations: ['Left Arm', 'Right Arm'],
      armorPoints: 2,
      agilityCap: 999,
      weightInKilos: 1,
      availability: Availability.AVERAGE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Flak Helmet',
    {
      name: 'Flak Helmet',
      class: 'Flak',
      protectedLocations: ['Head'],
      armorPoints: 2,
      agilityCap: 999,
      weightInKilos: 2,
      availability: Availability.AVERAGE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Flak Vest',
    {
      name: 'Flak Vest',
      class: 'Flak',
      protectedLocations: ['Body'],
      armorPoints: 3,
      agilityCap: 60,
      weightInKilos: 5,
      availability: Availability.AVERAGE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Imperial Guard Flak Armour',
    {
      name: 'Imperial Guard Flak Armour',
      class: 'Flak',
      protectedLocations: ['All'],
      armorPoints: 4,
      agilityCap: 50,
      weightInKilos: 11,
      availability: Availability.SCARCE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Light Flak Cloak',
    {
      name: 'Light Flak Cloak',
      class: 'Flak',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 2,
      agilityCap: 55,
      weightInKilos: 4,
      availability: Availability.SCARCE,
      notes: 'Counts 1 AP higher against Blast.'
    }
  ],
  [
    'Mesh Cloak',
    {
      name: 'Mesh Cloak',
      class: 'Mesh',
      protectedLocations: ['Left Arm', 'Right Arm', 'Body', 'Left Leg', 'Right Leg'],
      armorPoints: 4,
      agilityCap: 60,
      weightInKilos: 3,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Mesh Vest',
    {
      name: 'Mesh Vest',
      class: 'Mesh',
      protectedLocations: ['Body'],
      armorPoints: 4,
      agilityCap: 999,
      weightInKilos: 2,
      availability: Availability.RARE
    }
  ],
  [
    'Light Power Armour',
    {
      name: 'Light Power Armour',
      class: 'Power',
      armorPoints: 7,
      availability: Availability.VERY_RARE,
      protectedLocations: ['All'],
      agilityCap: 40,
      weightInKilos: 40,
      notes:
        'Add Unnatural Strenght (1), incrases wearer size by 1. Power source run 1d5 hours if not stated differently.'
    }
  ],
  [
    'Field Wall Generator',
    {
      name: 'Field Wall Generator',
      class: 'Force Field',
      protectionRating: 65,
      weightInKilos: 18,
      availability: Availability.VERY_RARE,
      notes:
        'Consists of two or more generators. Turning on or off a generator requires a Full Action, which also activates all other linked generators. A linear force field then forms between each generator, 1.5 metres high and up to 8 metres in length. The barrier acts as cover, so only parts of the body protected by the field wall gain force field protection. If a wall section overloads, then only that portion between the two generators shuts down'
    }
  ],
  [
    'Flare Shield',
    {
      name: 'Flare Shield',
      class: 'Force Field',
      protectionRating: 25,
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Protection rating doubled against weapons with the Blast or Spray qualities. If the shield overloads, it inflicts 1d10 Energy damage to the wearer that ignores Toughness bonus and Armour.'
    }
  ],
  [
    'Power Field (Personnel)',
    {
      name: 'Power Field (Personnel)',
      class: 'Force Field',
      protectionRating: 80,
      weightInKilos: 50,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'Bulky. Imposes -20 to stealth tests and dose not defend against ranged attacks made within 1 metre or melee.'
    }
  ],
  [
    'Power Field (Vehicle/Emplacement)',
    {
      name: 'Power Field (Vehicle/Emplacement)',
      class: 'Force Field',
      protectionRating: 80,
      weightInKilos: 500,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'Bulky. Imposes -20 to stealth tests and dose not defend against ranged attacks made within 1 metre or melee.'
    }
  ],
  [
    'Refractor Field',
    {
      name: 'Refractor Field',
      class: 'Force Field',
      protectionRating: 30,
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Imposes a -20 to Stealth tests when active.'
    }
  ],
  [
    'Rosarius',
    {
      name: 'Rosarius',
      class: 'Force Field',
      protectionRating: 50,
      weightInKilos: 0.6,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Allies who can draw a line of sight to a character with a rosarius gain a +10 bonus to Fear and Pinning tests; this is lost if the wearer dies or suffers any Critical damage.'
    }
  ]
]);
