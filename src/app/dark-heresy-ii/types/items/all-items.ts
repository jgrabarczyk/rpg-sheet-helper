import { GEAR } from './equipment/gear';
import { SUBSTANCES } from './equipment/substances';
import { TOOLS } from './equipment/tools';
import { GenericItem } from './generic-item';

export const BACKPACK_ITEMS: Map<string, GenericItem> = new Map([
  ...GEAR,
  ...SUBSTANCES,
  ...TOOLS,
]);
