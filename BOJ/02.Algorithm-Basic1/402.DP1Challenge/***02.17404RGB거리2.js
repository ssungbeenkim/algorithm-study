/* RGB거리 2단계
첫집, 끝집의 색이 다름
이웃 따라하면 안됨.

다른 RGB문제에서 dp 방식으로 풀이를 했었다. 
그러나 첫집과 끝집의 색이 달라야 한다는 조건이 추가되었다. 
3
26 40 83
49 60 57
13 89 99

26 30 83
83+49 83+60 40+57

이렇게 하면 어떨까? 2차원 배열로 만들되, 첫 값을 기억하게 해서, 
반복문 끝에서 마지막 요소를 채울 때는 참조해서 구하도록 하면 되지 않겠는가?

그리고 더해나가는 것이 아니라 2차원 배열에 값을 점진적으로 적용해서 추가하고, 마지막에 큰 값을 
출력할 때, 첫 값과 마지막 값이 같지 않은 요소중에서 더하면 될 것 같기도 하다. 
두번째 값으로 가보도록 하겠다. 


 */
// {
//   const [count, ...input] = `3
// 26 40 83
// 49 60 57
// 13 89 99`
//     .trim()
//     .split('\n');

//   const n = Number(count);
//   const pm = input.map((v) => v.split(' ').map(Number));
//   const r = 0;
//   const g = 1;
//   const b = 2;
//   const dp = [input[0].split(' ').map((v) => [Number(v), Number(v)])];
//   const sum = 0;
//   const root = 1;
//   // [sum, root]

//   // [1]값부터 n-1값까지 설정해주도록 한다.
//   for (let i = 1; i < n - 1; i++) {
//     const red =
//       dp[i - 1][g][sum] < dp[i - 1][b][sum]
//         ? [pm[i][r] + dp[i - 1][g][sum], dp[i - 1][g][root]]
//         : [pm[i][r] + dp[i - 1][b][sum], dp[i - 1][b][root]];
//     const green =
//       dp[i - 1][r][sum] < dp[i - 1][b][sum]
//         ? [pm[i][g] + dp[i - 1][r][sum], dp[i - 1][r][root]]
//         : [pm[i][g] + dp[i - 1][b][sum], dp[i - 1][b][root]];
//     const blue =
//       dp[i - 1][r][sum] < dp[i - 1][g][sum]
//         ? [pm[i][b] + dp[i - 1][r][sum], dp[i - 1][r][root]]
//         : [pm[i][b] + dp[i - 1][g][sum], dp[i - 1][g][root]];
//     dp.push([red, green, blue]);
//   }
//   console.log(dp);
//   // 마지막 값에서는 첫 값과 다른 값으로 칠해야 하므로 조금 다르게 가야 한다.
// }
// 근데 예제를 보면 모든 값이 26에서 시작하도록 되어있음. 뭔가 잘못 접근한 것 같음.

/* 
다른 풀이를 참고해서 풀어보자. 
https://bio-info.tistory.com/214 
*/
{
  const [count, ...input] = `6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91`
    .trim()
    .split('\n');

  const n = Number(count);
  const rgb = input.map((v) => v.split(' ').map(Number));

  let ans = Infinity;
  const I = Infinity;

  for (let i = 0; i < 3; i++) {
    const dp = Array.from({ length: n }, () => [I, I, I]);
    dp[0][i] = rgb[0][i];

    for (let j = 1; j < n; j++) {
      dp[j][0] = rgb[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
      dp[j][1] = rgb[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
      dp[j][2] = rgb[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
    }

    for (let k = 0; k < 3; k++) {
      if (i !== k) {
        ans = Math.min(ans, dp[n - 1][k]);
      }
    }
  }

  console.log(ans);
}

/* 초기값을 Infinity로 해주어 첫번째 집이 각 숫자로 선택되게 한다는 아이디어를 
직관적으로 받아들이기 어려웠다. 나중에 다시 풀어보기.  */
