const displayCount = (count) => count;

const displayFood = () => {
  let count = 0;
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  for (let i = 0; i < data.length; i += 1) {
    count += 1;
  }
  return count;
};

module.exports = { displayCount, displayFood };