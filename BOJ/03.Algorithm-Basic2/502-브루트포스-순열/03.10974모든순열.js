/* 
1부터 n까지의 수로 이루어진 순열을 사전순으로 출력하라. 
백트래킹으로 이전에 풀었던 문제와 거의 다를것이 없는 문제다. 
*/

const n = Number(`3`.trim());

const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === n) {
    answer.push(s.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!s.includes(i)) {
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}
