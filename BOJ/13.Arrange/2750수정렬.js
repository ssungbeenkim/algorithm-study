const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .slice(1)
  .map(Number);
inputArr.sort((a, b) => a - b).forEach((v) => console.log(v));
