import { BACKGROUNDS } from '@dhii/types/dhii-background';
import { OrPipe } from './or.pipe';

describe('OrPipe', () => {
  it('create an instance', () => {
    const pipe: OrPipe = new OrPipe();
    expect(pipe).toBeTruthy();
  });

  it('should parse background', () => {
    const pipe: OrPipe = new OrPipe();
    const transformed: string[] = pipe.transform(BACKGROUNDS.get('heretek')?.pick?.skills);

    expect(transformed).toEqual(['Deceive or Inquiry', 'Medicae or Security']);
  });

  it('should parse eq', () => {
    const pipe: OrPipe = new OrPipe();
    const transformed: string[] = pipe.transform([
      [
        {
          value: 'Laspistol',
          key: 'Laspistol',
          quantity: 1
        },
        {
          value: 'Stub Automatic',
          key: 'Stub Automatic',
          quantity: 1
        }
      ]
    ]);

    expect(transformed).toEqual(['Laspistol or Stub Automatic']);
  });
});
