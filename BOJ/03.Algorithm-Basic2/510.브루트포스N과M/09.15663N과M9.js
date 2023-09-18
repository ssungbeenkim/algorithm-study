/* 
중복되는 수가 들어온다. 

값은 중복되는 것이 있으므로 인덱스를 기준으로 골라서 넣어서 채워주되, 실제 수열을 추가할 때는 
문자열로 변환해서 추가한다. 이때 정렬된 배열을 참조해서 넣어주면 자동으로 증가하는 수 순서로 들어감.
추가할 때는 이미 추가하지 않은 라인만 넣어주도록 한다. 
*/

const [n, m, ...numbers] = `4 2
9 7 9 1`
  .trim()
  .split(/\s/)
  .map(Number);
const sortedNumbers = numbers.sort((a, b) => a - b);
const lines = [];
const s = [];
fillLine();
console.log(lines.join('\n'));

function fillLine() {
  if (s.length === m) {
    const line = [...s].map((index) => sortedNumbers[index]).join(' ');
    if (!lines.includes(line)) {
      lines.push(line);
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!s.includes(i)) {
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}
