import { Level } from './level';

export interface Skill<T = string, R = string> {
  name: R;
  basedOn: T;
  lvl: Level;
  value?: number;
}
