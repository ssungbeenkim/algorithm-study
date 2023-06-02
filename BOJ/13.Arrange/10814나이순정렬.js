const [_, ...ar] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n');

const arr = ar
  .map((v) => v.split(' '))
  .sort((a, b) => a[0] - b[0])
  .map((v) => v.join(' '))
  .join('\n');
console.log(arr);
