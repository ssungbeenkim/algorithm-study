const input = `${require('fs').readFileSync('dev/stdin')}`.trim().split('\n');

const paper = Array.from({ length: 100 }, () =>
  Array.from({ length: 100 }, () => 0)
);
// 100 x 100 크기의 2차원 배열을 0으로 초기화합니다.

let count = 0; // 검은 영역의 넓이를 저장할 변수입니다.

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  // 색종이의 위치를 입력받습니다.
  for (let j = y; j < y + 10; j++) {
    for (let k = x; k < x + 10; k++) {
      paper[j][k] = 1;
      // 색종이가 차지하는 영역을 1로 표시합니다.
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j] === 1) {
      count++;
      // 검은 영역의 넓이를 계산합니다.
    }
  }
}

console.log(count);
// // 검은 영역의 넓이를 출력합니다.
