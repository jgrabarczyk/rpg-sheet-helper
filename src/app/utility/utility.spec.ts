import { Weapon } from '@dhii/types/items/weapon/weapon';

import { JSONparse, JSONstringify } from '@util/json-mappers';
import { assertUnreachable } from '@util/assert-unreachable';
import {
  mapStringArrayToSelectOptionArray,
  mapStringToSelectOption
} from '@util/map-string-to-select-option';

describe('Utility Unit tests', () => {
  describe('function assertUnreachable', () => {
    it('Should throw Error when object assertion is not exhausted correctly', () => {
      expect(() => {
        //create object with invalid field value
        const weapon: Weapon = { class: 'ff' } as unknown as Weapon;
        if (
          weapon.class === 'Basic' ||
          weapon.class === 'Charge' ||
          weapon.class === 'Grenade' ||
          weapon.class === 'Heavy' ||
          weapon.class === 'Melee' ||
          weapon.class === 'Melee/Thrown' ||
          weapon.class === 'Pistol' ||
          weapon.class === 'Thrown'
        ) {
          return;
        }
        assertUnreachable(weapon.class);
      }).toThrowError('Assertion not exhausted properly');
    });
  });

  describe('function mapStringToSelectOption', () => {
    it('Should correclty convert string', () => {
      const s: string = 'some string';
      expect(mapStringToSelectOption(s)).toEqual({ key: s, value: s });
    });
  });

  describe('function mapStringArrayToSelectOptionArray', () => {
    it('Should correclty convert array of strings ', () => {
      const s: string = 'some string';
      const arr: string[] = [s];
      expect(mapStringArrayToSelectOptionArray(arr)).toEqual([{ key: s, value: s }]);
    });
  });

  describe('JSONstringify', () => {
    it('should stringify map object', () => {
      const map: Map<string, string> = new Map([['a', 'b']]);
      const result: string = '["@Map",["a","b"]]';
      const stringified: string = JSONstringify(map);
      console.log(stringified);

      expect(stringified).toEqual(result);
      expect(stringified).toContain('@Map');
    });
    it('should stringify set object', () => {
      const set: Set<string> = new Set(['a', 'b']);

      const result: string = '["@Set","a","b"]';
      const stringified: string = JSONstringify(set);
      expect(stringified).toEqual(result);
      expect(stringified).toContain('@Set');
    });
  });

  describe('JSONparse', () => {
    it('should parse string', () => {
      const stringified: string = '["@Set",["@Map",["a","b"]]]';
      const result: Set<Map<string, string>> = new Set<Map<string, string>>();
      result.add(new Map([['a', 'b']]));

      const parsed: object = JSONparse(stringified);
      expect(parsed).toEqual(result);
    });
  });
});
