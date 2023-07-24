/* 
오르막 수를 구하라. 
1 - 0~9 10개 
2 - 0일때 10개 1일때 9개 2일때 8개 ... 9일때 1개.의 함. 1~10의 합이 된다. 
3 - 


2차원 dp 배열을 만든다. 
dp[n][m]은 n자리 오르막수에서 n번째 수가 m일 수 있는 경우의 수다. 
*/

const n = Number(`1000`.trim());
const dp = [null, Array(10).fill(1)];

for (i = 2; i <= n; i++) {
  const elDp = [1];
  for (j = 1; j <= 9; j++) {
    elDp[j] = (elDp[j - 1] % 10007) + (dp[i - 1][j] % 10007);
  }
  dp.push(elDp);
}
console.log(dp[n].reduce((a, c) => a + c, 0) % 10007);

// 2차원 배열로 점화식을 세워 풀었다.
