import { Availability } from '../accessibility-modifiers';
import { Weapon, WeaponJam } from './weapon';

const NO_CLIP_SIZE_LIMIT:number = 999999;
const NO_RELOAD_NEEDED: number = 0;

export const WEAPONS: Map<string, Weapon> = new Map([
  [
    'Lasgun',
    {
      name: 'Lasgun',
      family: 'Las',
      class: 'Basic',
      rangeInMeters: 100,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+3',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      reloadInActions: 2,
      weightInKilos: 4,
      availability: Availability.COMMON,
      notes:
        'Las Weapon Variable Setting: Overcharge: +1 Dam, 2 ammo. Overload: +2 Dam and Pen but uses 4 ammo, loses Reliable, and gains Unreliable'
    }
  ],
  [
    'Laslock',
    {
      name: 'Laslock',
      family: 'Las',
      class: 'Basic',
      rangeInMeters: 70,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 1,
      weightInKilos: 4,
      availability: Availability.PLENTIFUL,
      notes: 'Do not benefit from the Las Weapon Variable Setting rules.'
    }
  ],
  [
    'Laspistol',
    {
      name: 'Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+2',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 30,
      reloadInActions: 1,
      weightInKilos: 1.5,
      availability: Availability.COMMON,
      notes:
        'Las Weapon Variable Setting: Overcharge: +1 Dam, 2 ammo. Overload: +2 Dam and Pen but uses 4 ammo, loses Reliable, and gains Unreliable'
    }
  ],
  [
    'Hot-shot Lasgun',
    {
      name: 'Hot-shot Lasgun',
      family: 'Las',
      class: 'Basic',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 7,
      clipSize: 30,
      reloadInActions: 4,
      weightInKilos: 6,
      availability: Availability.RARE,
      notes: 'Do not benefit from the Las Weapon Variable Setting rules.'
    }
  ],
  [
    'Hot-shot Laspistol',
    {
      name: 'Hot-shot Laspistol',
      family: 'Las',
      class: 'Pistol',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 7,
      clipSize: 40,
      reloadInActions: 4,
      weightInKilos: 4,
      availability: Availability.RARE,
      notes: 'Do not benefit from the Las Weapon Variable Setting rules.'
    }
  ],
  [
    'Long-Las',
    {
      name: 'Long-Las',
      family: 'Las',
      class: 'Basic',
      rangeInMeters: 150,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+3',
      damageType: 'Energy',
      armourPenetration: 1,
      clipSize: 40,
      reloadInActions: 2,
      traits: ['Accurate', 'Felling (4)'],
      weightInKilos: 4.5,
      availability: Availability.SCARCE,
      notes:
        'Las Weapon Variable Setting: Overcharge: +1 Dam, 2 ammo. Overload: +2 Dam and Pen but uses 4 ammo, loses Reliable, and gains Unreliable'
    }
  ],
  [
    'Grenade Launcher',
    {
      name: 'Grenade Launcher',
      family: 'Launcher',
      class: 'Basic',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      clipSize: 6,
      reloadInActions: 4,
      weightInKilos: 12,
      availability: Availability.AVERAGE,
      notes: 'Consumes grenades as ammunition - damage and effects depend on the grenade used'
    }
  ],
  [
    'Missile Launcher',
    {
      name: 'Missile Launcher',
      family: 'Launcher',
      class: 'Heavy',
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rangeInMeters: 300,
      rateOfFire: {
        single: true
      },
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 2,
      weightInKilos: 35,
      availability: Availability.RARE,
      notes: 'Consumes missiles as ammunition - damage and effects depend on the missile used'
    }
  ],
  [
    'Bolas',
    {
      name: 'Bolas',
      family: 'Low-Tech',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 10,
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Inaccurate', 'Snare (1)'],
      weightInKilos: 1.5,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Bow',
    {
      name: 'Bow',
      family: 'Low-Tech',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 1,
      traits: ['Primitive (6)'],
      weightInKilos: 2,
      availability: Availability.COMMON,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Crossbow',
    {
      name: 'Crossbow',
      family: 'Low-Tech',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 4,
      traits: ['Primitive (7)'],
      weightInKilos: 3,
      availability: Availability.COMMON
    }
  ],
  [
    'Inferno Pistol',
    {
      name: 'Inferno Pistol',
      family: 'Melta',
      class: 'Pistol',
      rangeInMeters: 10,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '2d10+10',
      damageType: 'Energy',
      armourPenetration: 12,
      clipSize: 3,
      reloadInActions: 2,
      traits: ['Melta'],
      weightInKilos: 3,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Meltagun',
    {
      name: 'Meltagun',
      family: 'Melta',
      class: 'Basic',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '2d10+10',
      damageType: 'Energy',
      armourPenetration: 12,
      clipSize: 5,
      reloadInActions: 2,
      traits: ['Melta'],
      weightInKilos: 15,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Plasma Gun',
    {
      name: 'Plasma Gun',
      family: 'Plasma',
      class: 'Basic',
      rangeInMeters: 90,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+7',
      damageType: 'Energy',
      armourPenetration: 6,
      clipSize: 40,
      reloadInActions: 10,
      traits: ['Maximal', 'Overheats'],
      weightInKilos: 18,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Plasma Pistol',
    {
      name: 'Plasma Pistol',
      family: 'Plasma',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+6',
      damageType: 'Energy',
      armourPenetration: 6,
      clipSize: 10,
      reloadInActions: 6,
      traits: ['Maximal', 'Overheats'],
      weightInKilos: 4,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Autocannon',
    {
      name: 'Autocannon',
      family: 'Solid Projectile',
      class: 'Heavy',
      rangeInMeters: 300,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '3d10+8',
      damageType: 'Impact',
      armourPenetration: 6,
      clipSize: 24,
      reloadInActions: 4,
      weightInKilos: 40,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Autogun',
    {
      name: 'Autogun',
      family: 'Solid Projectile',
      class: 'Basic',
      rangeInMeters: 100,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3,
        full: 10
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 30,
      reloadInActions: 2,
      weightInKilos: 5,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Autopistol',
    {
      name: 'Autopistol',
      family: 'Solid Projectile',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        full: 6
      },
      damage: '1d10+2',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 18,
      reloadInActions: 2,
      weightInKilos: 1.5,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Hand Cannon',
    {
      name: 'Hand Cannon',
      family: 'Solid Projectile',
      class: 'Pistol',
      rangeInMeters: 35,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 2,
      clipSize: 5,
      reloadInActions: 4,
      weightInKilos: 3,
      availability: Availability.SCARCE,
      notes: 'Two Handed to fire.'
    }
  ],
  [
    'Grav Pistol',
    {
      name: 'Grav Pistol',
      family: 'Exotic',
      class: 'Pistol',
      rangeInMeters: 15,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 6,
      clipSize: 6,
      reloadInActions: 2,
      traits: ['Concussive (1)', 'Graviton'],
      weightInKilos: 3,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Graviton Gun',
    {
      name: 'Graviton Gun',
      family: 'Exotic',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+6',
      damageType: 'Impact',
      armourPenetration: 8,
      clipSize: 9,
      reloadInActions: 4,
      traits: ['Concussive (2)', 'Graviton'],
      weightInKilos: 6,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Needle Pistol',
    {
      name: 'Needle Pistol',
      family: 'Exotic',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      clipSize: 6,
      reloadInActions: 2,
      traits: ['Accurate', 'Felling (1)', 'Toxic (5)'],
      weightInKilos: 1.5,
      availability: Availability.VERY_RARE,
      notes: 'Built-in silencer'
    }
  ],
  [
    'Needle Rifle',
    {
      name: 'Needle Rifle',
      family: 'Exotic',
      class: 'Basic',
      rangeInMeters: 180,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      clipSize: 6,
      reloadInActions: 4,
      traits: ['Accurate', 'Felling (1)', 'Toxic (5)'],
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Built-in silencer'
    }
  ],
  [
    'Web Pistol',
    {
      name: 'Web Pistol',
      family: 'Exotic',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 2,
      traits: ['Snare (0)'],
      weightInKilos: 3.5,
      availability: Availability.VERY_RARE,
      notes: 'Web dissolve away after 1d5 hours.'
    }
  ],
  [
    'Webber',
    {
      name: 'Webber',
      family: 'Exotic',
      class: 'Basic',
      rangeInMeters: 50,
      isRanged: true,
      rateOfFire: {
        single: true
      },
      weaponJamOn: WeaponJam.STANDARD,
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 4,
      traits: ['Blast (5)', 'Snare (1)'],
      weightInKilos: 8,
      availability: Availability.RARE,
      notes: 'Web dissolve away after 1d5 hours.'
    }
  ],
  [
    'Heavy Stubber',
    {
      name: 'Heavy Stubber',
      family: 'Solid Projectile',
      class: 'Heavy',
      rangeInMeters: 100,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: false,
        full: 8
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 3,
      clipSize: 80,
      reloadInActions: 4,
      weightInKilos: 30,
      availability: Availability.RARE
    }
  ],
  [
    'Shotgun',
    {
      name: 'Shotgun',
      family: 'Solid Projectile',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 8,
      reloadInActions: 4,
      traits: ['Scatter'],
      weightInKilos: 5,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Shotgun (Combat)',
    {
      name: 'Shotgun (Combat)',
      family: 'Solid Projectile',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 18,
      reloadInActions: 2,
      traits: ['Scatter'],
      weightInKilos: 6.5,
      availability: Availability.SCARCE
    }
  ],
  [
    'Sniper Rifle',
    {
      name: 'Sniper Rifle',
      family: 'Solid Projectile',
      class: 'Basic',
      rangeInMeters: 200,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 3,
      clipSize: 20,
      reloadInActions: 2,
      traits: ['Accurate'],
      weightInKilos: 5,
      availability: Availability.SCARCE
    }
  ],
  [
    'Stub Automatic',
    {
      name: 'Stub Automatic',
      family: 'Solid Projectile',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 9,
      reloadInActions: 2,
      weightInKilos: 1.5,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Stub Revolver',
    {
      name: 'Stub Revolver',
      family: 'Solid Projectile',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 6,
      reloadInActions: 4,
      weightInKilos: 1.5,
      availability: Availability.PLENTIFUL
    }
  ],
  [
    'Fire Bomb',
    {
      name: 'Fire Bomb',
      family: 'Explosives',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, // 'SBx3',
      damage: '1d10+2',
      damageType: 'Energy',
      armourPenetration: 0,
      traits: ['Blast (2)', 'Flame'],
      weightInKilos: 0.5,
      availability: Availability.PLENTIFUL,
      notes:
        'Cannot be used with launcher weapons and cannot be thrown. Require Half Action to ready.'
    }
    /** @todo check */
  ],
  [
    'Melta Bomb',
    {
      name: 'Melta Bomb',
      family: 'Explosives',
      class: 'Charge',
      isRanged: false,
      damage: '6d10',
      damageType: 'Energy',
      armourPenetration: 12,
      traits: ['Blast (2)', 'Flame', 'Melta'],
      weightInKilos: 12,
      availability: Availability.VERY_RARE,
      notes: 'Cannot be used with launcher weapons and cannot be thrown.'
    }
  ],
  [
    'Blind Grenade',
    {
      name: 'Blind Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, // 'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Smoke (2)'],
      weightInKilos: 0.5,
      availability: Availability.SCARCE
    }
  ],
  [
    'Choke Grenade',
    {
      name: 'Choke Grenade',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (3)'],
      weightInKilos: 0.5,
      availability: Availability.SCARCE,
      notes:
        'Characters in radius make a Toughness test each turn, taking 1 fatigue upon failure. 4+ DoF suffers a 1d10 Toughness damage. Lasts for up 2d5 rounds depending on weather.'
    }
  ],
  [
    'Frag Grenade',
    {
      name: 'Frag Grenade',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '2d10',
      damageType: 'Explosive',
      armourPenetration: 0,
      traits: ['Blast (3)'],
      weightInKilos: 0.5,
      availability: Availability.COMMON
    }
  ],

  ['Frag Missile',
    {
      name: 'Frag Missile',
      family: 'Missile',
      class: 'Charge',
      isRanged: false,
      rateOfFire: {
        single: true
      },
      damage: '2d10+2',
      damageType: 'Explosive',
      armourPenetration: 2,

      traits: ['Blast (5)'],
      weightInKilos: 1,
      availability: Availability.AVERAGE
    },
  ],
  [
    'Hallucinogen Grenade',
    {
      name: 'Hallucinogen Grenade',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (6)', 'Hallucinogenic (1)'],
      weightInKilos: 0.5,
      availability: Availability.SCARCE
    }
  ],
  [
    'Haywire Grenade',
    {
      name: 'Haywire Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Haywire (2)'],
      weightInKilos: 0.5,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Krak Grenade',
    {
      name: 'Krak Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '2d10+4',
      damageType: 'Explosive',
      armourPenetration: 6,
      traits: ['Concussive (0)'],
      weightInKilos: 0.5,
      availability: Availability.RARE,
      notes: 'Gain Vengeful (9) against vehicles.'
    }
  ],

  ['Krak Missile',
    {
      name: 'Krak Missile',
      family: 'Missile',
      class: 'Charge',
      isRanged: false,
      rateOfFire: {
        single: true
      },
      damage: '3d10+8',
      damageType: 'Explosive',
      armourPenetration: 8,
      traits: ['Concussive (3)', 'Proven (2)'],
      weightInKilos: 1,
      availability: Availability.SCARCE,
      notes: 'Gain Vengeful (9) against vehicles.'
    },
  ],
  [
    'Chainaxe',
    {
      name: 'Chainaxe',
      family: 'Chain',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 2,

      traits: ['Tearing', 'Two-Handed'],
      weightInKilos: 13,
      availability: Availability.SCARCE,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Chainblade',
    {
      name: 'Chainblade',
      family: 'Chain',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+1',
      damageType: 'Rending',
      armourPenetration: 1,

      traits: ['Tearing'],
      weightInKilos: 2,
      availability: Availability.SCARCE
    }
  ],
  [
    'Chainsword',
    {
      name: 'Chainsword',
      family: 'Chain',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+2',
      damageType: 'Rending',
      armourPenetration: 2,

      traits: ['Balanced', 'Tearing'],
      weightInKilos: 6,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Photon Flash Grenade',
    {
      name: 'Photon Flash Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (6)'],
      weightInKilos: 0.5,
      availability: Availability.RARE,
      notes:
        'Must pass an Ordinary (+10) Agility test or be blinded for a number of rounds equal to his DoF.'
    }
  ],
  [
    'Smoke Grenade',
    {
      name: 'Smoke Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Smoke (4)'],
      weightInKilos: 0.5,
      availability: Availability.COMMON
    }
  ],
  [
    'Stun Grenade',
    {
      name: 'Stun Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,

      traits: ['Blast (3)', 'Concussive (2)'],
      weightInKilos: 0.5,
      availability: Availability.COMMON
    }
  ],
  [
    'Web Grenade',
    {
      name: 'Web Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (3)', 'Snare (2)'],
      weightInKilos: 0.5,
      availability: Availability.RARE,
      notes: 'Web dissolve away after 1d5 hours.'
    }
  ],
  [
    'Eviscerator',
    {
      name: 'Eviscerator',
      family: 'Chain',
      class: 'Melee',
      isRanged: false,
      damage: '2d10',
      damageType: 'Rending',
      armourPenetration: 9,
      traits: ['Razor Sharp', 'Tearing', 'Two-Handed', 'Unwieldy'],
      weightInKilos: 15,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Force Staff',
    {
      name: 'Force Staff',
      family: 'Force',
      class: 'Melee',
      isRanged: false,
      damage: '1d10',
      damageType: 'Impact',
      armourPenetration: 2,
      traits: ['Force', 'Two-Handed'],
      weightInKilos: 2,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Force Sword',
    {
      name: 'Force Sword',
      family: 'Force',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+1',
      damageType: 'Rending',
      armourPenetration: 2,
      traits: ['Balanced', 'Force'],
      weightInKilos: 5,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Great Weapon',
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
      availability: Availability.SCARCE,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Hunting Lance',
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
      availability: Availability.SCARCE,
      notes:
        'After a successful attack is made with this weapon, its tip is destroyed and it is treated as a staff.'
    }
  ],
  [
    'Improvised',
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
    }
  ],
  [
    'Knife',
    {
      name: 'Knife',
      family: 'Low-Tech',
      class: 'Melee',
      isRanged: false,
      damage: '1d5',
      damageType: 'Rending',
      armourPenetration: 0,
      weightInKilos: 1,
      availability: Availability.PLENTIFUL
    }
  ],
  [
    'Knife',
    {
      name: 'Knife',
      family: 'Low-Tech',
      class: 'Thrown',
      rangeInMeters: 5,
      isRanged: true,
      damage: '1d5',
      damageType: 'Rending',
      armourPenetration: 0,
      weightInKilos: 1,
      availability: Availability.PLENTIFUL
    }
  ],
  [
    'Shield',
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
      availability: Availability.COMMON,
      notes:
        'Attacks suffer a -20 penalty instead of the normal penalty from the Defensive quality.'
    }
  ],
  [
    'Spear',
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
      availability: Availability.COMMON,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Staff',
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
      availability: Availability.PLENTIFUL,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Sword',
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
    }
  ],
  [
    'Truncheon',
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
    }
  ],
  [
    'Warhammer',
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
      availability: Availability.SCARCE,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Whip',
    {
      name: 'Whip',
      family: 'Low-Tech',
      class: 'Melee/Thrown',
      rangeInMeters: 3,
      isRanged: true,
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      traits: ['Flexible', 'Primitive (6)'],
      weightInKilos: 2,
      availability: Availability.AVERAGE
    }
  ],
  [
    'Omnissian Axe',
    {
      name: 'Omnissian Axe',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '2d10+4',
      damageType: 'Energy',
      armourPenetration: 6,
      traits: ['Power Field', 'Two-Handed', 'Unbalanced'],
      weightInKilos: 8,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Two-handed weapon and functions as a Combi-tool.'
    }
  ],
  [
    'Power Axe',
    {
      name: 'Power Axe',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+7',
      damageType: 'Energy',
      armourPenetration: 7,
      traits: ['Power Field', 'Two-Handed', 'Unbalanced'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes: 'Two-handed weapon.'
    }
  ],
  [
    'Power Fist',
    {
      name: 'Power Fist',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '2d10',
      damageType: 'Energy',
      armourPenetration: 9,
      traits: ['Power Field', 'Unwieldy'],
      weightInKilos: 13,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Power Maul (High)',
    {
      name: 'Power Maul (High)',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 4,
      traits: ['Power Field', 'Shocking'],
      weightInKilos: 3.5,
      availability: Availability.VERY_RARE,
      notes: 'When used with two hands it gains the Concussive (0) quality.'
    }
  ],
  [
    'Power Maul (Low)',
    {
      name: 'Power Maul (Low)',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+1',
      damageType: 'Energy',
      armourPenetration: 2,
      traits: ['Shocking'],
      weightInKilos: 3.5,
      availability: Availability.VERY_RARE,
      notes: 'When used with two hands it gains the Concussive (0) quality.'
    }
  ],
  [
    'Power Sword',
    {
      name: 'Power Sword',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 5,
      traits: ['Balanced', 'Power Field'],
      weightInKilos: 3,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Shock Maul',
    {
      name: 'Shock Maul',
      family: 'Shock',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      traits: ['Shocking'],
      weightInKilos: 2.5,
      availability: Availability.SCARCE
    }
    /**
     * @todo check
     */
  ],
  [
    'Shock Whip',
    {
      name: 'Shock Whip',
      family: 'Shock',
      class: 'Melee/Thrown',
      rangeInMeters: 3,
      isRanged: true,
      damage: '1d10+1',
      damageType: 'Impact',
      armourPenetration: 0,
      traits: ['Flexible', 'Shocking'],
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Unarmed',
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
    }
  ],
  [
    'Psycannon',
    {
      name: 'Psycannon',
      family: 'Bolt',
      class: 'Heavy',
      rangeInMeters: 120,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: false,
        semi: 2,
        full: 5
      },
      damage: '2d10+5',
      damageType: 'Explosive',
      armourPenetration: 5,
      clipSize: 40,
      reloadInActions: 6,
      traits: ['Daemonbane', 'Tearing'],
      weightInKilos: 20,
      availability: Availability.NEAR_UNIQUE,
      notes:
        "Grants the Auto-Stabilised Trait when fired. Ignores all protective benefits from Psy Powers, and deals an additional +2 damage per target's Psy Rating"
    }
    // @todo no clipSize data
  ],
  [
    'Hellrifle',
    {
      name: 'Hellrifle',
      family: 'Exotic',
      class: 'Basic',
      rangeInMeters: 300,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 4,
      clipSize: NO_CLIP_SIZE_LIMIT,
      reloadInActions: NO_RELOAD_NEEDED,
      traits: ['Felling (2)'],
      weightInKilos: 10,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Silverseine Launcher',
    {
      name: 'Silverseine Launcher',
      family: 'Exotic',
      class: 'Heavy',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 4,
      traits: ['Blast (4)', 'Sanctified', 'Snare (2)'],
      weightInKilos: 25,
      availability: Availability.VERY_RARE,
      notes:
        'The Snare quality is doubled against Daemonic targets. Daemonic targets trapped by the Snare must also test for Warp Instability at the start of each turn'
    }
  ],
  [
    'Incinerator',
    {
      name: 'Incinerator',
      family: 'Flame',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+6',
      damageType: 'Energy',
      armourPenetration: 6,
      clipSize: 10,
      reloadInActions: 4,
      traits: ['Daemonbane', 'Flame', 'Spray'],
      weightInKilos: 3,
      availability: Availability.NEAR_UNIQUE,
      notes:
        "Ignores any protective benefits from Psy Powers, and targets in the area of effect suffer -10 to the Agility test to avoid being set aflame for each point in the wielder's Psy Rating"
    }
  ],
  [
    'Abyssal Charge',
    {
      name: 'Abyssal Charge',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '1d10+4',
      damageType: 'Explosive',
      armourPenetration: 4,
      traits: ['Blast (3)', 'Crippling (2)', 'Tainted'],
      weightInKilos: 0.5,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Argent Globe',
    {
      name: 'Argent Globe',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '2d10',
      damageType: 'Explosive',
      armourPenetration: 2,
      traits: ['Blast (3)', 'Sanctified'],
      weightInKilos: 0.5,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Gains the Crippling (3) quality when the target is Daemonic'
    }
  ],
  [
    'Ironfaith Incense Grenade',
    {
      name: 'Ironfaith Incense Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '1d10',
      damageType: 'Explosive',
      armourPenetration: 0,
      traits: ['Daemonbane', 'Sanctified', 'Smoke (3)'],
      weightInKilos: 0.5,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Whenever a character suffers a hit from this grenade, enters its smoke, or begins his turn within the smoke, he suffers Energy damage equal to his Corruption bonus or his Daemonic (X) trait, whichever is higher. This ignores armour and Toughness Bonus'
    }
  ],
  [
    'Animus Hammer',
    {
      name: 'Animus Hammer',
      family: 'Force',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+10',
      damageType: 'Energy',
      armourPenetration: 4,

      traits: ['Daemonbane', 'Force', 'Power Field', 'Unwieldy'],
      weightInKilos: 8,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'SB added to damage is doubled. Acts as a Psy Focus. If the wielder is a Psyker, add +1 to his Psy Rating.'
    }
  ],
  [
    'Force Hammer',
    {
      name: 'Force Hammer',
      family: 'Force',
      class: 'Melee',
      isRanged: false,

      damage: '2d10',
      damageType: 'Rending',
      armourPenetration: 0,

      traits: ['Force', 'Unbalanced'],
      weightInKilos: 10,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Two-handed unless wielder has SB of 5 or higher.'
    }
  ],
  [
    'Nemesis Daemon Hammer',
    {
      name: 'Nemesis Daemon Hammer',
      family: 'Force',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+1',
      damageType: 'Energy',
      armourPenetration: 8,

      traits: ['Daemonbane', 'Force', 'Power Field', 'Unwieldy'],
      weightInKilos: 10,
      availability: Availability.NEAR_UNIQUE,
      notes:
        "SB added to damage is doubled. One-handed, but if used with two hands it gains Concussive (X), with X being the wielder's Psy Rating."
    }
  ],
  [
    'Sanctus Hammer',
    {
      name: 'Sanctus Hammer',
      family: 'Force',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+6',
      damageType: 'Energy',
      armourPenetration: 4,

      traits: ['Balanced', 'Concussive (4)', 'Daemonbane', 'Force', 'Power Field'],
      weightInKilos: 6,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'SB added to damage is doubled. Two-handed weapon. Contains an exterminator cartridge loaded with Incinerator ammunition (pp 163 CB)'
    }
  ],
  [
    'Tempus Hammer',
    {
      name: 'Tempus Hammer',
      family: 'Force',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+4',
      damageType: 'Energy',
      armourPenetration: 6,

      traits: ['Daemonbane', 'Force', 'Power Field', 'Unwieldy'],
      weightInKilos: 14,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'SB added to damage is doubled. Two-handed weapon. Once per game session, as a Full Action, the wielder may strike the ground causing a blast with radius 2d10 metres. Every other character in the area must make a (-20) Agility test or lose a Half Action on their next turn; if they fail with 2+ DoF, they lose a Full Action'
    }
  ],
  [
    'Rune Weapon (Sword)',
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
        'Can take the profile of any Low-Tech weapon and use those stats, losing the Primitive quality (if it was present). Cannot be destroyed by a Power Field weapon. Whenever the wielder triggers Righteous Fury, he gains 1d5 Corruption'
    }
  ],
  [
    'Stealth Claw',
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
        'Comes with the Compact modification. If the wielder successfully executes an All Out Attack, add damage equal to his Psy Rating'
    }
  ],
  [
    'Wailing Trident',
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
        'Two handed weapon. Can be thrown with a range of 6m. When used against a Daemonic target, gains Crippling (3)'
    }
  ],
  [
    'Ebenus Hammer',
    {
      name: 'Ebenus Hammer',
      family: 'Power',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+6',
      damageType: 'Energy',
      armourPenetration: 10,

      traits: ['Daemonbane', 'Power Field', 'Unwieldy'],
      weightInKilos: 16,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'SB added to damage is doubled. Two-handed weapon. Acts as a Null Rod and grants the wielder the Deny the Witch talent.'
    }
  ],
  [
    'Ordo Malleus Power Glaive',
    {
      name: 'Ordo Malleus Power Glaive',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      // rangeInMeters: 3,

      damage: '1d10+8',
      damageType: 'Energy',
      armourPenetration: 5,

      traits: ['Balanced', 'Power Field', 'Proven (4)', 'Sanctified'],
      weightInKilos: 9,
      availability: Availability.VERY_RARE,
      notes: 'Grants the wielder an additional (+10) to Parry. Two-handed weapon.'
    }
  ],
  [
    'Power Shield',
    {
      name: 'Power Shield',
      family: 'Power',
      class: 'Melee',
      isRanged: false,

      damage: '1d10',
      damageType: 'Energy',
      armourPenetration: 1,

      traits: ['Defensive', 'Power Field'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes: 'Adds 4 AP to the Body and Arm using the shield. This stacks with existing armour.'
    }
  ],
  [
    'Thunder Hammer',
    {
      name: 'Thunder Hammer',
      family: 'Power',
      class: 'Melee',
      isRanged: false,

      damage: '2d10+4',
      damageType: 'Energy',
      armourPenetration: 10,

      traits: ['Concussive (2)', 'Power Field', 'Unwieldy'],
      weightInKilos: 16,
      availability: Availability.VERY_RARE,
      notes:
        'SB added to damage is doubled. One-handed, but if used with two hands it deals an additional +2 damage'
    }
  ],
  [
    "Godwyn-De'az Bolt Pistol",
    {
      name: "Godwyn-De'az Bolt Pistol",
      family: 'Bolt',
      class: 'Pistol',
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rangeInMeters: 40,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+5',
      damageType: 'Explosive',
      armourPenetration: 4,
      clipSize: 10,
      reloadInActions: 2,
      traits: ['Tearing'],
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Only available to the Adeptus Sororitas'
    }
  ],
  [
    "Godwyn-De'az Bolter",
    {
      name: "Godwyn-De'az Bolter",
      family: 'Bolt',
      class: 'Basic',
      rangeInMeters: 90,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+5',
      damageType: 'Explosive',
      armourPenetration: 4,
      clipSize: 30,
      reloadInActions: 2,
      traits: ['Tearing'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes: 'Only available to the Adeptus Sororitas'
    }
  ],
  [
    "Godwyn-De'az Heavy Bolter",
    {
      name: "Godwyn-De'az Heavy Bolter",
      family: 'Bolt',
      class: 'Heavy',
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rangeInMeters: 140,
      rateOfFire: {
        single: false,
        full: 6
      },
      damage: '1d10+8',
      damageType: 'Explosive',
      armourPenetration: 5,
      clipSize: 80,
      reloadInActions: 2,
      traits: ['Tearing'],
      weightInKilos: 35,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Only available to the Adeptus Sororitas'
    }
  ],
  [
    "Godwyn-De'az Storm Bolter",
    {
      name: "Godwyn-De'az Storm Bolter",
      family: 'Bolt',
      class: 'Basic',
      rangeInMeters: 80,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 2,
        full: 4
      },
      damage: '1d10+5',
      damageType: 'Explosive',
      armourPenetration: 4,
      clipSize: 60,
      reloadInActions: 2,
      traits: ['Storm', 'Tearing'],
      weightInKilos: 8,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Only available to the Adeptus Sororitas'
    }
  ],
  [
    'Purgatus Crossbow',
    {
      name: 'Purgatus Crossbow',
      family: 'Exotic',
      class: 'Basic',
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rangeInMeters: 50,
      rateOfFire: {
        single: true
      },
      damage: '1d10+5',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 5,
      reloadInActions: 4,

      weightInKilos: 16,
      availability: Availability.RARE,
      notes:
        'Mix of a crossbow and shotgun. May use any crossbow bolts or shotgun shells, in addition to the usual Purgatus Stakes. Damage, penetration, and special qualities are dependant upon ammunition used'
    }
  ],
  [
    'Condemnor',
    {
      name: 'Condemnor',
      family: 'Exotic',
      class: 'Basic',
      rangeInMeters: 100,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 2,
      clipSize: 1,
      reloadInActions: 4,
      traits: ['Accurate'],
      weightInKilos: 8,
      availability: Availability.RARE,
      notes: 'Damage, penetration, and special qualities are dependant upon ammunition used'
    }
  ],
  [
    'Cerberus Heavy Flamer',
    {
      name: 'Cerberus Heavy Flamer',
      family: 'Flame',
      class: 'Heavy',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 3,
      clipSize: 8,
      reloadInActions: 4,
      traits: ['Flame', 'Spray'],
      weightInKilos: 40,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Gorgon Chemical Flamer',
    {
      name: 'Gorgon Chemical Flamer',
      family: 'Flame',
      class: 'Basic',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 2,
      clipSize: 6,
      reloadInActions: 4,
      traits: ['Corrosive', 'Felling (1)', 'Flame', 'Spray', 'Toxic (2)'],
      weightInKilos: 8,
      availability: Availability.VERY_RARE,
      notes: 'Cannot use regular flame ammunition; the fuel is exclusive to the Gorgon'
    }
  ],
  [
    'Hydra Flamer Array',
    {
      name: 'Hydra Flamer Array',
      family: 'Flame',
      class: 'Basic',
      rangeInMeters: 8,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 2,
      clipSize: 10,
      reloadInActions: 4,
      traits: ['Flame', 'Proven (3)', 'Spray'],
      weightInKilos: 10,
      availability: Availability.VERY_RARE,
      notes:
        'Characters gain the Fear (1) trait until the end of combat when they use this weapon. Fires in a 90 degree cone, rather than the normal 30 degree arc for Spray weapons'
    }
  ],
  [
    'Arquebus',
    {
      name: 'Arquebus',
      family: 'Low-Tech',
      class: 'Basic',
      rangeInMeters: 45,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
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
        'Counts as a Heavy weapon when fired with a SB of 3 or lower. Creates Smoke (1) around the firer that lasts for 1d5-1 rounds'
    }
  ],
  [
    'Castigator Heavy Crossbow',
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
        'Whenever this weapon deals damage to a target of Size (5) or smaller, that target is knocked prone. Damage, penetration, and special qualities are dependant upon ammunition used'
    }
  ],
  [
    'Deliverance Light Crossbow',
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
    }
  ],
  [
    "Drake's Claw",
    {
      name: "Drake's Claw",
      family: 'Low-Tech',
      class: 'Heavy',
      rangeInMeters: 200,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10+2',
      damageType: 'Explosive',
      armourPenetration: 2,
      clipSize: 1,
      reloadInActions: NO_RELOAD_NEEDED,
      traits: ['Blast (3)', 'Crippling (1)', 'Inaccurate', 'Primitive (7)', 'Tearing'],
      weightInKilos: 6,
      availability: Availability.RARE,
      notes: 'Single-use rocket launcher'
    }
  ],
  [
    'Flintlock Pistol',
    {
      name: 'Flintlock Pistol',
      family: 'Low-Tech',
      class: 'Pistol',
      rangeInMeters: 15,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
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
      availability: Availability.COMMON,
      notes: 'Counts as a Truncheon when used in melee combat'
    }
  ],
  [
    'Longflame',
    {
      name: 'Longflame',
      family: 'Low-Tech',
      class: 'Heavy',
      rangeInMeters: 200,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: NO_RELOAD_NEEDED,
      traits: ['Blast (4)', 'Flame', 'Inaccurate', 'Primitive (8)'],
      weightInKilos: 6,
      availability: Availability.RARE,
      notes: 'Single-use rocket launcher'
    }
  ],
  [
    'Musket',
    {
      name: 'Musket',
      family: 'Low-Tech',
      class: 'Basic',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 1,
      reloadInActions: 4,
      traits: ['Inaccurate', 'Primitive (8)'],
      weightInKilos: 7,
      availability: Availability.COMMON,
      notes: 'Counts as a Staff when used in melee combat'
    }
  ],
  [
    'Snapper Repeating Rifle',
    {
      name: 'Snapper Repeating Rifle',
      family: 'Low-Tech',
      class: 'Basic',
      rangeInMeters: 50,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+3',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 8,
      reloadInActions: 4,
      traits: ['Inaccurate', 'Overheats', 'Primitive (8)'],
      weightInKilos: 45,
      availability: Availability.VERY_RARE,
      notes:
        'If used as an improvised melee weapon, and the wielder suffers 2+ DoF, its mechanisms snap and it is damaged until repaired'
    }
  ],
  [
    'Sentinel Plasma Rifle',
    {
      name: 'Sentinel Plasma Rifle',
      family: 'Plasma',
      class: 'Basic',
      rangeInMeters: 120,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 5,
        full: 10
      },
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 3,
      clipSize: 40,
      reloadInActions: 2,
      weightInKilos: 20,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Pyschotroke Grenade',
    {
      name: 'Pyschotroke Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (3)', 'Hallucinogenic (4)'],
      weightInKilos: 1,
      availability: Availability.RARE,
      notes:
        'Respirators and sealed armour provide no protection. For every DoF on Toughness test to resist, and +1 to roll on hallucinogenic effect'
    }
  ],
  [
    'Psyk-Out Grenade',
    {
      name: 'Psyk-Out Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '1d10',
      damageType: 'Explosive',
      armourPenetration: 0,
      traits: ['Blast (3)', 'Smoke (3)'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Psykers caught in the blast radius must make a (-30) WP Test or have his PR reduced by 1 per DoF (recover 1 PR per 6 hours) 2 or more DoF results in Psychic Phenomena. Any psy powers used in the field automatically fail.'
    }
  ],
  [
    'Rad Grenade',
    {
      name: 'Rad Grenade',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '1d10',
      damageType: 'Energy',
      armourPenetration: 0,
      traits: ['Blast (2)'],
      weightInKilos: 1,
      availability: Availability.VERY_RARE,
      notes:
        'Characters in the blast radius must make a (-20) Toughness test or suffer 2d10 Toughness Damage'
    }
  ],
  [
    'Spore Bomb',
    {
      name: 'Spore Bomb',
      family: 'Grenade',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (5)'],
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Characters in the blast radius suffer from Mind-Mould (PP 403 CB)'
    }
  ],
  [
    'Tears of the Emperor',
    {
      name: 'Tears of the Emperor',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '1d10',
      damageType: 'Explosive',
      armourPenetration: 0,
      traits: ['Blast (2)', 'Sanctified'],
      weightInKilos: 0,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'Psykers caught in the blast radius must immediately roll for Perils of the Warp. Daemonic entities gain the Warp Instability trait; if they already had it, they suffer -20 to all tests made until the end of combat'
    }
  ],
  [
    'Whitefire Grenade',
    {
      name: 'Whitefire Grenade',
      family: 'Grenade',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '1d10+4',
      damageType: 'Explosive',
      armourPenetration: 3,
      traits: ['Blast (3)', 'Corrosive', 'Flame', 'Smoke (5)', 'Toxic (2)'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Characters who begin their turn in the smoke cloud suffer 1d10 Impact dammage (Corrosive, Toxic (2)) and must test for suffocation'
    }
  ],
  [
    'Firesprite Needler',
    {
      name: 'Firesprite Needler',
      family: 'Exotic',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: false,
        semi: 4,
        full: 8
      },
      damage: '1d10+2',
      damageType: 'Rending',
      armourPenetration: 2,
      clipSize: 16,
      reloadInActions: 4,
      traits: ['Inaccurate', 'Toxic (2)'],
      weightInKilos: 1.5,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Comes with the Compact, Forearm Weapon Mounting, and Silencer modifications'
    }
  ],
  [
    'Ghostblade',
    {
      name: 'Ghostblade',
      family: 'Exotic',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 6,

      traits: ['Felling (4)', 'Razor Sharp', 'Overheats'],
      weightInKilos: 6,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'When this weapon overheats, it is damaged and counts as a regular sword until repaired. Weight includes backpack power supply'
    }
  ],
  [
    'Integration Cannon',
    {
      name: 'Integration Cannon',
      family: 'Exotic',
      class: 'Heavy',
      rangeInMeters: 100,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '4d10+4',
      damageType: 'Impact',
      armourPenetration: 8,
      clipSize: 6,
      reloadInActions: 6,
      traits: ['Blast (5)', 'Concussive (0)', 'Inaccurate'],
      weightInKilos: 65,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'Creates a gravitic anomaly within its blast radius for 1d5 rounds. When a character begins his round in this radius, he must make a (-20) Dodge (Strength) tests. On failure, he is Immobilized and suffers 4d10+4 I damage (pen 8) to a random location'
    }
  ],
  [
    'Graviton Grenade',
    {
      name: 'Graviton Grenade',
      family: 'Exotic (Graviton)',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '1d10+7',
      damageType: 'Impact',
      armourPenetration: 7,
      traits: ['Blast (3)', 'Concussive (3)', 'Graviton'],
      weightInKilos: 1,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Graviton Hammer',
    {
      name: 'Graviton Hammer',
      family: 'Exotic (Graviton)',
      class: 'Melee',
      isRanged: false,
      damage: '2d10+5',
      damageType: 'Impact',
      armourPenetration: 7,
      traits: ['Concussive (3)', 'Graviton'],
      weightInKilos: 8,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Two-handed weapon'
    }
  ],
  [
    'Silver Shield',
    {
      name: 'Silver Shield',
      family: 'Low-Tech',
      class: 'Melee',
      isRanged: false,
      damage: '1d5+1',
      damageType: 'Impact',
      armourPenetration: 1,
      traits: ['Defensive'],
      weightInKilos: 5,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Provides 4 AP to the body and to the arm wielding the shield. This is doubled to 8 AP against Energy damage. Stacks with existing armour'
    }
  ],
  [
    'Desoleum Power Blade',
    {
      name: 'Desoleum Power Blade',
      family: 'Power',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+3',
      damageType: 'Energy',
      armourPenetration: 5,
      traits: ['Power Field'],
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Comes with the Compact modification'
    }
  ],
  [
    'Quillgun',
    {
      name: 'Quillgun',
      family: 'Solid Projectile',
      class: 'Basic',
      rangeInMeters: 120,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true
      },
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      clipSize: 3,
      reloadInActions: 2,
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes:
        'When acquired, comes with 1 clip each of Ataractic and Venerum rounds. Has the Silencer modification'
    }
  ],
  [
    'Digi-Weapon',
    {
      name: 'Digi-Weapon',
      family: 'Varies',
      class: 'Pistol',
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      reloadInActions: 720,
      rangeInMeters: 3,
      rateOfFire: {
        single: true
      },
      damage: '1d10+2',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 1,
      weightInKilos: 0.5,
      availability: Availability.NEAR_UNIQUE,
      notes:
        'Can have the profile of any pistol, taking on that damage, penetration, and weapon qualities. Worn as a ring, and does not prevent the hand from performing other tasks. Does not consume ammo, but does take 1 hour to recharge between shots. Cannot be modified.'
    }
  ],
  [
    'Brazier of Holy Fire',
    {
      name: 'Brazier of Holy Fire',
      family: 'Flame',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 3,
      traits: ['Flame', 'Unbalanced'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes:
        'Allies in sight gain +10 to WP tests. Can be used as a Heavy Flamer with Clip of 1. When fired, it loses its Flame quality until reloaded, which takes 20 min'
    }
  ],
  [
    'Fire Gauntlets',
    {
      name: 'Fire Gauntlets',
      family: 'Flame',
      class: 'Melee',
      isRanged: false,
      damage: '1d10',
      damageType: 'Impact',
      armourPenetration: 2,
      traits: ['Flame', 'Unbalanced'],
      weightInKilos: 1,
      availability: Availability.VERY_RARE,
      notes:
        'As a free action, the user can ignite the gauntlets to gain +20 to Intimidate. This lasts until the end of the encounter, or 2d10 minutes'
    }
  ],
  [
    'Axe of Retribution',
    {
      name: 'Axe of Retribution',
      family: 'Low-Tech',
      class: 'Melee',
      isRanged: false,
      damage: '2d10',
      damageType: 'Rending',
      armourPenetration: 6,
      traits: ['Felling (2)', 'Sanctified'],
      weightInKilos: 8,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Two-handed weapon'
    }
  ],
  [
    'Flail of Chastisement',
    {
      name: 'Flail of Chastisement',
      family: 'Low-Tech',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+8',
      damageType: 'Rending',
      armourPenetration: 2,
      traits: ['Crippling (2)', 'Flexible', 'Primitive (8)', 'Snare (2)'],
      weightInKilos: 3,
      availability: Availability.RARE,
      notes: 'A victim who escapes the Snare is no longer affected by Crippling'
    }
    //@todo check - add reach
  ],
  [
    'Man-Catcher',
    {
      name: 'Man-Catcher',
      family: 'Low-Tech',
      class: 'Melee/Thrown',
      isRanged: true,
      rangeInMeters: 2,
      damage: '1d10',
      damageType: 'Impact',
      armourPenetration: 0,

      traits: ['Snare (4)', 'Unwieldy'],
      weightInKilos: 8,
      availability: Availability.SCARCE,
      notes:
        'Two-handed weapon. Restraining the victim requires a Half Action each round. Best Quality gains the Shocking quality'
    }
  ],
  [
    'Praesidium Protectiva',
    {
      name: 'Praesidium Protectiva',
      family: 'Low-Tech',
      class: 'Melee',
      isRanged: false,

      damage: '1d10',
      damageType: 'Impact',
      armourPenetration: 0,

      traits: ['Defensive'],
      weightInKilos: 14,
      availability: Availability.VERY_RARE,
      notes:
        'Only available to the Adeptus Sororitas. Provides 4 AP to the body and the arm wielding the shield, which stacks with existing armour. Acts as a Force Field with protection rating of 35.'
    }
  ],
  [
    'Power Stake',
    {
      name: 'Power Stake',
      family: 'Power',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+7',
      damageType: 'Energy',
      armourPenetration: 5,

      traits: ['Power Field', 'Sanctified', 'Unbalanced'],
      weightInKilos: 1,
      availability: Availability.VERY_RARE,
      notes:
        'Inflicts an additional 1d10 E damage for every Psy Rating the target possesses. In addition, provides +10 to interaction with the Ordo Hereticus'
    }
  ],
  [
    'Electro-Flail',
    {
      name: 'Electro-Flail',
      family: 'Shock',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+2',
      damageType: 'Rending',
      armourPenetration: 0,

      traits: ['Flexible', 'Shocking'],
      weightInKilos: 4.5,
      availability: Availability.RARE
    }
  ],
  [
    'Agoniser',
    {
      name: 'Agoniser',
      family: 'Xenos (Eldar)',
      class: 'Melee/Thrown',
      isRanged: true,
      rangeInMeters: 3,
      damage: '1d10+3',
      damageType: 'Energy',
      armourPenetration: 6,

      traits: ['Flexible', 'Power Field', 'Tearing', 'Shocking'],
      weightInKilos: 2,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Critical damage inflicted by a Best Quality agoniser reduces his Perception permanently by 1d5'
    }
  ],
  [
    'Eldar Plasma Grenade',
    {
      name: 'Eldar Plasma Grenade',
      family: 'Xenos (Eldar)',
      class: 'Thrown',
      isRanged: true,
      rangeInMeters: 0, //'SBx3',
      damage: '1d10+8',
      damageType: 'Energy',
      armourPenetration: 8,
      traits: ['Blast (4)', 'Shocking'],
      weightInKilos: 0.5,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Eldar Power Sword',
    {
      name: 'Eldar Power Sword',
      family: 'Xenos (Eldar)',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 4,
      traits: ['Balanced', 'Power Field'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    "Harlequin's Kiss",
    {
      name: "Harlequin's Kiss",
      family: 'Xenos (Eldar)',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+8',
      damageType: 'Rending',
      armourPenetration: 10,
      traits: ['Felling (4)', 'Tearing'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE,
      notes: "The user's SB is not added to the damage"
    }
  ],
  [
    'Shardcarbine',
    {
      name: 'Shardcarbine',
      family: 'Xenos (Eldar)',
      class: 'Basic',
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rangeInMeters: 60,
      rateOfFire: {
        single: true,
        semi: 3,
        full: 5
      },
      damage: '1d10+2',
      damageType: 'Rending',
      armourPenetration: 3,
      clipSize: 150,
      reloadInActions: 4,
      traits: ['Storm', 'Toxic (1)'],
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Shuriken Cannon',
    {
      name: 'Shuriken Cannon',
      family: 'Xenos (Eldar)',
      class: 'Heavy',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: false,
        full: 10
      },
      damage: '1d10+6',
      damageType: 'Rending',
      armourPenetration: 4,
      clipSize: 200,
      reloadInActions: 4,
      traits: ['Razor Sharp'],
      weightInKilos: 18,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Grants the Auto-Stabilised Trait when fired'
    }
  ],
  [
    'Shuriken Catapult',
    {
      name: 'Shuriken Catapult',
      family: 'Xenos (Eldar)',
      class: 'Basic',
      rangeInMeters: 80,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 3,
        full: 10
      },
      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 3,
      clipSize: 120,
      reloadInActions: 2,
      traits: ['Razor Sharp'],
      weightInKilos: 2.5,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Shuriken Pistol',
    {
      name: 'Shuriken Pistol',
      family: 'Xenos (Eldar)',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 3,
      clipSize: 60,
      reloadInActions: 2,
      traits: ['Razor Sharp'],
      weightInKilos: 1.2,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Splinter Cannon',
    {
      name: 'Splinter Cannon',
      family: 'Xenos (Eldar)',
      class: 'Heavy',
      rangeInMeters: 110,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: false,

        full: 10
      },
      damage: '1d10+5',
      damageType: 'Rending',
      armourPenetration: 4,
      clipSize: 300,
      reloadInActions: 6,
      traits: ['Tearing', 'Toxic (4)'],
      weightInKilos: 5,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Grants the Auto-Stabilised Trait when fired'
    }
  ],
  [
    'Splinter Pistol',
    {
      name: 'Splinter Pistol',
      family: 'Xenos (Eldar)',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+2',
      damageType: 'Rending',
      armourPenetration: 3,
      clipSize: 120,
      reloadInActions: 4,
      traits: ['Toxic (1)'],
      weightInKilos: 1.5,
      availability: Availability.VERY_RARE,
      notes: 'Counts as a Knife with the Mono weapon modification when used in melee'
    }
  ],
  [
    'Splinter Rifle',
    {
      name: 'Splinter Rifle',
      family: 'Xenos (Eldar)',
      class: 'Basic',
      rangeInMeters: 80,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3,
        full: 5
      },
      damage: '1d10+3',
      damageType: 'Rending',
      armourPenetration: 3,
      clipSize: 180,
      reloadInActions: 4,
      traits: ['Toxic (2)'],
      weightInKilos: 2,
      availability: Availability.EXTREMELY_RARE,
      notes: 'Counts as a Spear with the Mono weapon modification when used in melee'
    }
  ],
  [
    'Big Choppa',
    {
      name: 'Big Choppa',
      family: 'Xenos (Ork)',
      class: 'Melee',
      isRanged: false,

      damage: '2d10',
      damageType: 'Rending',
      armourPenetration: 2,

      traits: ['Tearing', 'Unbalanced'],
      weightInKilos: 10,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Two handed weapon. May be a power weapon; if so, it gains the Power Field and Overheats qualities'
    }
  ],
  [
    'Big Shoota',
    {
      name: 'Big Shoota',
      family: 'Xenos (Ork)',
      class: 'Basic',
      rangeInMeters: 120,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: false,
        full: 10
      },
      damage: '1d10+6',
      damageType: 'Impact',
      armourPenetration: 2,
      clipSize: 60,
      reloadInActions: 4,
      traits: ['Inaccurate'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Burna (Melee Profile)',
    {
      name: 'Burna (Melee Profile)',
      family: 'Xenos (Ork)',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 5,

      traits: ['Power Field', 'Unwieldy'],
      weightInKilos: 8,
      availability: Availability.VERY_RARE,
      notes: 'Can be switched to Ranged Profile as a Free Action. Two-handed weapon'
    }
  ],
  [
    'Burna (Ranged Profile)',
    {
      name: 'Burna (Ranged Profile)',
      family: 'Xenos (Ork)',
      class: 'Basic',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+4',
      damageType: 'Energy',
      armourPenetration: 2,
      clipSize: 6,
      reloadInActions: 2,
      traits: ['Flame', 'Spray'],
      weightInKilos: 8,
      availability: Availability.VERY_RARE,
      notes: 'Can be switched to Melee Profile as a Free Action. Two-handed weapon'
    }
  ],
  [
    'Choppa',
    {
      name: 'Choppa',
      family: 'Xenos (Ork)',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+1',
      damageType: 'Impact',
      armourPenetration: 2,

      traits: ['Unbalanced'],
      weightInKilos: 1,
      availability: Availability.RARE,
      notes: 'Two handed for a non-ork with SB of 3 or less'
    }
  ],
  [
    'Rokkit Launcha',
    {
      name: 'Rokkit Launcha',
      family: 'Xenos (Ork)',
      class: 'Basic',
      rangeInMeters: 150,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '2d10+5',
      damageType: 'Explosive',
      armourPenetration: 6,
      clipSize: 1,
      reloadInActions: 1,
      traits: ['Blast (2)', 'Inaccurate'],
      weightInKilos: 6,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Shoota',
    {
      name: 'Shoota',
      family: 'Xenos (Ork)',
      class: 'Basic',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 30,
      reloadInActions: 2,
      traits: ['Inaccurate'],
      weightInKilos: 4,
      availability: Availability.RARE
    }
  ],
  [
    'Slugga',
    {
      name: 'Slugga',
      family: 'Xenos (Ork)',
      class: 'Pistol',
      rangeInMeters: 20,
      isRanged: true,
      weaponJamOn: WeaponJam.UNRELIABLE,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '1d10+4',
      damageType: 'Impact',
      armourPenetration: 0,
      clipSize: 18,
      reloadInActions: 2,
      traits: ['Inaccurate'],
      weightInKilos: 2,
      availability: Availability.RARE
    }
  ],
  [
    'Stikkbomb',
    {
      name: 'Stikkbomb',
      family: 'Xenos (Ork)',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      // weaponJamOn: WeaponJam.UNRELIABLE
      damage: '2d10+5',
      damageType: 'Explosive',
      armourPenetration: 2,
      traits: ['Blast (2)', 'Unreliable'],
      weightInKilos: 1,
      availability: Availability.RARE,
      notes:
        'Counts as a truncheon when used in melee combat. If a character does so, and fails their WS test with 3+ DoF, the Stikkbomb immediately detonates'
    }
  ],
  [
    'Kroot Rifle Pulse Rounds',
    {
      name: 'Kroot Rifle Pulse Rounds',
      family: 'Xenos (Kroot)',
      class: 'Basic',
      rangeInMeters: 110,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      damage: '1d10+5',
      damageType: 'Energy',
      armourPenetration: 1,
      rateOfFire: {
        single: true,
        semi: 2
      },
      clipSize: 6,
      reloadInActions: 4,
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes:
        'Counts as a Staff with the Mono quality in melee combat. Can use either Pulse Rounds (RoF: S/2/-, 1d10+5E, Pen 1, Clip 6, Reload 2 Full) or Sniper Rounds (RoF: S/-/-, 1d10+7R, Pen 5, Clip 1, Reload Half, Accurate).'
    }
  ],
  [
    'Kroot Rifle Sniper Rounds',
    {
      name: 'Kroot Rifle Sniper Rounds',
      family: 'Xenos (Kroot)',
      class: 'Basic',
      rangeInMeters: 110,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      damage: '1d10+7',
      damageType: 'Rending',
      armourPenetration: 5,
      rateOfFire: {
        single: true
      },
      clipSize: 1,
      reloadInActions: 1,
      weightInKilos: 6,
      availability: Availability.VERY_RARE,
      notes:
        'Counts as a Staff with the Mono quality in melee combat. Can use either Pulse Rounds (RoF: S/2/-, 1d10+5E, Pen 1, Clip 6, Reload 2 Full) or Sniper Rounds (RoF: S/-/-, 1d10+7R, Pen 5, Clip 1, Reload Half, Accurate).'
    }
  ],
  [
    'Photon Grenade',
    {
      name: 'Photon Grenade',
      family: 'Xenos (Kroot)',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '0d0',
      damageType: 'Special',
      armourPenetration: 0,
      traits: ['Blast (12)'],
      weightInKilos: 0.5,
      availability: Availability.VERY_RARE,
      notes:
        'A character in the blast radius without eye protection makes a (+0) Agility test or is blinded for rounds equal to DoF'
    }
  ],
  [
    'Pulse Carbine',
    {
      name: 'Pulse Carbine',
      family: 'Xenos (Kroot)',
      class: 'Basic',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        full: 3
      },
      damage: '2d10+2',
      damageType: 'Energy',
      armourPenetration: 4,
      clipSize: 24,
      reloadInActions: 2,
      weightInKilos: 6,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Comes with an integrated grenade launcher, capable of firing Photon Grenades with a range of 60m, clip of 1, reload of Half'
    }
  ],
  [
    'Pulse Pistol',
    {
      name: 'Pulse Pistol',
      family: 'Xenos (Kroot)',
      class: 'Pistol',
      rangeInMeters: 40,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '2d10+2',
      damageType: 'Energy',
      armourPenetration: 4,
      clipSize: 16,
      reloadInActions: 1,
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Pulse Rifle',
    {
      name: 'Pulse Rifle',
      family: 'Xenos (Kroot)',
      class: 'Basic',
      rangeInMeters: 150,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 2,
        full: 4
      },
      damage: '2d10+3',
      damageType: 'Energy',
      armourPenetration: 4,
      clipSize: 36,
      reloadInActions: 1,
      weightInKilos: 8,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Ablative Projector',
    {
      name: 'Ablative Projector',
      family: 'Xenos (Necron)',
      class: 'Basic',
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      clipSize: NO_CLIP_SIZE_LIMIT, //infinity
      reloadInActions: NO_RELOAD_NEEDED,
      rangeInMeters: 100,
      rateOfFire: {
        single: true,
        semi: 2
      },
      damage: '1d10+8',
      damageType: 'Energy',
      armourPenetration: 5,

      traits: ['Vengeful (9)'],
      weightInKilos: 10,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Cascade Lance (Melee)',
    {
      name: 'Cascade Lance (Melee)',
      family: 'Xenos (Necron)',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+6',
      damageType: 'Energy',
      armourPenetration: 8,

      traits: ['Concussive (1)', 'Power Field'],
      weightInKilos: 6,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Can be switched to Ranged Profile as a Free Action. Two-handed weapon'
    }
  ],
  [
    'Cascade Lance (Ranged)',
    {
      name: 'Cascade Lance (Ranged)',
      family: 'Xenos (Necron)',
      class: 'Basic',
      rangeInMeters: 15,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '1d10+12',
      damageType: 'Energy',
      armourPenetration: 10,
      clipSize: 1,
      reloadInActions: 1,
      traits: ['Proven (5)'],
      weightInKilos: 6,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Can be switched to melee Profile as a Free Action.'
    }
  ],
  [
    'Concussion Beamer',
    {
      name: 'Concussion Beamer',
      family: 'Xenos (Necron)',
      class: 'Pistol',
      rangeInMeters: 30,
      isRanged: true,
      clipSize: NO_CLIP_SIZE_LIMIT, //infinity
      reloadInActions: NO_RELOAD_NEEDED,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true,
        semi: 3
      },
      damage: '2d10+5',
      damageType: 'Explosive',
      armourPenetration: 4,

      traits: ['Concussive (1)'],
      weightInKilos: 6,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Molecular Blade',
    {
      name: 'Molecular Blade',
      family: 'Xenos (Necron)',
      class: 'Melee',
      isRanged: false,

      damage: '1d10',
      damageType: 'Rending',
      armourPenetration: 5,

      traits: ['Corrosive', 'Razor Sharp', 'Tearing'],
      weightInKilos: 15,
      availability: Availability.NEAR_UNIQUE
    }
  ],
  [
    'Resonance Arc',
    {
      name: 'Resonance Arc',
      family: 'Xenos (Necron)',
      class: 'Basic',
      rangeInMeters: 75,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      clipSize: NO_CLIP_SIZE_LIMIT, //infinity
      reloadInActions: NO_RELOAD_NEEDED,
      rateOfFire: {
        single: true
      },
      damage: '2d10+3',
      damageType: 'Energy',
      armourPenetration: 3,
      traits: ['Shocking'],
      weightInKilos: 20,
      availability: Availability.EXTREMELY_RARE,
      notes:
        "When the user rolls a 9 or 10 for damage, or kills a target, a bolt of electricity arcs from the original target to a randomly-selected target within 5 metres, inflicting an additional automatic hit with the weapon's profile on the Body. This can continue to leap if the additional hits roll a 9 or 10 for damage, or if the target dies"
    }
  ],
  [
    'Akvran Cutter',
    {
      name: 'Akvran Cutter',
      family: 'Xenos (Lost Races)',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '2d10',
      damageType: 'Energy',
      armourPenetration: 6,
      traits: ['Blast (3)', 'Concussive (3)', 'Proven (4)'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE
    }
  ],
  [
    'Guldaniri Bile Projector',
    {
      name: 'Guldaniri Bile Projector',
      family: 'Xenos (Lost Races)',
      class: 'Basic',
      rangeInMeters: 60,
      isRanged: true,
      weaponJamOn: WeaponJam.RELIABLE,
      rateOfFire: {
        single: true
      },
      damage: '3d10',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 10,
      reloadInActions: 6,
      traits: ['Blast (2)', 'Corrosive', 'Toxic (2)'],
      weightInKilos: 11,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Havatian Ringblade (Melee)',
    {
      name: 'Havatian Ringblade (Melee)',
      family: 'Xenos (Lost Races)',
      class: 'Melee',
      isRanged: false,
      damage: '1d10+4',
      damageType: 'Rending',
      armourPenetration: 3,
      traits: ['Razor Sharp'],
      weightInKilos: 1,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Can be used as a grenade, which explodes and is destroyed on impact. Dam: 1d10+6 X, Pen: 6, Blast (2), Corrosive'
    }
  ],
  [
    'Kyaire Riveblade Grenade',
    {
      name: 'Kyaire Riveblade Grenade',
      family: 'Xenos (Lost Races)',
      class: 'Thrown',
      rangeInMeters: 0, //'SBx3',
      isRanged: true,
      damage: '1d10+6',
      damageType: 'Rending',
      armourPenetration: 10,
      traits: ['Razor Sharp'],
      weightInKilos: 1,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Neural Catalyser',
    {
      name: 'Neural Catalyser',
      family: 'Xenos (Lost Races)',
      class: 'Pistol',
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rangeInMeters: 35,
      rateOfFire: {
        single: true
      },
      clipSize: NO_CLIP_SIZE_LIMIT, //infinity,
      reloadInActions: NO_RELOAD_NEEDED,
      damage: '2d10',
      damageType: 'Explosive',
      armourPenetration: 0,
      traits: ['Concussive (3)', 'Overheats'],
      weightInKilos: 3,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Ignores armour and is reduced by WPB rather than TB. If a hit inflicts damage, the target also suffers 1d5 WP Damage'
    }
  ],
  [
    'Talonblade',
    {
      name: 'Talonblade',
      family: 'Xenos (Lost Races)',
      class: 'Melee',
      isRanged: false,

      damage: '1d10+3',
      damageType: 'Rending',
      armourPenetration: 4,

      traits: ['Razor Sharp', 'Tearing'],
      weightInKilos: 1,
      availability: Availability.VERY_RARE
    }
  ],
  [
    'Xenarch Death-Arc',
    {
      name: 'Xenarch Death-Arc',
      family: 'Xenos (Lost Races)',
      class: 'Basic',
      rangeInMeters: 100,
      isRanged: true,
      weaponJamOn: WeaponJam.STANDARD,
      rateOfFire: {
        single: true,
        semi: 3,
        full: 6
      },
      damage: '1d10+3',
      damageType: 'Energy',
      armourPenetration: 0,
      clipSize: 90,
      reloadInActions: 2,
      traits: ['Inaccurate', 'Shocking'],
      weightInKilos: 10,
      availability: Availability.VERY_RARE,
      notes:
        'Rather than acting like a normal semi-/full-auto weapon, additional hits are resolved against the original body part hit'
    }
  ]
]);
