/* 
비내림차순 조건이 추가된 것이다. 같거나 큰것만 들어가면 되고, 
그러므로 이전에 오름차순으로 구했던 것에서 첫번째 값의 조건이 필요없어진다. 
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
    if (s.length === 0 || s.at(-1) <= i) {
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}
