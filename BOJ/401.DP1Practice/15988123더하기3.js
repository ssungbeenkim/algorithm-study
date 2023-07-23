/* 
dp[n]은 n을 1,2,3의 합으로 나타내는 방법의 수로 정의한다. 
dp[n] = dp[n-1] + dp[n-2] + dp[n-3]으로 점화식을 정한다. 
dp[1] = 1
dp[2] = 2 /11, 2
dp[3] = 4  /1 2, 111, 2 1, 3 
로 미리 값을 정해둔다. 
dp[4]부터는 점화식을 따르고 가장 큰 값까지 dp값을 구해둔 뒤 입력받은 수의 인덱스를 합하여 출력. 
*/

const [_, ...input] = `1
`
  .trim()
  .split(/\s/)
  .map(Number);

const max = Math.max(...input);
const dp = [0, 1, 2, 4];
for (i = 4; i <= max; i++) {
  dp[i] =
    (dp[i - 1] % 1000000009) +
    (dp[i - 2] % 1000000009) +
    (dp[i - 3] % 1000000009);
}

const answer = [];
input.forEach((v) => {
  answer.push(dp[v] % 1000000009);
});
console.log(answer.join('\n'));

// 간단한 규칙의 dp문제였다.
