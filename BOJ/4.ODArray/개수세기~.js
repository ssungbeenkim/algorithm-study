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

  console.log(
    input
      .slice(2)
      .filter((v) => v < input[1])
      .join(' ')
  );
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

{
  // 5597 과제 안낸놈 나와
  // 1. 입력배열. 정렬sort. 1~30 있는 배열에서 빼주고, join
  // 2. 1~30있는 배열 만들기, 그 배열에서 있는지 확인
  // 3. 입력된 배열에서 1~30 돌리면서 있는지 확인해서 없는것만 새로운 배열에 넣어주고 join해서 반환하기

  // 3번이 간단할 것 같다.
  const fs = require('fs');
  const inputArray = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);

  const unSubmission = [];

  for (i = 1; i <= 30; i++) {
    if (!inputArray.includes(i)) {
      unSubmission.push(i);
    }
  }
  console.log(unSubmission.join('\n'));
}

{
  // 2562 최대값
  const fs = require('fs');
  const inputArr = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);
  const maximumNum = Math.max(...inputArr);
  console.log(maximumNum);
  console.log(inputArr.indexOf(maximumNum) + 1);
}
