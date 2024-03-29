/* 
방금 전 노드가 아닌 노드중에 같은 문자인 곳으로 계속 이동하다가 방문한 적이 있는 노드를 만나면 사이클이 완성된다.
기본적으로 외부에서는 모든 노드를 한번씩 탐색하되 사이클을 찾은 경우 탐색을 그만한다.  
결국 같은 인접한 노드중에 이전 노드가 아니고 같은 문자인 곳으로 계속 이동하다가 방문한 적이 있는 노드이면
사이클이 완성되는 것이다. 
*/

const [nm, ...boardLines] = `3 4
AAAA
ABCA
AADA`
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const board = boardLines.map((line) => line.split(''));
const visit = Array.from({ length: n }, () => Array(m).fill(false));
const ad = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let haveCycle = false;

function dfs(x, y, px, py, char) {
  if (visit[x][y]) {
    // 이미 방문한 노드면 사이클이므로 탐색 종료
    haveCycle = true;
    return;
  }

  visit[x][y] = true; // 현재 노드 방문 표시

  for (const [dx, dy] of ad) {
    // 인접 노드 탐색
    const nx = x + dx;
    const ny = y + dy;

    // 게임 보드 내에 있고, 이전 노드가 아니며, 같은 문자를 가진 노드인 경우 탐색 계속
    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (!(nx === px && ny === py) && board[nx][ny] === char) {
        dfs(nx, ny, x, y, char);
      }
    }
  }
}

// 모든 노드에 대하여 DFS 탐색 시작
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m && !haveCycle; j++) {
    // 사이클이 아직 발견되지 않았을 경우에만 계속 탐색
    if (!visit[i][j]) {
      dfs(i, j, -1, -1, board[i][j]);
    }
  }
}

// 결과 출력
console.log(haveCycle ? 'Yes' : 'No'); // 사이클이 존재하면 'Yes', 그렇지 않으면 'No' 출력
