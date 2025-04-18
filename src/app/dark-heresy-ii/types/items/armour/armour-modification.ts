import { Availability } from '../accessibility-modifiers';
import { ArmourClass, ProtectedLocations } from './armour';

export type ArmourModificationUsage = {
  location: Array<ProtectedLocations | 'Backpack'>;
  type: Array<ArmourClass | 'Any Armour'>;
};

export type ArmourModification = {
  name: string;
  weightInKilo: number;
  availability: Availability;
  usedWith: ArmourModificationUsage; //redefine this
  note: string;
};

export const ARMOUR_MODIFICATIONS: Map<string, ArmourModification> = new Map([
  [
    'Adamantine Chainguard',
    {
      name: 'Adamantine Chainguard',
      weightInKilo: 4,
      availability: Availability.VERY_RARE,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: "If the 1s digit of his attack roll is a 1, the weapon is destroyed unless it has the Power Field or Warp Weapon quality, or is otherwise immune to being destroyed. -5 to armor's Max Agility."
    }
  ],
  [
    'Auto-Senses',
    {
      name: 'Auto-Senses',
      weightInKilo: 2,
      availability: Availability.VERY_RARE,
      usedWith: {
        location: ['Head'],
        type: ['Power']
      },
      note: 'Gains a +5 bonus to his Ballistic Skill and a +10 bonus to all Awareness tests based on Sight and Hearing.'
    }
  ],
  [
    'Brazier of Saint Roberto',
    {
      name: 'Brazier of Saint Roberto',
      weightInKilo: 10,
      availability: Availability.COMMON,
      usedWith: {
        location: ['Head', 'Backpack'],
        type: ['Any Armour']
      },
      note: 'A brazier must be affixed to a backpack, helmet, or similarly worn item. Setting it aflame requires a Half Action and it can burn for 2 hours. Whilst alight, it acts as a glow-globe and grants a +30 bonus to all Charm and Command tests, a +10 bonus to Intimidate tests, and a -40 penalty to all Stealth tests. If the wearer is ever knocked Prone while it is lit, he must pass an Ordinary (+10) Agility test to avoid setting himself on fire.'
    }
  ],
  [
    'Ceramite Plating',
    {
      name: 'Ceramite Plating',
      weightInKilo: 2,
      availability: Availability.RARE,
      usedWith: {
        location: ['All'],
        type: ['Carapace', 'Power']
      },
      note: 'Provides an additional 3 Armour points of protection against attacks with the Flame or Melta qualities and other heat-based attacks.'
    }
  ],
  [
    'Devotional Iconography',
    {
      name: 'Devotional Iconography',
      weightInKilo: 1,
      availability: Availability.COMMON,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: 'Gains a +10 bonus to Command tests when dealing with those faithful to the Imperium, but suffers a -10 penalty to Fellowship tests when dealing with those not loyal to the Emperor.'
    }
  ],
  [
    'Hexagrammic Wards',
    {
      name: 'Hexagrammic Wards',
      weightInKilo: 0,
      availability: Availability.EXTREMELY_RARE,
      usedWith: {
        location: ['All'],
        type: ['Carapace', 'Power']
      },
      note: "Gains a +20 bonus to tests made to resist any psychic attack or manipulation directed at him. The upgraded armour's Armour points are doubled against hits inflicted by psychic attacks. The Warp Weapon quality does not ignore the AP of this armour."
    }
  ],
  [
    'Pentagramatic Wards',
    {
      name: 'Pentagramatic Wards',
      weightInKilo: 0,
      availability: Availability.EXTREMELY_RARE,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: "Whenever a character with the Daemonic or Warp Instability trait becomes engaged in melee with the warded armour's wearer or begins his turn engaged with the wearer, that character must make a Hard (-20) Willpower test..."
    }
  ],
  [
    'Sacred Incense Burner',
    {
      name: 'Sacred Incense Burner',
      weightInKilo: 0,
      availability: Availability.RARE,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: 'Must be affixed to a backpack, helmet, or similarly worn item. Setting it aflame requires a Half Action and it can burn for 1 hour...'
    }
  ],
  [
    'Truesilver Filigree',
    {
      name: 'Truesilver Filigree',
      weightInKilo: 0,
      availability: Availability.VERY_RARE,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: "Any character with the Daemonic trait suffers a penalty to Weapon Skill tests equal to 5 times the wearer's Willpower bonus."
    }
  ],
  [
    'Unguents of Warding',
    {
      name: 'Unguents of Warding',
      weightInKilo: 0,
      availability: Availability.COMMON,
      usedWith: {
        location: ['All'],
        type: ['Any Armour']
      },
      note: 'Working the unguents onto armour takes roughly one hour, and empties one container for each hit location treated...'
    }
  ]
]);
