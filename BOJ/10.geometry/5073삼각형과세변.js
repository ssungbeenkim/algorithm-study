// 2차원 배열 만들고, 한줄씩. 합이 0이 아니면, set 해서 갯수에 따라..

const arr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

arr.forEach(printTriangleType);

function printTriangleType(arr) {
  if (triangleValidator(arr)) {
    const set = new Set(arr);
    switch (set.size) {
      case 1:
        console.log('Equilateral');
        return;
      case 2:
        console.log('Isosceles');
        return;
      case 3:
        console.log('Scalene');
        return;
    }
  } else {
    if (arr[0] === 0) {
      return;
    } else {
      console.log('Invalid');
    }
  }
}

function triangleValidator(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] + arr[1] <= arr[2]) {
    return false;
  } else {
    return true;
  }
}
