/* 
모든 경우의 수를 찾을 수 있지만 집의 개수는 1000개까지 될 수 있다. 기하급수적으로 늘어나므로 x
인접한 집의 색이 겹치지 않게 칠하는 경우 중에서 가장 적은 비용을 구한다. 
!
전체 값의 비교를 위해서는 결국 다 구하기는 해야 할 것 같기는 한데..
집의 갯수가 n개이면 3*2^n개의 값을 비교해야 한다. 
?미리 탈락시킬 수는 없을까? => X 더 작은 값이 다음 값에서 나올 수 있기 때문ㅇ. 
*/

/* 
제한시간이 지나 참고해서 풀도록 한다. 
참고한 풀이 : https://st-lab.tistory.com/128 
n*3의 2차원 배열로 입력값을 넣어두고 이전 값의 두 값중 작은 값을 현재 값과 더한것이 
현재까지의 비용이 된다는 아이디어다. 
그렇다면 입력을 받은 배열 원본을 2행부터 채워나가는 방식으로 구현하고 마지막 값에서 
가장 작은 값을 찾으면 된다. 
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
