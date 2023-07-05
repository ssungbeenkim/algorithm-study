//중앙 이동 알고리즘?
// 규칙 5, 16
// 한변의 점 갯수를 구하면, 제곱하면 점의 갯수가 된다. 규칙을 찾아보자.
// 0 1 2 3 4 5 (실행횟수)
// 1 2 4 8 16 (정사각형갯수)
// 2 3 5 9 17 (한변의 점)

// 정사각형의 갯수는 초기 1개이고 2, 4, 8, 16 ... 2의 제곱으로 늘어난다.
// 다음 실행에서 점이 늘어나는 수는 이전 정사각형의 수만큼 늘어난다.
const input = `${require('fs').readFileSync('dev/stdin')}`.trim().split(/\s/);

function checkDotCount(n) {
  let dotCountOfSide = 2;
  for (i = 0; i < n; i++) {
    dotCountOfSide += Math.pow(2, i);
  }
  return dotCountOfSide * dotCountOfSide;
}

console.log(checkDotCount(Number(input)));
