const [a, b] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
console.log(a.toString(b).toUpperCase());
