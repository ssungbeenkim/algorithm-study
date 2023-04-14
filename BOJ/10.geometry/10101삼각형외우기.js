// 우선 셋을 만들어서
// 모든 값을 더해보고 180 아니면 Error
// 셋의 요소 수 구해서 3개면 Equilateral, 2개면 Isosceles, 1개면 Scalene

const arr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);

function findTriangleType(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  if (sum !== 180) {
    return 'Error';
  }
  const set = new Set(arr);
  switch (set.size) {
    case 3:
      return 'Scalene';
    case 2:
      return 'Isosceles';
    case 1:
      return 'Equilateral';
  }
}

console.log(findTriangleType(arr));
