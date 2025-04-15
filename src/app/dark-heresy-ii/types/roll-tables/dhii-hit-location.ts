import { BodyLocation } from '@appTypes/body-location';
import { RollableItemsMap } from '@appTypes/roll-item';



export const HIT_LOCATION_TABLE: RollableItemsMap<BodyLocation> = new Map([
  ['01-10', { name: 'Head', description: '' }],
  ['11-20', { name: 'Right Arm', description: '' }],
  ['21-30', { name: 'Left Arm', description: '' }],
  ['31-70', { name: 'Body', description: '' }],
  ['71-85', { name: 'Right Leg', description: '' }],
  ['86-100', { name: 'Left Leg', description: '' }],  
]);
