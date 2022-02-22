
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];
  if (!matrix) {
    result = result;
  } else {
    for (i=0; i<matrix.length; i++) {
      for (j=0; j<matrix[i].length; j++) {
        let rawIndex = i % 2 === 0
        ? j : (matrix[i].length - 1 - j);
        result.push(matrix[i][rawIndex]);
      }
    }
  }

  
  return result;
}
