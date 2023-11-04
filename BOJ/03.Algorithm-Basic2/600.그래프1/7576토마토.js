/* 
잘 풀었다 생각했는데 왜 시간초과가 났을까?
bfs로 풀었는데 시간초과가 나니 당황잼
큐를 배열 말고 큐로 사용해보자. 
*/

const [cr, ...lines] = `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`
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

class Queue {
  constructor() {
    this.storage = new Map();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.storage.size;
  }

  add(item) {
    if (!this.storage.size) {
      this.storage.set(0, item);
    } else {
      this.storage.set(++this.rear, item);
    }
  }

  pop() {
    const item = this.storage.get(this.front);
    if (item == null) return null;
    if (this.storage.size === 1) {
      this.storage.clear();
      this.front = this.rear = 0;
    } else {
      this.storage.delete(this.front++);
    }
    return item;
  }
}

const q = new Queue();
let unripe = 0;

// 토마토박스 전격분석.
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    const cur = box[i][j];
    if (cur === 1) {
      q.add([i, j, 0]);
      continue;
    }
    if (cur === 0) {
      unripe++;
    }
  }
}

// 익은게 하나도 없으면 못익힘
if (!q.size()) console.log(-1);
// 안익은게 없음
if (!unripe) {
  console.log(0);
} else {
  // 안익은게 있으니 익히자
  while (q.size()) {
    const [r, c, d] = q.pop();
    for (let i = 0; i < 4; i++) {
      const [toX, toY] = WESN[i];
      const x = r + toX;
      const y = c + toY;
      if (x >= 0 && y >= 0 && x < row && y < col && box[x][y] === 0) {
        box[x][y] = 1;
        q.add([x, y, d + 1]);
        unripe--;
      }
    }
    if (!q.size()) {
      console.log(unripe ? -1 : d);
    }
  }
}

// 정답
