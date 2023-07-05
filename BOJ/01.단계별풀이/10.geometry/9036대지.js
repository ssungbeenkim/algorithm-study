// 입력을 받아서 X끼리 모으고 Y끼리 모아서
// X,Y의 최소, 최대값의 차이의 절대값을 구해 곱하면 된다.
const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n');
xArr = [];
yArr = [];
for (i = 1; i <= Number(inputArr[0]); i++) {
  const [x, y] = inputArr[i].split(' ');
  xArr.push(x);
  yArr.push(y);
}
xArr.map(Number);
yArr.map(Number);

function findDiffence(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

console.log(findDiffence(xArr) * findDiffence(yArr));
