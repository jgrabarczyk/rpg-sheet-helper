import { RateOfFire } from '@dhii/types/items/weapon/weapon';
import { RateOfFirePipe } from './rate-of-fire.pipe';

describe('RateOfFirePipe', () => {
  it('parse single', () => {
    const rof: RateOfFire = {
      single: true,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('S/-/-');
  });
  it('parse single and semi', () => {
    const rof: RateOfFire = {
      single: true,
      semi: 2,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('S/2/-');
  });
  it('parse single semi and full', () => {
    const rof: RateOfFire = {
      single: true,
      semi: 3,
      full: 8,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('S/3/8');
  });
  it('parse only full', () => {
    const rof: RateOfFire = {
      single: false,
      full: 8,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('-/-/8');
  });
  it('parse only semy', () => {
    const rof: RateOfFire = {
      single: false,
      semi: 4,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('-/4/-');
  });
  it('parse only semi and full', () => {
    const rof: RateOfFire = {
      single: false,
      semi: 3,
      full: 8,
    };
    const pipe: RateOfFirePipe = new RateOfFirePipe();
    const transformed: string = pipe.transform(rof);
    expect(transformed).toEqual('-/3/8');
  });
});
