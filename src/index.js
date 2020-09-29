
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  var arr2 = [];
  for (i = 0; i < matrix.length; i++) {

    if (i - 1 % 3 === 0 || i === 3) {
      matrix[i] = matrix[i].reverse();
    }
    for (j = 0; j < matrix[i].length; j++) {

      arr2.push(matrix[i][j]);

    }
  }
  return arr2;
}
