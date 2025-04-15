import { Availability } from '../accessibility-modifiers';

/**
 * @todo add usedWith
 */
export type WeaponModification = {
  name: string;
  weightInKilo: number;
  availability: Availability;
  description: string;
  upgrades: string;
};

export const weaponModifications: Map<string, WeaponModification> = new Map([
  [
    'Auxiliary Grenade Launcher',
    {
      name: 'Auxiliary Grenade Launcher',
      weightInKilo: 2.5,
      availability: Availability.RARE,
      description:
        "Can fire either the launcher or the weapon it's attached to, but not both. Range of 45 meters with Damg and Pen of the loaded grenade, and can be fired Indirectly. Cannot reload during combat.",
      upgrades: 'Any Las, Solid Projectile, or Bolt weapons of the Basic class'
    }
  ],
  [
    'Backpack Ammo Supply',
    {
      name: 'Backpack Ammo Supply',
      weightInKilo: 15,
      availability: Availability.SCARCE,
      description:
        'Increases the clip size of the weapon to five times its current clip size, but it cannot be reloaded in combat.',
      upgrades: 'Any Bolt, Flame, Las, Melta, Plasma, and Solid Projectile weapon.'
    }
  ],
  [
    'Compact',
    {
      name: 'Compact',
      weightInKilo: 0.5, // This was x1/2, so converted to weight adjustment of half.
      availability: Availability.AVERAGE,
      description:
        'Halves the weight, Clip size, and range and reduces damage by 1. -20 to attempt to find.',
      upgrades:
        'Any Pistol or any Las, Solid Projectile, Flame, Bolt, or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Custom Grip',
    {
      name: 'Custom Grip',
      weightInKilo: 0,
      availability: Availability.RARE,
      description: 'Grants +5 to any BS or WS for owner and -5 of all others.',
      upgrades: 'Any weapon'
    }
  ],
  [
    'Deactivated Safety Features',
    {
      name: 'Deactivated Safety Features',
      weightInKilo: 0,
      availability: Availability.RARE,
      description: 'May Ready another weapon or draw another item as part of the same action.',
      upgrades: 'Any weapon'
    }
  ],
  [
    'Expanded Magazine',
    {
      name: 'Expanded Magazine',
      weightInKilo: 1,
      availability: Availability.SCARCE,
      description: 'Increases clip size by half (rounded up)',
      upgrades: 'Ranged weapons'
    }
  ],
  [
    'Exterminator',
    {
      name: 'Exterminator',
      weightInKilo: 1,
      availability: Availability.COMMON,
      description:
        'Rather than firing the weapon as normal, can use as a half action. Counts as a Standard Attack with a flamer.',
      upgrades: 'Any weapon except Pistol or Thrown.'
    }
  ],
  [
    'Fire Selector',
    {
      name: 'Fire Selector',
      weightInKilo: 1,
      availability: Availability.RARE,
      description: "Swap ammo types without reloading. Can hold 3 different ammo's.",
      upgrades: 'Any Bolt, Launcher, and Solid Projectile weapon of the Pistol or Basic class.'
    }
  ],
  [
    'Fluid Action',
    {
      name: 'Fluid Action',
      weightInKilo: 0,
      availability: Availability.RARE,
      description:
        'When using Semi-Auto Burst, counts as scoring one additional DoS. Also reload increased by Half Action.',
      upgrades: 'Any ranged weapon capable of Semi-Automatic fire.'
    }
  ],
  [
    'Forearm Weapon Mounting',
    {
      name: 'Forearm Weapon Mounting',
      weightInKilo: 1,
      availability: Availability.SCARCE,
      description:
        'Allows the user to keep both hands free while using the weapon. Upgrade reduces range by 1/3.',
      upgrades: 'Any Las, Low-Tech, Solid Projectile, Bolt, or Melta of the Pistol class.'
    }
  ],
  [
    'Melee Attachment',
    {
      name: 'Melee Attachment',
      weightInKilo: 2,
      availability: Availability.PLENTIFUL,
      description: 'The ranged weapon counts as a spear when used in melee combat.',
      upgrades: 'Any Basic ranged weapon.'
    }
  ],
  [
    'Modified Stock',
    {
      name: 'Modified Stock',
      weightInKilo: 0,
      availability: Availability.SCARCE,
      description: 'Gains +2 bonus on a Half Aim or +4 bonus for a Full Aim.',
      upgrades: 'Any Weapon'
    }
  ],
  [
    'Mono',
    {
      name: 'Mono',
      weightInKilo: 0,
      availability: Availability.SCARCE,
      description:
        'Loses the Primitive quality (if it had it) and has its penetration increased by 2. No effect when power field is active.',
      upgrades: 'Any Low-Tech or Power Melee weapon.'
    }
  ],
  [
    'Motion Predictor',
    {
      name: 'Motion Predictor',
      weightInKilo: 0.5,
      availability: Availability.VERY_RARE,
      description: 'Gains +10 BS to Semi-Auto Burst or Full Auto.',
      upgrades: 'Any Ranged weapon (except Low-Tech) Capable of Semi-Auto or Full Auto.'
    }
  ],
  [
    'Omni-Scope',
    {
      name: 'Omni-Scope',
      weightInKilo: 2,
      availability: Availability.VERY_RARE,
      description:
        'Combines the benefits of a preysense sight, red-dot laser sight, and telescopic sight.',
      upgrades:
        'Any ranged Las, Solid Projectile, Bolt, Low-Tech or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Photo Sight',
    {
      name: 'Photo Sight',
      weightInKilo: 0.5,
      availability: Availability.VERY_RARE,
      description: 'No penalties due to darkness.',
      upgrades:
        'Any ranged Las, Solid Projectile, Bolt, Low-Tech or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Pistol Grip',
    {
      name: 'Pistol Grip',
      weightInKilo: 0,
      availability: Availability.RARE,
      description: 'Can be wielded in one hand without -20 penalty. Range is halved.',
      upgrades: 'Any Basic ranged weapon.'
    }
  ],
  [
    'Preysense Sight',
    {
      name: 'Preysense Sight',
      weightInKilo: 0.5,
      availability: Availability.VERY_RARE,
      description:
        'Suffers no penalties due to darkness and gains a +20 bonus to vision-based Perception tests in the dark.',
      upgrades:
        'Any ranged Las, Solid Projectile, Bolt, Low-Tech or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Quick-Release',
    {
      name: 'Quick-Release',
      weightInKilo: 0,
      availability: Availability.RARE,
      description: 'The weapon reduced by a Half Action, to a minimum of a Half Action.',
      upgrades: 'Any ranged weapon.'
    }
  ],
  [
    'Red-Dot Laser Sight',
    {
      name: 'Red-Dot Laser Sight',
      weightInKilo: 0.5,
      availability: Availability.SCARCE,
      description: 'Gains +10 to BS when firing a single shot.',
      upgrades:
        'Any ranged Las, Solid Projectile, Bolt, Low-Tech or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Reinforced',
    {
      name: 'Reinforced',
      weightInKilo: 0.2,
      availability: Availability.SCARCE,
      description:
        'Weapon weight increased by 20%. Ranged weapons receives +1 bonus to damage when used as an improvised weapon. Only destroyed on a result of 41 or higher when Parried by a weapon with the Power Field quality.',
      upgrades: 'Any Weapon'
    }
  ],
  [
    'Sacred Inscriptions',
    {
      name: 'Sacred Inscriptions',
      weightInKilo: 0,
      availability: Availability.SCARCE,
      description: 'Gains a +10 bonus to Pinning tests.',
      upgrades: 'Any Weapon'
    }
  ],
  [
    'Silencer',
    {
      name: 'Silencer',
      weightInKilo: 0.5,
      availability: Availability.PLENTIFUL,
      description:
        'Tests to hear shots made suffer -20 and can only attempt at half the normal distance.',
      upgrades: 'Any Solid Projectile weapon of the Basic or Pistol class.'
    }
  ],
  [
    'Suspensors',
    {
      name: 'Suspensors',
      weightInKilo: 0.5, // This was x1/2, so it should be treated as a weight halving effect.
      availability: Availability.EXTREMELY_RARE,
      description:
        'Counts as having the Auto-stabilized trait and so always counts as being braced.',
      upgrades: 'Any Heavy Weapon'
    }
  ],
  [
    'Targeter',
    {
      name: 'Targeter',
      weightInKilo: 1.5,
      availability: Availability.RARE,
      description:
        'If there is a final penalty to a BS test when using a weapon with a targeter, it is reduced by ten.',
      upgrades: 'Any Las, Solid Projectile, Bolt, or Heavy weapon.'
    }
  ],
  [
    'Telescopic Sight',
    {
      name: 'Telescopic Sight',
      weightInKilo: 1,
      availability: Availability.AVERAGE,
      description:
        'Ignores penalties for Long and Extreme range, as long as the shooter is benefitting from a Full Action to Aim.',
      upgrades:
        'Any ranged Las, Solid Projectile, Bolt, Low-Tech or Plasma weapon of the Basic class.'
    }
  ],
  [
    'Tox Dispenser',
    {
      name: 'Tox Dispenser',
      weightInKilo: 0.75,
      availability: Availability.RARE,
      description:
        'Gain the Toxic (2) quality for one round. A tox dispenser can be used 10 times before requiring refilling.',
      upgrades: 'Any Low-Tech or Chain Melee Weapon'
    }
  ],
  [
    'Tripod/Bipod',
    {
      name: 'Tripod/Bipod',
      weightInKilo: 2,
      availability: Availability.AVERAGE,
      description:
        'Bipods and tripods allow a weapon to be braced anywhere there is a reasonably flat surface. A weapon braced on a bipod has a 90-degree fire arc, while one on a tripod has a 180-degree arc.',
      upgrades: 'Any Basic or Heavy weapon.'
    }
  ],
  [
    'Vox-Operated',
    {
      name: 'Vox-Operated',
      weightInKilo: 0.5,
      availability: Availability.RARE,
      description:
        'With spoken commands, the operator can fire his gun, switch firing modes, and also change ammunition (should it be fitted with a fire selector).',
      upgrades: 'Any Pistol, Basic, Launcher, or Heavy weapon that is not of the Low-Tech type.'
    }
  ]
]);
