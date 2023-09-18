/* 
중복을 허용하되 비내림차순이어야 한다. 
값을 추가할 때 확인해주면 될 것. 
*/

const [n, m, ...numbers] = `4 2
9 7 9 1`
  .trim()
  .split(/\s/)
  .map(Number);

const uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);
const lines = [];
const s = [];
fillLine();
console.log(lines.join('\n'));

function fillLine() {
  if (s.length === m) {
    lines.push(s.join(' '));
    return;
  }
  uniqueSortedNumbers.forEach((v) => {
    if (s.length === 0 || s.at(-1) <= v) {
      s.push(v);
      fillLine();
      s.pop();
    }
  });
}
