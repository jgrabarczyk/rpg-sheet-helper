import { Enumerate } from './enumerative';

export type Level<N extends number = number> = {
  current: Enumerate<N>;
  max: N;
};
