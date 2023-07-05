const [str, n] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/);
const index = Number(n) - 1;
console.log(str[index]);
