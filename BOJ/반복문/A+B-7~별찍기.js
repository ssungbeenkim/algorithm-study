// 쉬운 문제들은 하나씩 커밋할 필요가 없을 것 같다.

{
  // 11021 A+B-7
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  let results = [];
  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    results.push(`Case #${i}: ${a + b}`);
  }
  console.log(results.join(`\n`));
}

{
  // A+B - 8
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  let results = [];
  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    results.push(`Case #${i}: ${a} + ${b} = ${a + b}`);
  }
  console.log(results.join(`\n`));
}

// 2438별 찍기 -1
{
  // 풀이1
  const fs = require('fs');
  const input = `5`.trim();
  const num = Number(input);
  const result = Array.from({ length: num }, (v, i) => '*'.repeat(i + 1));
  const result = [];
  for (let i = 1; i < num + 1; i++) {
    const starArr = [];
    for (let j = 0; j < i; j++) {
      starArr.push(`*`);
    }
    result.push(starArr.join(''));
  }
  console.log(result.join('\n'));
}
{
  //풀이 2
  const fs = require('fs');
  const input = `5`.trim();
  const num = Number(input);
  const result = Array.from({ length: num }, (v, i) => '*'.repeat(i + 1));
  console.log(result.join('\n'));
}

// 2349 별 찍기 -2
{
  const input = `5`.trim();
  const num = Number(input);
  const result = Array.from(
    { length: num },
    (v, i) => `${' '.repeat(num - (1 + i))}${'*'.repeat(i + 1)}`
  );
  console.log(result.join('\n'));
} // 이전 문제의 코드를 조금만 수정하면 됨

{
  //10952 A + B - 5
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  let results = [];
  for (let i = 0; i < input.length - 1; i++) {
    const [a, b] = input[i].trim().split(' ').map(Number);
    results.push(a + b);
  }
  console.log(results.join(`\n`));
} // 입출력에 관해서는 아직 잘 모르겠다. 풀이 로직에 집중해서 풀도록 하자.

{
  //10951 A + B - 4
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  let results = [];
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].trim().split(' ').map(Number);
    results.push(a + b);
  }
  console.log(results.join(`\n`));
}

{
  // 1110 더하기 사이클
  const fs = require('fs');
  const stN = `${fs.readFileSync('dev/stdin')}`.trim();
  const input = Number(stN);
  let count = 0;
  let newNum;
  function printCount(n) {
    if (n < 10) {
      newNum = n * 10 + n;
    } else {
      newNum = (((n % 10) + Math.trunc(n / 10)) % 10) + (n % 10) * 10;
    }
    count++;
    if (newNum === input) {
      console.log(count);
    } else {
      printCount(newNum);
    }
  }

  printCount(input);
}

{
  // 이렇게 풀어봤는데 시간초과가 났다.
  const fs = require('fs');
  const stN = `${fs.readFileSync('dev/stdin')}`.trim();
  const input = Number(stN);
  let count = 0;
  let newNum = input;
  function printCount(n) {
    do {
      count++;
      n < 10
        ? (newNum = newNum * 10 + newNum)
        : (newNum =
            (((newNum % 10) + Math.trunc(newNum / 10)) % 10) +
            (newNum % 10) * 10);
    } while (newNum !== input);
    console.log(count);
  }

  printCount(input);
}

{
  // if문 부분만 삼항연산자로 바꿔서 통과.
  const fs = require('fs');
  const stN = `${fs.readFileSync('dev/stdin')}`.trim();
  const input = Number(stN);
  let count = 0;
  let newNum;
  function printCount(n) {
    n < 10
      ? (newNum = n * 10 + n)
      : (newNum = (((n % 10) + Math.trunc(n / 10)) % 10) + (n % 10) * 10);
    count++;
    if (newNum === input) {
      console.log(count);
    } else {
      printCount(newNum);
    }
  }

  printCount(input);
}
// 입력값이 작은 경우에는 재귀함수가 더 빠르고 입력값이 큰 경우에는 do whil문이 더 빠를 수 있다. 그래서 do while문이 통과과 되지 않은 것 같다.
