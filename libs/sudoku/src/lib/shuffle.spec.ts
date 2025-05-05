import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should validate row', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(numbers);

    expect(shuffled).not.toEqual(numbers);
  });
});
