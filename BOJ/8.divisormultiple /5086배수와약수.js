const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

inputArr.forEach((v) => {
  const [a, b] = v;
  if (a === b) {
    return;
  } else if (b % a === 0) {
    console.log('factor');
  } else if (a % b === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
});
