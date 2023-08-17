/* 
이번에는 첫번째 문제에서 중복을 허용한다. 
*/
const [n, m] = `4 2`.trim().split(/\s/).map(Number);

const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === m) {
    answer.push(s.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    s.push(i);
    fillLine();
    s.pop();
  }
}
