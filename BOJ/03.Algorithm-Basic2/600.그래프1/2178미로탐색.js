/* 
bact tracking 하면서 인접한 경로를 타고 이동. 
N,M에 도착하면 경로 횟수를 업데이트 
dfs로 풀이 
*/
{
  // 시간초과
  const [rc, ...lines] = `4 6
  101111
  101010
  101011
  111011`
    .trim()
    .split('\n');

  const [row, col] = rc.split(' ').map(Number);
  const matrix = lines.map((line) => line.split('').map(Number));
  const visited = Array.from({ length: row }, () => Array(col).fill(0));
  const visitMap = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  let minDistance = Number.MAX_SAFE_INTEGER;
  let passed = 1;
  visited[0][0] = 1;
  dfs(0, 0);
  console.log(minDistance);

  function dfs(r, c) {
    if (r === row - 1 && c === col - 1) {
      minDistance = Math.min(minDistance, passed);
      return;
    }
    for (let i = 0; i < 4; i++) {
      const [toX, toY] = visitMap[i];
      const x = r + toX;
      const y = c + toY;
      if (x < 0 || y < 0 || x === row || y === col) continue;
      if (visited[x][y]) continue;
      if (matrix[x][y]) {
        visited[x][y] = 1;
        passed++;
        dfs(x, y);
        visited[x][y] = 0;
        passed--;
      }
    }
  }
}
/* 왜 시간초과가 날까.
DFS로 풀면 모든 경로를 탐색해야 하니 완전탐색을 하는것이 된다. 
입력이 100*100까지 들어올 수 있으므로 시간초과가 나는것. 
BFS로 풀어야 한다. 
*/

{
  //bfs로 푸니 바로 풀림
  const [rc, ...lines] = `4 6
  101111
  101010
  101011
  111011`
    .trim()
    .split('\n');

  const [row, col] = rc.split(' ').map(Number);
  const matrix = lines.map((line) => line.split('').map(Number));
  const visited = Array.from({ length: row }, () => Array(col).fill(0));
  const visitMap = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  // 큐의 첫번째 값
  visited[0][0] = 1;
  const q = [[0, 0, 1]];

  while (q.length) {
    const [r, c, d] = q.shift(); // 뎁스임
    if (r === row - 1 && c === col - 1) {
      console.log(d);
      return;
    }
    for (let i = 0; i < 4; i++) {
      // 사방에 있는 놈들 중 건사한놈만 넣어버려
      const [toX, toY] = visitMap[i];
      const x = r + toX;
      const y = c + toY;
      if (x < 0 || y < 0 || x === row || y === col) continue;
      if (visited[x][y]) continue;
      if (matrix[x][y]) {
        visited[x][y] = 1;
        q.push([x, y, d + 1]);
      }
    }
  }
}
/* 그렇다. 최단 경로를 찾는 문제와 같은 경우에는 모든 경로를 탐색하게 되면 그냥 완전탐색이 되는수 있다. 
bfs로 바로 풀자. 
*/
