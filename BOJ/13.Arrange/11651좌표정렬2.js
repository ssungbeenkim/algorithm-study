const [_, ...arr] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n');

const input = arr
  .map((v) => v.split(' '))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .reduce((a, c) => a + `${c.join(' ')}\n`, '');

console.log(input);

//바로 전 문제와 거의 유사.
