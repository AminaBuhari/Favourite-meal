const util = require('../modules/util.js');

jest.mock('../modules/util');

describe('Count Favoirte Foods', () => {
  test('should take the number of items and return to the dom', () => {
    expect(util.displayCount(5)).toBe(5);
  });

  test('should pass through all of the items and increase the value by 1', () => {
    expect(util.displayFood()).toBe(7);
  });
});
