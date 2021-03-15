
exports.min = function min(array) {
  if (!array || !array.length) return 0;
  else {
      var result = Math.min(...array);
      return result;
  }
};

exports.max = function max(array) {
  if (!array || !array.length) return 0;
  else {
      var result = Math.max(...array);
      return result;
  }
};

exports.avg = function avg(array) {
  if (!array || !array.length) return 0;
  else {
      let result = array.reduce((a, b) => a + b) / array.length;
      return result;
  }
};