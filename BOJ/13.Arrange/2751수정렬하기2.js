const [_, ...input] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);

console.log(input.sort((a, b) => a - b).join('\n'));
