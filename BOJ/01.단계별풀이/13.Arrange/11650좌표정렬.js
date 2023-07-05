const [_, ...arr] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n');

const input = arr
  .map((v) => v.split(' '))
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .reduce((a, c) => a + `${c.join(' ')}\n`, '');

console.log(input);
