const [, ...inputArr] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/);

let answer = 0;

inputArr.forEach((v) => {
  const arr = [];
  const length = v.length;
  for (i = 0; i < length; i++) {
    if (!arr.includes(v[i])) {
      arr.push(v[i]);
    } else if (arr[arr.length - 1] === v[i]) {
      arr.push(v[i]);
    }
  }
  arr.length === v.length && answer++;
});
console.log(answer);
