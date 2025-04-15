import { Availability } from '../accessibility-modifiers';
import { GenericItem } from '../generic-item';

export const CYBERNETICS: Map<string, GenericItem> = new Map([
  [
    'Augur Array',
    {
      name: 'Augur Array',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Identically to a auspex and requires concentration and a Half Action.'
    }
  ],
  [
    'Autosanguine',
    {
      name: 'Autosanguine',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Repairs minor injuries and heals 2 damage per day.'
    }
  ],
  [
    'Baleful Eye',
    {
      name: 'Baleful Eye',
      weightInKilos: 0,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Hot-shot laspistol in the eye. Jam causes temporary blindness.'
    }
  ],
  [
    'Bionic Arm',
    {
      name: 'Bionic Arm',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: 'Common mechanical arm. Craftsmanship determines bonuses.'
    }
  ],
  [
    'Bionic Legs',
    {
      name: 'Bionic Legs',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: 'Common mechanical legs. Craftsmanship determines bonuses.'
    }
  ],
  [
    'Bionic Respiratory System',
    {
      name: 'Bionic Respiratory System',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+20 to resist airborne toxins and gas.'
    }
  ],
  [
    'Bionic Heart',
    {
      name: 'Bionic Heart',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: '+1 AP to Body, grants Sprint talent.'
    }
  ],
  [
    'Bionic Senses',
    {
      name: 'Bionic Senses',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Mechanical eyes, ears, and noses. Craftsmanship determines bonuses.'
    }
  ],
  [
    'Calculus Logi Upgrade',
    {
      name: 'Calculus Logi Upgrade',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: '+10 to Literacy, Logic, and Scholastic Lore tests.'
    }
  ],
  [
    'Cerebral Implants',
    {
      name: 'Cerebral Implants',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Restore mental faculties but reduce multiple characteristics permanently.'
    }
  ],
  [
    'Cranial Armour',
    {
      name: 'Cranial Armour',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: '+1 AP to Head.'
    }
  ],
  [
    'Ferric Lure Implants',
    {
      name: 'Ferric Lure Implants',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Pull unsecured metal objects (max 1 kg/WP bonus) from 20m.'
    }
  ],
  [
    'Interface Port',
    {
      name: 'Interface Port',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+10 to Lore, Inquiry, or Tech-Use when connected to machine.'
    }
  ],
  [
    'Internal Reservoir',
    {
      name: 'Internal Reservoir',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Battery for Luminen Capacitors. Recharges after one day rest.'
    }
  ],
  [
    'Locator Matrix',
    {
      name: 'Locator Matrix',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Provides precise location if planetary detail known.'
    }
  ],
  [
    'Luminen Capacitor',
    {
      name: 'Luminen Capacitor',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Recharge or power machines with a Toughness test.'
    }
  ],
  [
    'Maglev Coils',
    {
      name: 'Maglev Coils',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Hover 20–30 cm off ground for minutes equal to 1d10 + TB.'
    }
  ],
  [
    'Mechadendrite',
    {
      name: 'Mechadendrite',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Acts as extra limb, bonuses based on type.'
    }
  ],
  [
    'Memorance Implant',
    {
      name: 'Memorance Implant',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+10 to Trade (Loremancer) or related social tests.'
    }
  ],
  [
    'Mind Impulse Unit',
    {
      name: 'Mind Impulse Unit',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+10 to Tech-Use or Operate when MIU linking is possible.'
    }
  ],
  [
    'MIU Weapon Interface',
    {
      name: 'MIU Weapon Interface',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Fire linked ranged weapon as Free Action.'
    }
  ],
  [
    'Respiratory Filter Implant',
    {
      name: 'Respiratory Filter Implant',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+20 to resist inhaled poisons, gas, toxins.'
    }
  ],
  [
    'Scribe-tines',
    {
      name: 'Scribe-tines',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: '+10 to all Lore tests.'
    }
  ],
  [
    'Subskin Armour',
    {
      name: 'Subskin Armour',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: '+2 AP to Arms, Body, Legs. Stacks with worn armour.'
    }
  ],
  [
    'Synth Muscle',
    {
      name: 'Synth Muscle',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Grants Unnatural Strength (1).'
    }
  ],
  [
    'Vocal Implant',
    {
      name: 'Vocal Implant',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: 'Amplifies voice to inhuman range.'
    }
  ],
  [
    'Volitor Implant',
    {
      name: 'Volitor Implant',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes: 'Enforces compulsion. Breaking causes unconsciousness or death.'
    }
  ]
]);
