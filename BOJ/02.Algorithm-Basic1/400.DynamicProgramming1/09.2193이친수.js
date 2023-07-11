const n = Number(`90`.trim());
const dp = Array(n);
dp[0] = [0n, 1n];
for (i = 1; i < n; i++) {
  dp[i] = Array(2);
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
  dp[i][1] = dp[i - 1][0];
}
console.log(`${dp[n - 1][0] + dp[n - 1][1]}`);

// bigInt로 계산하지 않으면 overflow가 나게 된다.
