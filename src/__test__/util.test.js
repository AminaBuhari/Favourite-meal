const { displayCount, displayFood } = require('../modules/util.js');

jest.mock('../modules/util');

describe('Count Favoirte Foods', () => {
  test('should take the number of items and return to the dom', () => {
    expect(displayCount(5)).toBe(5);
  });

  test('should pass through all of the items and increase the value by 1', () => {
    expect(displayFood()).toBe(7);
  });
});
