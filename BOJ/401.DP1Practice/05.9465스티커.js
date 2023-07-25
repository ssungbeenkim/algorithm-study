/* 
스티커를 떼보자.  
우선 뭔가 RGB랑 비슷하게 풀면 될 것 같다는 생각. 
우선 입력을 2차원 배열에 받아서 넣고, 
각 칸에서는 세가지 경우를 가질 수 있다. 안떼거나 각각 하나씩 떼거나. 
dp는 2*3 배열. dp[n][x|d|u]은 각 층까지 안뗄때, 아래것 땔 때, 위엣것 땔 때의 점수 최대값.
안뗄 때. 아래것 땔 떼, 위엣것 뗄 때. 
다음칸에서 안뗄 때는 위에서 세가지중 가장 큰 값으로. 
첫 값부터
dp[0] = [0,input[0][0],input[0][1]]...
*/

const [c, ...input] = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`
  .trim()
  .split('\n');

// 입력을 받아 케이스별로 2차원 배열을 만들어 cases에 받아오고, 변수를 설정하여 접근한다.
// [[n, [u1,u2..], [d1,d2..]] , [case2] , [case3] , ...]
const caseNumber = Number(c);
const cases = [];
for (let i = 1; i <= caseNumber; i++) {
  const [n, a, b] = input.slice((i - 1) * 3, 3 * i);
  const count = Number(n);
  const caseA = a.split(' ').map(Number);
  const caseB = b.split(' ').map(Number);
  cases.push([count, caseA, caseB]);
}
// cases와 dp에 접근할 때는 아래의 변수를 사용한다.
const x = 0; // dp에 값을 지정할 때 사용. u,d는 동일하게 사용한다.
const n = 0;
const u = 1;
const d = 2;
// dp는 2차원 배열로 만들어 값을 추가해 나갈것이다. 케이스별로 진행해야 하므로 함수로 만든다.
// dp배열을 채워나간 후 마지막 값에서 최대값을 찾으면 된다.
function returnBestCase(caseArr) {
  const dp = []; // [x,u,d]이 들어감.
  dp[0] = [0, caseArr[u][0], caseArr[d][0]];
  // case배열을 돌며 참고하며 dp배열을 채워나간다.
  for (let i = 1; i < caseArr[n]; i++) {
    dp[i] = [
      Math.max(...dp[i - 1]),
      caseArr[u][i] + Math.max(dp[i - 1][d], dp[i - 1][x]),
      caseArr[d][i] + Math.max(dp[i - 1][u], dp[i - 1][x]),
    ];
  }
  return Math.max(...dp[caseArr[n] - 1]);
}
const answer = [];
cases.forEach((c) => answer.push(returnBestCase(c)));
console.log(answer.join('\n'));

/* 
정답. 
기본적으로 RGB문제와 다른것이 없는 문제였으나 입력에서 케이스가 여럿 드러오는 것을 잘
처리해야 하는 문제였다. 
*/
