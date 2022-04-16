const countComment = (array) => array.length;

const displayPopup = (array) => {
  const noCount = countComment(array);
  return noCount;
};

module.exports = { countComment, displayPopup };