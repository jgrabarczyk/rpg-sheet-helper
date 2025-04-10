export interface Roll {
  name: string;
  chance: number;
}

export type DiceRoll = `${number}d${number}`;
