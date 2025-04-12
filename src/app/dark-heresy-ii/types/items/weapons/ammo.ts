import { Availability } from '../accessibility-modifiers';

export type Ammunition = {
  name: string;
  availability: Availability;
  effect: string;
  compatibleWith: string;
};

export const ammo: Ammunition[] = [
  {
    name: 'Amputator Shells',
    availability: Availability.EXTREMELY_RARE,
    effect: `Add 2 to the weapon damage. `,
    compatibleWith:
      'Stub revolvers, stub automatics, shotguns (all types), sniper rifles, hand cannons, autopistols, and autoguns.'
  },
  {
    name: 'Bleeder Rounds',
    availability: Availability.RARE,
    effect: 'Damage from bleeder rounds and suffers Blood Loss for 1d5 rounds or treated.',
    compatibleWith: 'Stub revolvers, stub automatics, hand cannons, autopistols, and autoguns.'
  },
  {
    name: 'Dumdum Bullets',
    availability: Availability.SCARCE,
    effect: 'Add 2 dmg to the weapon, but Armour points count double against them.',
    compatibleWith: 'Stub revolvers, stub automatics, sniper rifles, and hand cannons.'
  },
  {
    name: 'Expander Rounds',
    availability: Availability.SCARCE,
    effect: `Add 1 to a weapon's damage and penetration.`,
    compatibleWith: 'Stub revolvers, stub automatics, sniper rifles, autopistols, and autoguns.'
  },
  {
    name: 'Explosive Arrows/Quarrels',
    availability: Availability.SCARCE,
    effect: `Suffer -10 penalty but change damage type to Explosive, remove the Primitive quality, and gains Blast (1).`,
    compatibleWith: 'Bows and crossbows.'
  },
  {
    name: 'Hot-Shot Charge Packs',
    availability: Availability.SCARCE,
    effect: `Adds 1 to its damage, gains Tearing, and penetration of 4. Also loses Reliable quality and clip size is reduced to 1.`,
    compatibleWith: 'Laspistols, lascarbines, lasguns, and long las weapons.'
  },
  {
    name: 'Inferno Shells',
    availability: Availability.RARE,
    effect: `Gains the Flame quality.`,
    compatibleWith: 'Shotgun and all Bolt weapons.'
  },
  {
    name: 'Man-Stopper Bullets',
    availability: Availability.SCARCE,
    effect: `Adds 3 to weapon's penetration.`,
    compatibleWith:
      'Stub revolvers, stub automatics, hand cannons, sniper rifles, autopistols, and autoguns.'
  },
  {
    name: 'Scrambler Rounds',
    availability: Availability.RARE,
    effect: `Adds the Hallucinogenic (2) and Recharge qualities.`,
    compatibleWith: 'Bolt and Solid Projectile weapons'
  },
  {
    name: 'Tempest Bolt Shells',
    availability: Availability.NEAR_UNIQUE,
    effect: `Changes weapon's damage to Energy and grant Shocking quality. They also add 3 damage to targets with the Machine trait.`,
    compatibleWith: 'Bolt pistols, boltguns, and heavy bolters.'
  },
  {
    name: 'Tox Rounds',
    availability: Availability.SCARCE,
    effect: `Adds Toxic (1) quality but reduces damage by 2`,
    compatibleWith: 'Bolt and Solid Projectile weapons'
  }
];
