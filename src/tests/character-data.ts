import { DHII_Character, INITIAL_CHARACTER } from '@dhii/types/dark-heresy-ii';
import { BACKGROUNDS } from '@dhii/types/dhii-background';
import { HOMEWORLDS } from '@dhii/types/dhii-homeworlds';
import { ROLES } from '@dhii/types/dhii-role';

export const INITIAL_CHARACTER_FOR_TESTS: DHII_Character = {
  ...INITIAL_CHARACTER,
  details: { age: 78, characterName: 'Andrzej' },
  homeworld: {
    key: 'agri-world',
    value: HOMEWORLDS.get('agri-world')!,
  },
  background: {
    key: 'admech',
    value: BACKGROUNDS.get('admech')!,
  },
  role: {
    key: 'warrior',
    value: ROLES.get('warrior')!,
  },
  divination: {
    description: 'divination custom description',
    name: 'divination custom name',
  },
  equipment: {
    armours: [],
    backpack: [],
    weapons: [],
  },
};
