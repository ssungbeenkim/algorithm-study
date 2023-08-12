const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function rotate(mat, count = 1) {
  if (count === 0) return mat;

  const colLastIndex = mat.length - 1;
  const rowLastIndex = mat[0].length - 1;
  const rotated = [];
  for (let i = 0; i <= rowLastIndex; i++) {
    const newRow = [];
    for (let j = colLastIndex; j >= 0; j--) {
      newRow.push(mat[j][i]);
    }
    rotated.push(newRow);
  }
  return rotate(rotated, count - 1);
}

const rotated = rotate(matrix);
console.log(matrix, rotated);
