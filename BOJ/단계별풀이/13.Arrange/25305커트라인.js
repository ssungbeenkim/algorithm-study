const [_, k, ...score] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
const cutLine = scroe.sort((a, b) => b - a)[k - 1];
console.log(cutLine);
