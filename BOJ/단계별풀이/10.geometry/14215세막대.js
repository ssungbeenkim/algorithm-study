// 삼각형의 두 변의 길이의 합은 한변의 길이보다 작다는 것을 이용
// 최소한으로 줄이면 둘레는 최대가 되므로 두 변의 합 * 2 -1 하면 된다.

// 두 변의 합이 가장 긴 변보다 작은 경우에는 그냥 세 변을 더하면 둘레가 된다.

const [a, b, c] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number)
  .sort((a, b) => a - b); // 오름차순으로 정렬

if (c < a + b) {
  console.log(a + b + c);
} else {
  console.log((a + b) * 2 - 1);
}
