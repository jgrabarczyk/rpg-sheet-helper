import { BACKGROUNDS } from '@dhii/types/dhii-background';
import { SpreadPipe } from './spread.pipe';

describe('SpreadPipe', () => {
  it('create an instance', () => {
    const pipe: SpreadPipe = new SpreadPipe();
    expect(pipe).toBeTruthy();
  });

  it('should parse empty', () => {
    const pipe: SpreadPipe = new SpreadPipe();
    const transformed: string = pipe.transform([]);

    expect(transformed).toEqual('');
  });
  it('should parse background', () => {
    const pipe: SpreadPipe = new SpreadPipe();
    const transformed: string = pipe.transform(
      BACKGROUNDS.get('heretek')!.skills
    );

    expect(transformed).toEqual('Forbidden Lore, Tech-Use, Trade (Pick One)');
  });

  it('should parse eq', () => {
    const pipe: SpreadPipe = new SpreadPipe();
    const transformed: string = pipe.transform([
      {
        value: 'Laspistol',
        key: 'Laspistol',
        quantity: 1,
      },
      {
        value: 'Stub Automatic',
        key: 'Stub Automatic',
        quantity: 1,
      },
    ]);

    expect(transformed).toEqual('Laspistol, Stub Automatic');
  });
});
