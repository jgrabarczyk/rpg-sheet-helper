type TraitValue = number | 'X';
export type WeaponTraitKey =
  | 'Accurate'
  | 'Balanced'
  | `Blast (${TraitValue})`
  | `Concussive (${TraitValue})`
  | 'Flame'
  | 'Corrosive'
  | 'Daemonbane'
  | `Felling (${TraitValue})`
  | 'Razor Sharp'
  | 'Sanctified'
  | 'Flexible'
  | 'Graviton'
  | 'Inaccurate'
  | 'Overheats'
  | 'Power Field'
  | 'Force'
  | 'Maximal'
  | 'Lance'
  | 'Recharge'
  | 'Melta'
  | `Hallucinogenic (${TraitValue})`
  | `Haywire (${TraitValue})`
  | `Indirect (${TraitValue})`
  | `Primitive (${TraitValue})`
  | `Crippling (${TraitValue})`
  | 'Reliable'
  | 'Shocking'
  | 'Tearing'
  | 'Unbalanced'
  | `Smoke (${TraitValue})`
  | `Snare (${TraitValue})`
  | 'Spray'
  | 'Scatter'
  | 'Storm'
  | `Proven (${TraitValue})`
  | `Toxic (${TraitValue})`
  | 'Twin-linked'
  | 'Unreliable'
  | 'Unwieldy'
  | 'Two-Handed'
  | 'Defensive'
  | 'Tainted'
  | 'One Use'
  | `Vengeful (${TraitValue})`
  | 'Warp Weapon';
//   | string  | add for homebrew;

// Główna definicja jednego traita broni
export interface WeaponTrait {
  name: WeaponTraitKey; // Nazwa cechy, np. "Tearing"
  description: string; // Opcjonalny opis (dla UI, tooltipów itp.)
}

export const WEAPON_TRAITS: WeaponTrait[] = [
  {
    name: 'Accurate',
    description:
      'Grants +10 Bonus to hit if used with Aim, Basic weapons add +1d10 damage per two extra DoS (max +2d10) when firing a single shot (pg 145).'
  },
  {
    name: 'Balanced',
    description:
      'Grants +10 Bonus to Parry skill when using this weapon. This bonus is only gained from one Balanced weapon, even if wielding multiple.'
  },
  {
    name: 'Blast (X)',
    description:
      "All within the weapon's blast radius in metres are hit. Roll Hit Location and damage individually for each character affected."
  },
  {
    name: 'Concussive (X)',
    description:
      "Target must pass Toughness test with penalty equal to 10 times (X) or be Stunned for 1 round per DoF. If the attack did more damage than the target's Strength Bonus, it is knocked Prone."
  },
  {
    name: 'Corrosive',
    description:
      'Permanently reduces Armour points in Hit Location by 1d10. Excess AP damage is dealt as damage to character. This AP damage is permanent until repaired with a Challenging (+0) Tech-Use test, or for free by a character with the Armour Monger talent.'
  },
  {
    name: 'Crippling (X)',
    description:
      'If the target suffers at least 1 wound from a Crippling weapon, they are Crippled for the rest of combat. A Crippled character who takes more than a Half Action on his turn suffers (X) Rending damage to the original hit location. This damage bypasses Armour and Toughness.'
  },
  {
    name: 'Daemonbane',
    description:
      "Weapon gain the Vengeful (8) quality and their damage is not reduced by the target's Toughness bonus when attacking Daemons."
  },
  {
    name: 'Defensive',
    description: 'Grants +15 bonus to Parry and -10 penalty to hit when using this weapon. Add 2 Armour Points On Trunk And Hand in which is wielded'
  },
  {
    name: 'Felling (X)',
    description:
      "Weapon reduces a target's Unnatural Toughness bonus by (X) when calculating damage from this weapon."
  },
  {
    name: 'Flame',
    description:
      'Target must make an Agility test or be set on fire, even if they take no damage from the attack.'
  },
  {
    name: 'Flexible',
    description: 'This weapon cannot be parried, but can be used to parry attacks.'
  },
  { name: 'Force', description: 'Normal weapon unless wielded by a psyker (see CB p. 145).' },
  {
    name: 'Graviton',
    description: 'Weapon inflicts additional damage equal to AP on Hit Location.'
  },
  {
    name: 'Hallucinogenic (X)',
    description:
      'Target must make a Toughness test with penalty of 10x(X). Upon failure, they roll 1d10 on Table 5-3 (CB p. 146). This effect lasts for 1 round, plus 1 additional round per DoF.'
  },
  {
    name: 'Haywire (X)',
    description:
      'Weapon generates a Haywire field with radius (X). Roll 1d10 on Table 5-4 (CB p. 147).'
  },
  { name: 'Inaccurate', description: 'Weapon gains no bonus from Aiming.' },
  {
    name: 'Indirect (X)',
    description:
      'Weapon can fire at targets out of line of sight at a -10 penalty. Shots scatter Xd10 metres (see CB p. 147).'
  },
  { name: 'Lance', description: 'Weapon increases its Penetration to (1+DoS)xPen.' },
  {
    name: 'Maximal',
    description:
      'Weapon may be switched to Maximal fire mode as a free action. Adds 10m range, 1d10 damage, +2 Pen, and +2 Blast if present. Consumes 3x ammo and gains Recharge.'
  },
  {
    name: 'Melta',
    description:
      'Weapon doubles its Pen when firing at Short Range (half or less of max range of weapon).'
  },
  {
    name: 'Overheats',
    description:
      "Attack roll of 91+ causes Overheat. Wielder takes Energy damage with Pen 0 to their arm. Weapon can't be fired next round. Overheat weapons do not Jam."
  },
  {
    name: 'Power Field',
    description:
      'When used to Parry a weapon without Power Field, roll 1d100. On 26+, attacking weapon is destroyed. Some weapons are immune.'
  },
  {
    name: 'Primitive (X)',
    description:
      "Weapon's damage dice never count as rolling higher than (X). Natural 10 still triggers Righteous Fury."
  },
  {
    name: 'Proven (X)',
    description: "Weapon's damage dice never count as rolling lower than (X)."
  },
  { name: 'Razor Sharp', description: 'If attack results in 3+ DoS, double weapon Pen.' },
  { name: 'Recharge', description: 'When fired, cannot be fired again in the next round.' },
  {
    name: 'Reliable',
    description:
      "Weapon only jams on unmodified roll of 100. Weapons that don't roll to hit don't jam."
  },
  {
    name: 'Sanctified',
    description: 'This weapon deals Holy damage to Daemonic and Warp creatures.'
  },
  {
    name: 'Scatter',
    description:
      'At Point Blank (≤2m), +10 to hit and +3 damage. At Short Range (≤half range), +10 to hit. Beyond Short, -3 damage.'
  },
  {
    name: 'Shocking',
    description:
      'If damage is dealt, target must pass Challenging (+0) Toughness test or be Stunned for rounds equal to DoF.'
  },
  {
    name: 'Smoke (X)',
    description: 'Creates smoke cloud with radius of (X) metres lasting 1d10+10 rounds.'
  },
  {
    name: 'Snare (X)',
    description:
      'Target must pass Agility test with -10x(X) penalty or be immobilised. They are Helpless until they escape.'
  },
  {
    name: 'Spray',
    description:
      'Projects a 30° arc cone to weapon range. No roll to hit; targets must pass Challenging (+0) Agility test or be struck.'
  },
  { name: 'Storm', description: 'Double number of hits inflicted on target (and ammo expended).' },
  {
    name: 'Tainted',
    description:
      "Weapons inflict extra damage equal to user's Corruption Bonus or Daemonic (X) trait (whichever is higher)."
  },
  { name: 'Tearing', description: 'Roll one extra die for damage, discard the lowest.' },
  {
    name: 'Toxic (X)',
    description:
      'Targets damaged must pass Toughness test with -10x(X) or suffer 1d10 additional damage of same type.'
  },
  {
    name: 'Twin-linked',
    description:
      'Grants +20 Bonus to hit, doubles ammo use and reload time. Two or more DoS inflicts 1 additional hit.'
  },
  { name: 'Unbalanced', description: '-10 to Parry, cannot make Lightning Attacks.' },
  { name: 'Unreliable', description: 'Weapon jams on roll of 91+ even in Semi-/Full-Auto.' },
  { name: 'Unwieldy', description: 'Cannot Parry or make Lightning Attacks.' },
  { name: 'Vengeful (X)', description: 'Inflicts Righteous Fury on damage rolls of X or higher.' }
];
