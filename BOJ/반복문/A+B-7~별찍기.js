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
