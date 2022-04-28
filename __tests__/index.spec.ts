import { TEST } from '../src';

describe('rxstate', () => {
  it('should have a `TEST` constant', () => {
    expect.assertions(1);

    expect(TEST).toBeDefined();
  });

  describe('test constant', () => {
    it('should have value', () => {
      expect.assertions(1);

      expect(TEST).toBe('hello');
    });
  });
});
