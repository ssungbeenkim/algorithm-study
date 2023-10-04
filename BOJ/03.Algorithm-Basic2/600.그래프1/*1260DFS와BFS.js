/* 
노드 , 간선, 시작번호 
작은것부터 방문 
노드 번호는 1~N이다. 

bfs는 어떻게 구현해야 할까?
그렇다면, dfs는 어떻게 구현할 수 있나?
-> 재귀로 구현하는 편이 간단한 경우가 많다. 
두 정점 사이에 여러개의 간선이 있을 수 있다. 

많은 문제가 shift로 큐를 구현해도 문제가 없다고 하지만 배우는 과정으로 생각하고 큐를 구현해서 
해결하도록 한다. 

*/

const [ves, ...lines] = `5 5 3
5 4
5 2
1 2
3 4
3 1`
  .trim()
  .split('\n');

const [v, e, s] = ves.split(' ').map(Number);
const al = Array.from({ length: v + 1 }, () => Array(0));
lines.forEach((l) => {
  const [a, b] = l.split(' ').map(Number);
  al[a].push(b);
  al[b].push(a);
});
const sortedAl = al.map((a) => a.sort((a, b) => a - b));
const visited = Array(v + 1).fill(0);

// dfs
// 방문표시, 결과추가, 방문된 적 없는 연결된 정점들을 정렬된 순서로 호출하여 추가
// visited를 하나 사용하는게 매번 배열을 돌며 있는지 확인하는 것보다 나을것.
const dfsResult = [];
function dfs(i) {
  visited[i] = 1;
  dfsResult.push(i);
  sortedAl[i].forEach((e) => {
    if (!visited[e]) {
      dfs(e);
    }
  });
}
dfs(s);
console.log(dfsResult.join(' '));

// bfs
// 큐 선언 (순서 확인해보기)

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
// visited 초기화(재활용할것임)
// result 배열 선언
visited.fill(0);
const bfsResult = [];
const q = new Queue();
q.add(s); // 재귀함수에서..그냥 while문으로 해도
visited[s] = 1;
// 큐가 빌때까지 반복.
// 큐에서 꺼내서 결과에 추가.
// 큐에 노방문 연결들을 집어넣고 방문체크 해준다.(큐에 들어가면 뽑힐 친구이므로 방문된거로 쳐줌)
// 큐가 빌때까지 반복
while (q.size()) {
  const n = q.pop();
  bfsResult.push(n);
  sortedAl[n].forEach((v) => {
    if (!visited[v]) {
      q.add(v);
      visited[v] = 1;
    }
  });
}
console.log(bfsResult.join(' '));

// BFS를 처음 적용해본 문제. 채점도 굉장히 빨랐다.
