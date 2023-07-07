/* n이 주어졌을 때 n을 1개 이상의 수를 사용하여 
1,2,3의 합으로 나타내는 방법의 수를 출력한다. 
앞서 풀었던 타일 문제와 다름이 없다. 
순서가 있고 한자리를 고정시켜 두고 푸는 것이라서 그렇다. 
*/
{
  // 틀림.
  const [_, ...input] = `3
4
7
10`
    .trim()
    .split('\n')
    .map(Number);

  const answer = [];

  input.forEach((n) => {
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    if (3 < n) {
      for (i = 4; i < n + 1; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
      }
    }
    answer.push(dp[n]);
    console.log(answer);
  });

  console.log(answer.join('\n'));
}
