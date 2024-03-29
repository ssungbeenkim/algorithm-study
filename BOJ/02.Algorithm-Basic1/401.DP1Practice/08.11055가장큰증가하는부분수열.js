/* 
가긴증부수 문제를 풀었었는데 기억이 안남. 
~ 0730 이후 예전 풀이 생각
10
1 100 2 50 60 3 5 6 7 8
시간초과. 이전 풀이를 찹고해 본다. 
11053과 비슷한 방법으로 풀 수 있다. 
dp[n] 은 n번째 수까지에서의 가장 큰 증가하는 부분합이라고 할 때 
dp[0] = input[0]이며 
2번째 값부터 각 dp 배열의 값은 
  이전 인덱스에서 자신보다 작은 값들 중에서 
  dp배열 해당 인덱스에서 가장 큰 부분합을 가지는 수 + 자신을 한 값
으로 결정한다. 
*/

const [n, ...input] = `10
1 100 2 50 60 3 5 6 7 8`
  .trim()
  .split(/\s/)
  .map(Number);

const dp = Array(n).fill(0);

input.forEach((v, i) => {
  if (i === 0) {
    dp[i] = input[i];
  } else {
    // 이전 인덱스의 자신보다 작은 수 중에서 가장 큰 부분합을 가지는 인덱스를 찾아 dp값을 설정
    let best = 0;
    for (j = 0; j < i; j++) {
      if (input[j] < v && best < dp[j]) {
        best = dp[j];
      }
    }
    dp[i] = best + input[i];
  }
});
console.log(dp);
console.log(Math.max(...dp));

/* 이전 풀이를 참고하여 아이디어를 얻고 나서 쉽게 풀 수 있었다. 
왜 못풀었는가? 
현제 인덱스의 입장을 더 잘 생각해보자. 
 */
