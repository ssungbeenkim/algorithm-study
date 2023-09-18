/* 
비내림차순 출력. 
우선 원배열을 오름차순으 정렬해둔 뒤에 같거나 클 경우에만 추가하며 백트래킹 방식으로 추가해나간다. 
값으로 검사하면 각 수열의 수를 따로 인식할 수 없으므로 인덱스로 접근하여 검사하고 추가하며 
s 배열이 비어있으면 무조건 추가하고 s에 없는 인덱스이면서 인덱스로 값을 참조해서 마지막으로 
들어간 값보다 크거나 같은 경우에만 인덱스가 들어갈 수 있게 하였다. 
그리고 lines에 값을 추가할 때는 원배열을 참조하여 해당 인덱스의 값으로 바꿔 line을 만들고 
이미 있는 값이 아니면 추가될 수 있도록 해주었다. 
*/

const [n, m, ...numbers] = `3 1
4 4 2`
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
    const line = [...s].map((v) => sortedNumbers[v]).join(' ');
    if (!lines.includes(line)) {
      lines.push(line);
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (
      s.length === 0 ||
      (!s.includes(i) && sortedNumbers[s.at(-1)] <= sortedNumbers[i])
    ) {
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}

{
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
      s.push(v);
      fillLine();
      s.pop();
    });
  }
}
