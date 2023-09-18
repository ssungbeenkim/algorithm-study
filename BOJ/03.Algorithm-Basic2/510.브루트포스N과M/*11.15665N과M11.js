/* 
중복을 허용한다. 같은 수를 여러번 골라도 된다. 
*/

// 시간초과.
{
  const [n, m, ...numbers] = `4 4
1 1 2 2`
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
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}
// 시간초과 2
{
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
      const line = s.join(' ');
      lines.includes(line) || lines.push(line);
      return;
    }
    sortedNumbers.forEach((v) => {
      s.push(v);
      fillLine();
      s.pop();
    });
  }
}

// 통과한 풀이
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
/* 초기 배열에서 중복을 제거해 주면 중복된 line이 발생하지 않기 때문에 
마지막에 lines 중복을 확인하지 않아도 된다.  */
