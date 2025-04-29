export type RollableItem<T = string> = {
  name: T;
  description: string;
};
export type RollRange = `${number}-${number}`;
export type RollableItemsMap<T = string> = Map<RollRange, RollableItem<T>>;

export function pickRollableItem<T = string>(
  diceResult: number,
  map: RollableItemsMap<T>
): RollableItem<T> {
  const key: RollRange = findRollRange(diceResult, map);

  return map.get(key)!;
}

function findRollRange<T>(diceResult: number, map: RollableItemsMap<T>): RollRange {
  const range: RollRange | undefined = Array.from(map.keys()).find(range => {
    const [min, max] = range.split('-');
    return diceResult >= Number(min) && diceResult <= Number(max);
  });

  if (!range) {
    throw Error('Unable to find viable roll range');
  }

  return range;
}
