import { Availability } from '../accessibility-modifiers';
import { GenericItem } from '../generic-item';

export const SUBSTANCES: Map<string, GenericItem> = new Map([
  [
    'Amasec',
    {
      name: 'Amasec',
      weightInKilos: 1,
      availability: Availability.AVERAGE,
      notes: 'Distilled spirits. Think brandy, whiskey, etc.',
    },
  ],
  [
    'Desoleum Fungus',
    {
      name: 'Desoleum Fungus',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes:
        'Lasts 1d10 rounds, and suffers 1 Fatigue. While under the effects can invert any 1d100 roll.',
    },
  ],
  [
    'De-Tox',
    {
      name: 'De-Tox',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes:
        'Clears any chemical effects. User is Stunned for 1d10 minus Toughness bonus rounds.',
    },
  ],
  [
    'Frenzon',
    {
      name: 'Frenzon',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes: 'Grants Frenzied for 1d10 minutes.',
    },
  ],
  [
    'Lho-Sticks',
    {
      name: 'Lho-Sticks',
      weightInKilos: 0,
      availability: Availability.COMMON,
      notes: 'Cigarettes for the grim darkness of the 41st millennium',
    },
  ],
  [
    'Obscura',
    {
      name: 'Obscura',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes:
        'Enters a dream like state for 1d5 hours. If in combat consider them under the effects of a hallucinogen grenade.',
    },
  ],
  [
    'Ration Pack',
    {
      name: 'Ration Pack',
      weightInKilos: 2,
      availability: Availability.PLENTIFUL,
      notes:
        'During rest of at least 2 hours or more remove one additional level of Fatigue.',
    },
  ],
  [
    'Recaf',
    {
      name: 'Recaf',
      weightInKilos: 0,
      availability: Availability.ABUNDANT,
      notes:
        'Organic plant material roasted/dried and infused with caffeine. Removes 1 level of Fatigue.',
    },
  ],
  [
    'Sacred Unguents',
    {
      name: 'Sacred Unguents',
      weightInKilos: 0,
      availability: Availability.VERY_RARE,
      notes:
        'Oils blessed by the Omnissiah. Applied to weapon as a full action and becomes immune to jamming for one clip. Can be applied to an already-jammed weapon to immediately clear the jam.',
    },
  ],
  [
    'Slaught',
    {
      name: 'Slaught',
      weightInKilos: 0,
      availability: Availability.SCARCE,
      notes:
        'Increase Agility and Perception bonus by 3 for 2d10 minutes. When over take a toughness test or suffer -20 to Agility and Perception tests for 1d5 hours.',
    },
  ],
  [
    'Spook',
    {
      name: 'Spook',
      weightInKilos: 0,
      availability: Availability.RARE,
      notes:
        'Pass a Willpower test or gain 1d5 Insanity. If successful gains 1 psy rating or additional psy rating. Effects last for 1d5 hours.',
    },
  ],
  [
    'Stimm',
    {
      name: 'Stimm',
      weightInKilos: 0,
      availability: Availability.AVERAGE,
      notes:
        'Lasts 3d10 rounds and ignores any negative effects from damage, Critical damage, Fatigue, and cannot be stunned. When it wears off, they suffer a -20 to Strength, Toughness, and Agility tests for one hour and gains one level of Fatigue.',
    },
  ],
  [
    'Tranq',
    {
      name: 'Tranq',
      weightInKilos: 1,
      availability: Availability.ABUNDANT,
      notes: 'Numbs the body and mind.',
    },
  ],
]);
