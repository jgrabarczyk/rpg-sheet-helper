export interface Roll {
  name: string;
  chance: number;
}

/**
 * @?? shall i allow modifiers in this type or keep it separate
 */
export type DiceRoll = `${number}d${number}` | `${number}d${number}+${number}` | `${number}d${number}-${number}`;
