import NumTo from '../src';
describe('number.test.ts', () => {
  it('random cn', async () => {
    for(let i = 0; i < 1000; i ++) {
      const randomNumber = Math.random() * 10000000000 * Math.random();
      const cn = NumTo(randomNumber).cn();
      expect(NumTo(cn).number()).toEqual(randomNumber);
    }
  });
});