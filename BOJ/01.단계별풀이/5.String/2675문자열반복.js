const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n')
  .slice(1)
  .map((v) => v.split(' '));

inputArr.forEach((v) => {
  const [n, str] = v;
  const N = Number(n);
  const charArr = str.split('');
  let answer = '';
  function makeRepeat(c) {
    for (i = 0; i < N; i++) {
      answer += c;
    }
  }
  charArr.forEach(makeRepeat);
  console.log(answer);
});
