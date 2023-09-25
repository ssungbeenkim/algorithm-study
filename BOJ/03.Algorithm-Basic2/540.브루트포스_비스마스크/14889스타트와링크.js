/* 다시 돌아온 스타트와 링크. 비트마스크로 풀어보라고 하는 것이니 그렇게 풀어보도록 한다. 
두 팀으로 나눈다. 한 팀을 뽑는 조합을 구했었으며 팀의 백넘버를 0~n-1로 해서 
두팀의 점수차를 구한 후 최소값을 업데이트 해주었었다. 

어느 부분에 비트마스킹을 사용해 볼 수 있을까?
우선 비스마스킹으로 모든 부분집합을 구할 수 있다는 것은 알고 있다. 
하지만 이제는 n/2명씩 팀이 나누어 져야 한다.
그렇게 해서 n자리까지 모든 이진수를 생성해보면서 n/2명씩 나누어지는 경우에만 
점수를 구하고, 업데이트하면 될것이다. 

*/

const [N, ...matLines] = `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`
  .trim()
  .split('\n');
const n = Number(N);
const matrix = matLines.map((v) => v.split(' ').map(Number));
let minDiff = Number.MAX_SAFE_INTEGER;

// 1 ~ 1<<n+1까지 모든 경우를 만들며 1이 n/2개인 경우에만 최소값을 업데이트
for (let b = 1; b < 1 << (n + 1); b++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    b & (1 << j) && cnt++;
  }
  if (cnt === n / 2) {
    updateMinDiff(b);
  }
}
console.log(minDiff);

function updateMinDiff(b) {
  const [stat, link] = [[], []];
  for (let i = 0; i < n; i++) {
    b & (1 << i) ? stat.push(i) : link.push(i);
  }
  let = [statSum, linkSum] = [0, 0];

  for (let i = 0; i < n / 2; i++) {
    for (let j = i + 1; j < n / 2; j++) {
      statSum += matrix[stat[i]][stat[j]] + matrix[stat[j]][stat[i]];
      linkSum += matrix[link[i]][link[j]] + matrix[link[j]][link[i]];
    }
  }
  minDiff = Math.min(minDiff, Math.abs(statSum - linkSum));
}

// 비트마스크로 풀이하고 시간이 절반으로 줄었다.
