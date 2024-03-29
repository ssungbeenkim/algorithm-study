/* 
나이트는 몇번 움직이면 원하는 칸으로 움직일 수 있을까?
시작점에서 한회씩 이동하면서 카운트를 센다. 
그리고 도착하면 바로 몇번 걸렸는지 출력하면 된다. 
레벨을 기억하며 큐에 넣으면 될 것 같다. 
*/
const [caseNumber, ...input] = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`
  .trim()
  .split(/\s/)
  .map(Number);

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
    if (item === null) return null;
    if (this.storage.size === 1) {
      this.storage.clear();
      this.front = this.rear = 0;
    } else {
      this.storage.delete(this.front++);
    }
    return item;
  }

  clear() {
    this.storage.clear();
    this.front = this.rear = 0;
  }
}

const q = new Queue();
const move = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

for (let i = 0; i < caseNumber; i++) {
  const [d, sx, sy, ex, ey] = input.slice(i * 5, i * 5 + 5);
  const visit = Array.from({ length: d }, () => Array(d).fill(0));
  q.add([sx, sy, 0]);
  visit[sx][sy] = 1;

  while (q.size()) {
    const [x, y, c] = q.pop();
    if (x === ex && y === ey) {
      console.log(c);
      q.clear();
      break;
    }
    for (let j = 0; j < 8; j++) {
      const [dx, dy] = move[j];
      const [nx, ny] = [x + dx, y + dy];
      if (nx < 0 || ny < 0 || nx >= d || ny >= d) continue;
      if (visit[nx][ny]) continue;
      visit[nx][ny] = 1;
      q.add([nx, ny, c + 1]);
    }
  }
}
