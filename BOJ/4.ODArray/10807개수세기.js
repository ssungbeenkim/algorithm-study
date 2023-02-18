const fs = require('fs');
const input = `11
1 4 1 2 4 2 4 2 3 4 4
2`
  .trim()
  .split('\n');

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
