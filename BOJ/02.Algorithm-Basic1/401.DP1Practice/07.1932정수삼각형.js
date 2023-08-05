/* 
입력을 라인별로 나눠 2차원 배열에 넣고 
2차원 배열 dp 배열을 만든다. 
*/

const [n, ...input] = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`
  .trim()
  .split('\n');
const nums = [[0]];
nums.push(...input.map((v) => v.split(' ').map(Number)));
const dp = [[0], [...nums[1]]];

for (let i = 2; i <= Number(n); i++) {
  const temp = [];
  for (let j = 0; j < i; j++) {
    if (j === 0) {
      temp.push(dp[i - 1][j] + nums[i][j]);
    } else if (j === i - 1) {
      temp.push(dp[i - 1][j - 1] + nums[i][j]);
    } else {
      temp.push(Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + nums[i][j]);
    }
  }
  dp.push(temp);
}
console.log(Math.max(...dp[n]));

/* 정답 
각 층에서는 이전 층까지 계산한 값과 관련하여 값을 결정하게 된다. 
양 끝의 경우 바로 이전층에 한가지 값만 더할 수 있다. 
그러나 그렇지 않은 경우 더할 두 있는 두가지 경우 중 큰 값을 저장하도록 했다. 
*/
