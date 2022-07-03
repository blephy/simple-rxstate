import { TEST_TEST } from '../src/index.js';

describe('simple rxstate', (): void => {
  describe('test constant', (): void => {
    it('should have value', (): void => {
      expect.assertions(1);

      expect(TEST_TEST).toBe('hellotest');
    });
  });
});
