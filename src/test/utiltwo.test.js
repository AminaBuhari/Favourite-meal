const utiltwo = require('../modules/utiltwo.js');

jest.mock('../modules/utiltwo.js');
const array = [1, 2, 3, 4, 5];
describe('Count Comments', () => {
  test('should take the number of comments from dom', () => {
    expect(utiltwo.countComment(array)).toBe(5);
  });

  test('should display comments', () => {
    expect(utiltwo.displayPopup(array)).toBe(5);
  });
});