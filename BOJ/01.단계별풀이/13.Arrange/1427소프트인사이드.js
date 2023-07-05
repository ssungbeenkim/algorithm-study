const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('')
  .map(Number);
console.log(inputArr.sort((a, b) => b - a).join(''));
