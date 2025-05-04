import { Availability } from '../accessibility-modifiers';
import { GenericItem } from '../generic-item';

export const GEAR: Map<string, GenericItem> = new Map([
  [
    'Backpack',
    {
      name: 'Backpack',
      weightInKilos: 2,
      availability: Availability.ABUNDANT,
      notes:
        'Allows 30 kg of extra weight but requires a full action to remove object. Incompatible with the Combat Vest.',
    },
  ],
  [
    'Chameleoline Cloak',
    {
      name: 'Chameleoline Cloak',
      weightInKilos: 0.5,
      availability: Availability.RARE,
      notes: 'Gains +20 to stealth tests.',
    },
  ],
  [
    'Chrono',
    {
      name: 'Chrono',
      weightInKilos: 0,
      availability: Availability.PLENTIFUL,
      notes: 'Keeps time.',
    },
  ],
  [
    'Clothing',
    {
      name: 'Clothing',
      weightInKilos: 2,
      availability: Availability.ABUNDANT,
      notes: "Used to keep warm or disguise yourself. It's clothing.",
    },
  ],
  [
    'Combat Vest',
    {
      name: 'Combat Vest',
      weightInKilos: 2,
      availability: Availability.SCARCE,
      notes:
        'Holds 15 kg of items and can draw items in combat as Free Action. Incompatible with the Backpack.',
    },
  ],
  [
    'Concealed Holster',
    {
      name: 'Concealed Holster',
      weightInKilos: 1,
      availability: Availability.AVERAGE,
      notes:
        'Attempts to detect a concealed weapon suffers -20 penalty, but readying the weapon takes an extra Half Action.',
    },
  ],
  [
    'Dead Space Earpiece',
    {
      name: 'Dead Space Earpiece',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Grants +20 against Concussive tests',
    },
  ],
  [
    'Explosive Collar',
    {
      name: 'Explosive Collar',
      weightInKilos: 3,
      availability: Availability.SCARCE,
      notes:
        'Range of 1 km, and if out of range for more than 5 minutes collar detonates and kills the wearer instantly. Removing requires a -20 Tech-Use. Explodes if the removal roll fails with 2 or more DoF.',
    },
  ],
  [
    'Filtration Plugs',
    {
      name: 'Filtration Plugs',
      weightInKilos: 0,
      availability: Availability.COMMON,
      notes: 'Nose plugs. Grant +20 against gas.',
    },
  ],
  [
    'Photo-Visors/Contacts',
    {
      name: 'Photo-Visors/Contacts',
      weightInKilos: 0.5,
      availability: Availability.SCARCE,
      notes: 'Grants Dark-Sight trait.',
    },
  ],
  [
    'Preysense Goggles',
    {
      name: 'Preysense Goggles',
      weightInKilos: 0.5,
      availability: Availability.VERY_RARE,
      notes: 'Grants +20 to vision in darkness.',
    },
  ],
  [
    'Rebreather',
    {
      name: 'Rebreather',
      weightInKilos: 1,
      availability: Availability.SCARCE,
      notes:
        'Immune to toxic atmospheres, even allowing water-breathing. Last for 1 hour, takes Full Action to replace.',
    },
  ],
  [
    'Recoil Glove',
    {
      name: 'Recoil Glove',
      weightInKilos: 0.5,
      availability: Availability.RARE,
      notes: 'Can fire weapons one-handed without -20 penalty.',
    },
  ],
  [
    'Respirator/Gas Mask',
    {
      name: 'Respirator/Gas Mask',
      weightInKilos: 0.5,
      availability: Availability.AVERAGE,
      notes: 'Grants +30 to resist effects of gas and can re-roll if failed.',
    },
  ],
  [
    'Survival Suit',
    {
      name: 'Survival Suit',
      weightInKilos: 0,
      availability: Availability.AVERAGE,
      notes: 'Grants +20 to resist extreme environments.',
    },
  ],
  [
    'Synskin',
    {
      name: 'Synskin',
      weightInKilos: 2,
      availability: Availability.VERY_RARE,
      notes:
        'Grants 2 Armor to all locations not already armoured and +10 to Stealth tests. Also immune to preysense goggles and Dark-sight trait.',
    },
  ],
  [
    'Void Suit',
    {
      name: 'Void Suit',
      weightInKilos: 8,
      availability: Availability.SCARCE,
      notes:
        'Enclosed suit for space. 12 hours of air and imposes a -10 to Agility tests',
    },
  ],
]);
