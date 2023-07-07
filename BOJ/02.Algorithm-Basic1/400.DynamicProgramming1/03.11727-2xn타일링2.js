/* 
바로 전 문제와 같이 규칙을 세어보면 답이 나온다. 
n = n-1 + (n-2)*2
*/

const n = Number(`12`.trim());
const dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (i = 3; i < n + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}
console.log(dp[n]);
