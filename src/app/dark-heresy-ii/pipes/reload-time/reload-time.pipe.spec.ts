import { ReloadTimePipe } from './reload-time.pipe';

describe('ReloadTimePipe', () => {
  it('create an instance', () => {
    const pipe:ReloadTimePipe = new ReloadTimePipe();
    expect(pipe).toBeTruthy();
  });
});
