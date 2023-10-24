/* 
여러 줄의 테스트가 들어온다. 
dfs로 풀면 될것같다. 이전에 풀었던 단지번호붙이기와 크게 다른점이 없이 풀 수 있다. 
*/

const inputLines = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`
  .trim()
  .split('\n');
let curLine = 0;
const answerArr = [];
let visited;
let island = 0;
let curMap;
let col;
let row;

while (curLine < inputLines.length) {
  const [c, r] = inputLines[curLine].split(' ').map(Number);
  if (c == 0 && r == 0) break;
  const map = [];
  for (let i = 0; i < r; i++) {
    map.push(inputLines[++curLine].split(' ').map(Number));
  }
  updateAnswerArr(c, r, map);
  curLine++;
}
console.log(answerArr.join('\n'));

function updateAnswerArr(c, r, map) {
  visited = Array.from({ length: r }, () => Array(c).fill(0));
  island = 0;
  curMap = map;
  col = c;
  row = r;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (visited[i][j]) continue;
      if (!map[i][j]) {
        visited[i][j] = 1;
        continue;
      }
      island++;
      dfs(i, j);
    }
  }
  answerArr.push(island);
}

function dfs(i, j) {
  visited[i][j] = 1;
  for (let x = i - 1; x <= i + 1; x++) {
    for (let y = j - 1; y <= j + 1; y++) {
      if (x < 0 || y < 0 || x === row || y === col) continue;
      if (visited[x][y]) continue;
      if (curMap[x][y]) {
        dfs(x, y);
      } else {
        visited[x][y] = 1;
      }
    }
  }
}
