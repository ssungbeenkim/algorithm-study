//2566번 최댓값
// 2차원 배열로 받아서, flat한 값을 찾은 뒤, 한줄씩 들여와서 있는지 확인하자. Math.max()
// 한줄씩 index와 함께 들여와서 최댓값이 있는지 확인. 있으면 index+1이 행의 값, 열의 값은 indexof로

const inputArr = `
3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const maxNum = Math.max(...[...inputArr].flat());
let rowNum;
let columnNum;

inputArr.forEach((v, i) => {
  if (v.includes(maxNum)) {
    rowNum = i + 1;
    columnNum = v.indexOf(maxNum) + 1;
  }
});

console.log(`${maxNum}\n${rowNum} ${columnNum}`);
