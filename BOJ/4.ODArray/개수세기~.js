{
  //10807
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split('\n');

  // 2번째 줄 인풋을 가지고 반복문을 돌려서 2가 있으면 count up 하고 마지막에 출력하기로 한다.

  const arr = input[1].split(/\s/).map(Number);
  const num = Number(input[2]);

  function printNumCount(arr, num) {
    let count = 0;
    arr.forEach((v) => {
      if (v === num) {
        count++;
      }
    });
    console.log(count);
  }

  printNumCount(arr, num);
}

//10871
{
  const fs = require('fs');
  const input = `10 5
1 10 4 9 2 3 8 5 7 6`
    .trim()
    .split(/\s/)
    .map(Number);

  // console.log(
  //   input
  //     .slice(2)
  //     .filter((v) => v < input[1])
  //     .join(' ')
  // );
}

{
  // 개선 코드 => Array Destructing
  const fs = require('fs');
  const input = `10 5
1 10 4 9 2 3 8 5 7 6`
    .trim()
    .split(/\s/)
    .map(Number);

  const [_, n, ...numbers] = input;
  const answer = numbers.filter((v) => v < n).join(' ');
  console.log(answer);
}

{
  //10818 최소, 최대
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);

  const [numberOfInputs, ...InputNumbers] = input;

  console.log(Math.min(...InputNumbers));
  console.log(Math.max(...InputNumbers));
}
