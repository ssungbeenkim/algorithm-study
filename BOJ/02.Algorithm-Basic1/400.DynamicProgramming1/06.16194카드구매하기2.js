/* 이전 문제와 동일하다. */
const [n, ...p] = `5
10 9 8 7 6`
  .trim()
  .split(/\s/)
  .map(Number);
const dp = Array(n).fill(0);
for (let i = 1; i < n + 1; i++) {
  const cas = [];
  for (let j = i; 0 < j; j--) {
    cas.push(p[j - 1] + dp[i - j]);
  }
  dp[i] = Math.min(...cas);
}
console.log(dp[n]);
