/*
토마토는 익으면 하루하루 한칸씩 전염되어 익는다.

처음에 입력 받은 것을 한번 훑어서,
익은것의 좌표를 큐에 넣어둔다. (익어있던 것들이 다음날부터 주변 익힘)
이때 일자를 체크해야 하므로 좌표와 함께 일자 넣는것 고려
앞으로 익힐 토마토 개수 체크해둔다.

처음에 익힐 토마토 0이면 0출력 바로 하고 종료
큐가 비었는데 익힐 토마토 남았으면 -1출력
큐 종료 되고 익힐 토미토도 0이면 일자를 출력(밖에서 트레킹 해야할것 같다)
*/
{
  // 시간초과.
  const [cr, ...lines] = `2 2
1 -1
-1 1`
    .trim()
    .split('\n');

  const [col, row] = cr.split(' ').map(Number);
  const box = lines.map((line) => line.split(' ').map(Number));
  const WESN = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  const q = [];
  let unripe = 0;

  // 토마토박스 전격분석.
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const cur = box[i][j];
      if (cur === 1) {
        q.push([i, j, 0]);
        continue;
      }
      if (cur === 0) {
        unripe++;
      }
    }
  }

  // 익은게 하나도 없으면 못익힘
  if (!q.length) console.log(-1);
  // 안익은게 없음
  if (!unripe) {
    console.log(0);
  } else {
    // 안익은게 있으니 익히자
    while (q.length) {
      const [r, c, d] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [toX, toY] = WESN[i];
        const x = r + toX;
        const y = c + toY;
        if (x >= 0 && y >= 0 && x < row && y < col && box[x][y] === 0) {
          box[x][y] = 1;
          q.push([x, y, d + 1]);
          unripe--;
        }
      }
      if (!q.length) {
        console.log(unripe ? -1 : d);
      }
    }
  }
}
