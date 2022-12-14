const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log("horizontolJoin:", horizontalJoin);
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  // console.log("verticalJoin:", verticalJoin);

  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }

  return false;
};

const transpose = function(matrix) {
  
  const array = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {

      if (!array[col]) {
        array[col] = [];
      }
      array[col].push(matrix[row][col]);
    }
  }
  return array;
};


//@mzparulina
//@mkmach
module.exports = wordSearch;