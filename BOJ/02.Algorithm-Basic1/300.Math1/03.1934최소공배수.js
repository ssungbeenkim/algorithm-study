/* 최소공배수 */

const [[n], ...arr] = `3
1 45000
6 10
13 17`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

function returnMCM(a, b) {
  let less;
  let more;
  if (a <= b) {
    more = b;
    less = a;
  } else {
    less = b;
    more = a;
  }

  for (let i = 1; true; i++) {
    if ((more * i) % less === 0) {
      return more * i;
    }
  }
}

const ans = [];

arr.forEach((ar) => {
  const [a, b] = ar;
  ans.push(returnMCM(a, b));
});

console.log(ans.join('\n'));
