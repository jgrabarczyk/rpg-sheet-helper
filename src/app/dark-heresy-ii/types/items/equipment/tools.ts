import { Availability } from '../accessibility-modifiers';
import { GenericItem } from '../generic-item';

export const TOOLS: Map<string, GenericItem> = new Map([
  [
    'Scanner',
    {
      name: 'Scanner',
      weightInKilos: 0.5,
      availability: Availability.SCARCE,
      notes:
        'Grants +20 to awareness tests and counts as a Free Action once per turn. With Tech-Use can see through walls less than 50 cm, has a range of 50 meters.',
    },
  ],
  [
    'Auspex',
    {
      name: 'Auspex',
      weightInKilos: 0.5,
      availability: Availability.SCARCE,
      notes:
        'Grants +20 to awareness tests and counts as a Free Action once per turn. With Tech-Use can see through walls less than 50 cm, has a range of 50 meters.',
    },
  ],
  [
    'Auto Quill',
    {
      name: 'Auto Quill',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: 'Grants +10 to recording data',
    },
  ],
  [
    'Clip/Drop Harness',
    {
      name: 'Clip/Drop Harness',
      weightInKilos: 2,
      availability: Availability.COMMON,
      notes: 'Grants +30 to Climb tests and cannot fall if failed',
    },
  ],
  [
    'Combi-tool',
    {
      name: 'Combi-tool',
      weightInKilos: 1,
      availability: Availability.RARE,
      notes: 'Grants +10 to Tech-Use',
    },
  ],
  [
    'Comm Leech',
    {
      name: 'Comm Leech',
      weightInKilos: 1,
      availability: Availability.VERY_RARE,
      notes:
        'Can hack a transmission with Tech-Use. Usable for minutes equal to Degrees of Success',
    },
  ],
  [
    'Dataslate',
    {
      name: 'Dataslate',
      weightInKilos: 0.5,
      availability: Availability.COMMON,
      notes: "Used for data storage and communication - it's a tablet",
    },
  ],
  [
    'Demolition Kit',
    {
      name: 'Demolition Kit',
      weightInKilos: 4,
      availability: Availability.VERY_RARE,
      notes:
        'Allows for setup of demo devices. Contains: Five demolition charges (count as Krak Grenades), 100 meter det-cord (burns at 10 sec per meter), and pressure detonator.',
    },
  ],
  [
    'Diagnostor',
    {
      name: 'Diagnostor',
      weightInKilos: 4,
      availability: Availability.RARE,
      notes:
        'Grants +20 to Medicae or Perception to determine proper treatment',
    },
  ],
  [
    'Disguise Kit',
    {
      name: 'Disguise Kit',
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Make you look like someone else. +10 to deceive tests',
    },
  ],
  [
    'Excruciator Kit',
    {
      name: 'Excruciator Kit',
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes: 'Grants +20 to Interrogation tests.',
    },
  ],
  [
    'Field Suture',
    {
      name: 'Field Suture',
      weightInKilos: 0.5,
      availability: Availability.AVERAGE,
      notes: 'Provides +30 to Medicae tests to stop Blood Loss',
    },
  ],
  [
    'Glow-globe/stab light',
    {
      name: 'Glow-globe/stab light',
      weightInKilos: 0.5,
      availability: Availability.ABUNDANT,
      notes:
        'Glow-globe projects light in a 12m radius - stab-light projects a narrow beam 24m. Lasts 5 hours',
    },
  ],
  [
    'Grapnel and Line',
    {
      name: 'Grapnel and Line',
      weightInKilos: 2,
      availability: Availability.COMMON,
      notes:
        'A Clip-harness and Gas powered pistol to shoot a hook and line 100 m away.',
    },
  ],
  [
    'Grav Chute',
    {
      name: 'Grav Chute',
      weightInKilos: 15,
      availability: Availability.RARE,
      notes:
        'Pass a Challenging (+0) Agility or Routine (+20) Operate (Aeronautica) test for safe landing. Otherwise, takes fall damage as if falling 2m per DoF.',
    },
  ],
  [
    'Hand-Held Targeter',
    {
      name: 'Hand-Held Targeter',
      weightInKilos: 0.5,
      availability: Availability.SCARCE,
      notes:
        'Grants +20 to next Ballistic Skill check when using weapons with Indirect quality.',
    },
  ],
  [
    'Inhaler/Injector',
    {
      name: 'Inhaler/Injector',
      weightInKilos: 0.5,
      availability: Availability.COMMON,
      notes: 'Holds drugs that can be administered as a Half Action.',
    },
  ],
  [
    'Lascutter',
    {
      name: 'Lascutter',
      weightInKilos: 4,
      availability: Availability.AVERAGE,
      notes:
        'Cuts or welds 10 cm of metal and counts as a Heavy weapon on targets within 2 meters.',
    },
  ],
  [
    'Laud Hailer',
    {
      name: 'Laud Hailer',
      weightInKilos: 4,
      availability: Availability.SCARCE,
      notes: 'Amplifies normal speech levels to those audible through crowds',
    },
  ],
  [
    'Magboots',
    {
      name: 'Magboots',
      weightInKilos: 2,
      availability: Availability.RARE,
      notes: 'Reduces Agility bonus by 2 but allows grip to metallic surfaces.',
    },
  ],
  [
    'Magnoculars',
    {
      name: 'Magnoculars',
      weightInKilos: 0.5,
      availability: Availability.AVERAGE,
      notes: 'Binoculars',
    },
  ],
  [
    'Manacles',
    {
      name: 'Manacles',
      weightInKilos: 1,
      availability: Availability.PLENTIFUL,
      notes: 'Handcuffs',
    },
  ],
  [
    'Medi-kit',
    {
      name: 'Medi-kit',
      weightInKilos: 2,
      availability: Availability.COMMON,
      notes: 'Grants +10 bonus to Medicae tests.',
    },
  ],
  [
    'Micro-bead',
    {
      name: 'Micro-bead',
      weightInKilos: 0,
      availability: Availability.AVERAGE,
      notes: 'Can talk to others up to 1 km away',
    },
  ],
  [
    'Monotask Servo-Skull',
    {
      name: 'Monotask Servo-Skull',
      weightInKilos: 2,
      availability: Availability.RARE,
      notes:
        'Floating skull with one function: Auger (Auspex), Illumination, Laud Hailer, Medicae (Medi-kit), Utility (Combi-tool)',
    },
  ],
  [
    'Multi Compass',
    {
      name: 'Multi Compass',
      weightInKilos: 4,
      availability: Availability.NEAR_UNIQUE,
      notes: 'Grants +20 to all Survival and Navigation (Surface) tests',
    },
  ],
  [
    'Multikey',
    {
      name: 'Multikey',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes: 'Grants +30 to Security test when opening locks',
    },
  ],
  [
    'Null Rod',
    {
      name: 'Null Rod',
      weightInKilos: 1,
      availability: Availability.NEAR_UNIQUE,
      notes:
        "Dampens psykers' powers in 2d10m radius. Psykers take -30 to Focus Power tests. User gains +30 to resist direct psychic powers.",
    },
  ],
  [
    'Pict Recorder',
    {
      name: 'Pict Recorder',
      weightInKilos: 1,
      availability: Availability.AVERAGE,
      notes: 'Camcorder',
    },
  ],
  [
    'Psy Focus',
    {
      name: 'Psy Focus',
      weightInKilos: 0,
      availability: Availability.AVERAGE,
      notes: 'Grants +10 to Focus Power Tests',
    },
  ],
  [
    'Regicide Set',
    {
      name: 'Regicide Set',
      weightInKilos: 1,
      availability: Availability.PLENTIFUL,
      notes:
        'Chess in the future, takes 1d5 hours. Grants +10 to Fellowship with opponent the following day',
    },
  ],
  [
    'Screamer',
    {
      name: 'Screamer',
      weightInKilos: 2,
      availability: Availability.SCARCE,
      notes:
        'Activated with Tech-Use. Perception 75 to detect movement and sound alarm',
    },
  ],
  [
    'Signal Jammer',
    {
      name: 'Signal Jammer',
      weightInKilos: 2,
      availability: Availability.RARE,
      notes: 'Jams other transmissions within 1 km',
    },
  ],
  [
    'Stasis Cage',
    {
      name: 'Stasis Cage',
      weightInKilos: 6,
      availability: Availability.EXTREMELY_RARE,
      notes:
        'Holds objects with Size ≤ 7 (not incorporeal) for 5h. Contents cannot act or be acted upon while inside.',
    },
  ],
  [
    'Static Generator',
    {
      name: 'Static Generator',
      weightInKilos: 3,
      availability: Availability.VERY_RARE,
      notes: 'Broadcasts static to all comms within 30 meters',
    },
  ],
  [
    'Stummer',
    {
      name: 'Stummer',
      weightInKilos: 2,
      availability: Availability.AVERAGE,
      notes:
        'Dampens sound and grants +30 to Stealth. Lasts 20 minutes before recharge',
    },
  ],
  [
    'Vox-caster',
    {
      name: 'Vox-caster',
      weightInKilos: 4,
      availability: Availability.SCARCE,
      notes: 'Allows communication up to 100 km',
    },
  ],
  [
    'Writing Kit',
    {
      name: 'Writing Kit',
      weightInKilos: 2,
      availability: Availability.PLENTIFUL,
      notes: 'Pen and paper',
    },
  ],
]);
