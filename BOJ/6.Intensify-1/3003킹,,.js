const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
const compArr = [1, 1, 2, 2, 2, 8];
console.log(
  [...inputArr]
    .map((v, i) => {
      return compArr[i] - v;
    })
    .join(' ')
);
