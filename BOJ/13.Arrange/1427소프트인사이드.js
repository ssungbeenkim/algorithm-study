// const inputArr = `${require('fs').readFileSync('dev/stdin')}`
//   .trim()
//   .split(/\s/)
//   .map(Number);
// console.log(inputArr.sort((a, b) => b - a).join(''));

const inputArr = `2143`.trim().split('').map(Number);
console.log(inputArr.sort((a, b) => b - a).join(''));
