import { OrPipe } from './or.pipe';

describe('OrPipe', () => {
  it('create an instance', () => {
    const pipe: OrPipe = new OrPipe();
    expect(pipe).toBeTruthy();
  });
});
