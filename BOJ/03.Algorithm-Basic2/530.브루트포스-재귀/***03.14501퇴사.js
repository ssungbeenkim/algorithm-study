/* 
N일 후 퇴사 예정. 
앞으로 N일간 상담테이블을 준다. 
적절히 일해서 최대 수익을 가져가야 한다. 
상담은 한번에 하나만 가능하다. 

시간초과 !!
https://songsunbi.tistory.com/80 도움
스케줄 마지막날짜부터 1일 후 스케줄까이 오면서 비교분석해서 최대값을 계산하는 방식이다. 
막줄부터 오면서 dp[n] = max(dp[n+1], p[n] + dp[n+t[n]]) 로 계산해 준다. 
dp는 마지막날 일수 최대 15일에서 최대상담일 5일 후인 20으로 잡아준다. 
dp를 채우는 과정이 끝나고 dp[0]을 출력한다. 

*/

const [N, ...SC] = `10
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10`
  .trim()
  .split('\n');
const n = Number(N);
const tp = SC.map((s) => s.split(' ').map(Number));
const dp = new Array(20).fill(0);
const t = 0;
const p = 1;
for (let i = n - 1; 0 <= i; i--) {
  const noWork = dp[i + 1];
  const done = i + tp[i][t];
  const work = tp[i][p];
  dp[i] = done <= n ? Math.max(noWork, work + dp[done]) : noWork;
}
console.log(dp[0]);
