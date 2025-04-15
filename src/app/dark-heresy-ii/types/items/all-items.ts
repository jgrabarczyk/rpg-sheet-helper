import { CYBERNETICS } from './equipment/cybernetics';
import { GEAR } from './equipment/gear';
import { SUBSTANCES } from './equipment/substances';
import { TOOLS } from './equipment/tools';
import { GenericItem } from './generic-item';

// eslint-disable-next-line @typescript-eslint/typedef
export const BACKPACK_ITEMS: Map<string, GenericItem> = new Map([
  ...CYBERNETICS, // for now leave it here
  ...GEAR,
  ...SUBSTANCES,
  ...TOOLS,
]);
