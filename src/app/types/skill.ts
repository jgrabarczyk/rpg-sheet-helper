export interface Skill<T = string, R = string> {
  name: R;
  basedOn: T;
  value?: number;
}
