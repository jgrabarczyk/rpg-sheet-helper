import { pickRollableItem, RollableItem, RollableItemsMap, RollRange } from './roll-item';

describe('unit pickRollableItem', () => {
  it('should return valid result for roll', () => {
    const validResult: RollableItem<string> = { name: 'good', description: 'good description' };
    const map: RollableItemsMap<string> = new Map<RollRange, RollableItem<string>>([
      ['0-1', { name: 'good', description: 'good description' }],
      ['13-18', validResult]
    ]);
    expect(pickRollableItem(13, map)).toEqual(validResult);
  });

  it('should throw unable to find viable roll range', () => {
    const validResult: RollableItem<string> = { name: 'good', description: 'good description' };
    const map: RollableItemsMap<string> = new Map<RollRange, RollableItem<string>>([
      ['0-1', { name: 'good', description: 'good description' }],
      ['13-18', validResult]
    ]);
    const diceResult: number = 20;

    expect(() => {
      pickRollableItem(diceResult, map);
    }).toThrowError(`Unable to find viable roll range`);
  });
 
});
