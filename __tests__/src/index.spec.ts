import { RxState } from '../../src';

describe('rxstate class', () => {
  it('should be defined', () => {
    expect.assertions(1);

    expect(RxState).toBeDefined();
  });

  it('can be instantiated', () => {
    expect.assertions(1);

    const actual = new RxState(undefined);

    expect(actual.showOptions()).toBeUndefined();
  });
});
