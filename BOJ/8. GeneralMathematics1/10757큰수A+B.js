const [a, b] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(BigInt);
const add = a + b;
console.log(add.toString());
