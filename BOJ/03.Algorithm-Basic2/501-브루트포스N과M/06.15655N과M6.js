/* 
이전 문제와 비슷하다 오름차순으로 넣어준다. 
오름차순이므로 첫번째 값은 신경을 써주어야 한다. 
4 2
9 8 7 1에서 
1...
7...
..
8 9가 된다.
정렬을 한 뒤에  
n - m + 1 번째 값까지만 첫번째 값으로 들어갈 수 있다. 
그러니 forEach말고 index로 돌면서 조건부로 값을 추가하면 될 것이다. 
*/
const [n, m, ...numbers] = `4 4
1231 1232 1233 1234`
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
  const till = s.length ? n : n - m + 1;
  for (let i = 0; i < till; i++) {
    const v = numbers[i];
    if (!s.length || s.at(-1) < v) {
      s.push(v);
      fillLine();
      s.pop();
    }
  }
}
