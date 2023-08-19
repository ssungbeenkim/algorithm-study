/* 
N개의 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.
*/
const [n, m, ...numbers] = `4 2
9 8 7 1`
  .trim()
  .split(/\s/)
  .map(Number);
const numbersSorted = [...numbers.sort((a, b) => a - b)];
const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === m) {
    answer.push(s.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    const v = numbers[i];
    s.push(v);
    fillLine();
    s.pop();
  }
}
