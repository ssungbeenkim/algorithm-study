/* 이전 문제와 동일하나 실제 부분수열까지 출력해야 한다는 점에서 조금 다르다. 
이전 문제의 풀이와 비슷하게 가되, dp 에 최대값을 갱신하는 것이 아니라 복사하고 추가해서 
넣어주도록 하고, 가장 길이가 긴 것을 출력하면 될 것 같다. 
이번에는 slice하지 않고 for문을 돌면서해결하도록 문제도 바꿔보도록 하자. 
*/

const [n, ...input] = `6
10 20 10 30 20 50`
  .trim()
  .split(/\s/)
  .map(Number);
const dp = Array(n);
let [best, index] = [0, 0];

input.forEach((v, i) => {
  if (i === 0) {
    dp[i] = [input[0]];
  } else {
    let elr = [];
    input.slice(0, i).forEach((n, j) => {
      if (n < v && dp[j].length > elr.length) {
        elr = [...dp[j]];
      }
    });
    elr.push(v);
    dp[i] = elr;
    if (best < elr.length) {
      best = elr.length;
      index = i;
    }
  }
});

console.log(`${best}\n${dp[index].join(' ')}`);
