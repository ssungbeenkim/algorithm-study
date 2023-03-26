const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
let primeCount = inputArr[0];
for (let i = 1; i < inputArr.length; i++) {
  if (!isPrime(inputArr[i])) {
    primeCount--;
  }
}
console.log(primeCount);
//소수판별기
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
