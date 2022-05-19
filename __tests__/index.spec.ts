import { testTest } from '../src';

describe('simple rxstate', (): void => {
  describe('test constant', (): void => {
    it('should have value', (): void => {
      expect.assertions(1);

      expect(testTest).toBe('hellotest');
    });
  });
});
