/* 
정사각형 모양의 지도 
연결된 집의 개수와 오름차순으로 집의 개수를 차례로 출력. 
입력 지도크기 , 정방형 집의 정보

이전과 달리 행렬의 형태로 들어오는 입력. 
모든 요소로 DFS를 수행하는데, 행렬에서 1이면서 visit하지 않은것만 수행. 
수행횟수 -> 단지 갯수 
재귀 호출 횟수 -> answer배열에 추가후 초기화 
출력. 
*/

const [N, ...mLines] = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
  .trim()
  .split('\n');
const n = Number(N);
const matrix = mLines.map((l) => l.split('').map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(0));
let ComplexCount = 0;
const householdes = [];
let houseCount = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && matrix[i][j]) {
      ComplexCount++;
      dfs(i, j);
      householdes.push(houseCount);
      houseCount = 0;
    }
  }
}
console.log(ComplexCount);
console.log(householdes.sort((a, b) => a - b).join('\n'));

function dfs(row, col) {
  houseCount++;
  visited[row][col] = 1;
  // 들어온 노드에 상하좌우에 연결된것 중 방문하지 않은것 들을 dfs 호출할것.
  if (row && !visited[row - 1][col]) {
    matrix[row - 1][col] && dfs(row - 1, col);
  }
  if (row < n - 1 && !visited[row + 1][col]) {
    matrix[row + 1][col] && dfs(row + 1, col);
  }
  if (col < n - 1 && !visited[row][col + 1]) {
    matrix[row][col + 1] && dfs(row, col + 1);
  }
  if (col && !visited[row][col - 1]) {
    matrix[row][col - 1] && dfs(row, col - 1);
  }
}
