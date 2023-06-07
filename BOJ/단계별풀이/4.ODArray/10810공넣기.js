// 새로 추가된 문제.
// 바구니 N개, 공 M번 넣을것임

// 1 2 3 4 5
// 3 3
//     4 4
// 1 1 1 1
//   2

// 1 2 1 1 0 => 출력

// 배열에 N개의 0을 넣어 초기화 하고,
// 각 줄을 받아서 해당 인덱스의 값을 바꾼다. => fill() 메서드를 활용해 쉽게 바꿔줄 수 있음.

const fs = require('fs');
const inputArr = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);

const [N, M] = inputArr[0].split(' ').map(Number);
const ballInsertProtocolArr = inputArr.slice(1);
const basket = new Array(N).fill(0);
ballInsertProtocolArr.forEach((v) => {
  const [s, f, n] = v.split(' ').map(Number);
  basket.fill(n, s - 1, f);
});

console.log(basket.join(' '));
