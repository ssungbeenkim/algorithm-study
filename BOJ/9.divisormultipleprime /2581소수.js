//두 수 포함사이 소수 찾기
// 반복문 돌리고 소수판별 해서 맞으면 배열에 넣고 마직막에 더해버리기. but 배열에 암것도없으면 -1출력
const [m, n] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);

const primeArr = [];

for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    primeArr.push(i);
  }
}
if (primeArr.length !== 0) {
  console.log(
    `${primeArr.reduce((a, c) => a + c, 0)}\n${Math.min(...primeArr)}`
  );
} else {
  console.log(-1);
}
// 소수감별사 등장 두둥탁
function isPrime(n) {
  const divisorArr = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorArr.push(i);
    }
  }
  if (divisorArr.length === 2) {
    return true;
  } else {
    return false;
  }
}
