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

{
  // 3052 나머지
  const fs = require('fs');
  const inputArray = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);
  const divNumArr = inputArray.map((v) => v % 42);
  const deduplicationSet = new Set(divNumArr);
  console.log(deduplicationSet.size);
}

{
  // 1546 평균
  const fs = require('fs');
  const inputArray = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);
  const [subNum, ...scores] = inputArray;
  const M = Math.max(...scores);

  const average = scores
    .map((v) => ((v / M) * 100) / subNum)
    .reduce((a, c) => a + c, 0);
  console.log(average);
}

{
  // 8958 OX퀴즈
  const fs = require('fs');
  const inputArray = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  const [caseNum, ...caseArr] = inputArray;
  const answer = caseArr.map((v) => returnScore(v)).join('\n');
  console.log(answer);

  function returnScore(ox) {
    const l = ox.length;
    let count = 0;
    const scoreArr = [];
    const arr = ox.split('').forEach((v) => {
      if (v === `O`) {
        count++;
        scoreArr.push(count);
      } else {
        count = 0;
      }
    });
    score = scoreArr.reduce((a, c) => a + c, 0); //
    return score;
  }
} // 문제를 처음에 잘못이해해서 복잡한 풀이가 되어버림.

{
  // returnScore() 만 조금 변경해주었다.
  function returnScore(ox) {
    const l = ox.length;
    let count = 0;
    const scoreArr = [];
    ox.split('').forEach((v) => {
      if (v === `O`) {
        count++;
        scoreArr.push(count);
      } else {
        count = 0;
      }
    });
    return scoreArr.reduce((a, c) => a + c, 0);
  }
}

{
  // 4344 평균은 넘겠지
  const inputArr = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
    .trim()
    .split(`\n`);
  const answerArr = [];
  inputArr.slice(1).forEach(pushRatio);
  console.log(answerArr.join('\n'));

  function pushRatio(caseClass) {
    const scoreArr = caseClass.split(' ').map(Number).slice(1);
    const average = scoreArr.reduce((a, c) => a + c / scoreArr.length, 0);
    let aboveCount = 0;
    scoreArr.forEach((v) => {
      if (average < v) {
        aboveCount++;
      }
    });

    const num = ((aboveCount / caseClass[0]) * 100).toFixed(3);
    answerArr.push(`${num}%`);
  }
}
