import { Characteristic } from "./characteristic";

export type COC_AttributeNames =
  | 'Strength'
  | 'Constitution'
  | 'Power'
  | 'Dexterity'
  | 'Appearance'
  | 'Size'
  | 'Intelligence'
  | 'Education';

  export type COC_Characteristic = Characteristic<COC_AttributeNames>