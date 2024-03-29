/* 
## 파악 및 전략

순환선에 속하는 노드는 0
지선에 속하는 노드는 순환선까지의 거리를 출력하는 문제이다. 

순환선은 항상 존재하는가? 
각 노드와 순환선 사이의 거리를 구하라고 했으니 순환선은 있다고 가정한다. 
순환선이 존재하지 않으면 거리를 구할 대상이 없으니 순환선은 반드시 존재할 것이다. 
순환선은 한개만 존재할까? 
순환선과의 거리를 구하려면 순환선을 하나로 특정할 수밖에 없다. 
그러므로 순환선은 단 한개일 수밖에 없을것이다. 

먼저 그래프 정보를 받아서 순환선에 속하는 노드들을 파악한다. 
  인접리스트를 생성하고 dfs로 인접한 노드를 타고 이동하다가 
  이미 방문한 점을 만나면 그 점부터 사이클이 형성되었다보 볼 수 있을 것이다. 
  지나온 점을 순차적으로 저장해 오다가 사이클이 시작되는 점을 알게 되면 순환선 노드 집합을 형성 가능하다.
순환선에 속하지 않은 점들로부터 거리를 구해서 따로 저장한다. 
  dfs로 탐색하며 순환선까지의 거리를 저장한다. 
  이때 리스트를 저장하며 탐색해 인덱스를 활용해 지나온 다른 노드들과 순환선까지의 거리도 알 수 있을것이다.
공백 구분으로 출력. 
*/

const input = `51
1 2
2 3
3 4
4 5
5 6
6 7
7 8
8 9
9 10
10 11
11 12
12 13
13 14
14 15
15 16
16 17
17 18
18 19
19 20
20 21
21 22
22 23
23 24
24 25
25 26
26 27
27 28
28 29
29 30
30 31
31 32
32 33
33 34
34 35
35 36
36 37
37 38
38 39
39 40
40 41
41 42
42 43
43 1
11 44
44 45
45 46
46 47
34 48
48 49
49 50
50 51`
  .trim()
  .split(/\s/)
  .map(Number);

// 인접리스트 생성
const adj = Array.from({ length: input[0] + 1 }, () => []);
for (let i = 0; i < input[0]; i++) {
  const index = i * 2 + 1;
  adj[input[index]].push(input[index + 1]);
  adj[input[index + 1]].push(input[index]);
}

// 순환선 구하기
let cycle;
const visited = Array(input[0] + 1).fill(0);
function dfs(cur, prev = -1, passed = []) {
  if (visited[cur]) {
    if (cycle) return;
    cycle = passed.slice(passed.indexOf(cur));
    return;
  }
  visited[cur] = 1;
  for (let i = 0; i < adj[cur].length; i++) {
    const next = adj[cur][i];
    if (next !== prev) {
      dfs(next, cur, [...passed, cur]);
    }
  }
}
for (let i = 1; i <= input[0] && !cycle; i++) {
  dfs(i);
}

// 구한 순환선에 없는 노드들만 거리를 구한다.
const distances = Array(input[0] + 1).fill(0);

function getDistance(cur, prev = -1, passed = []) {
  // 순환선에 닿으면 passed 활용해서 distances 배열에 노드별 거리를 기록
  if (distances[cur]) {
    passed.forEach((v, i) => {
      distances[v] = distances[cur] + passed.length - i;
    });
    return;
  }
  // 이미 거리를 구한 노드일 경우 중복 계산을 피함
  if (cycle.includes(cur)) {
    passed.forEach((v, i) => {
      distances[v] = passed.length - i;
    });
    return;
  }

  for (let i = 0; i < adj[cur].length; i++) {
    const next = adj[cur][i];
    if (next !== prev) {
      getDistance(next, cur, [...passed, cur]);
    }
  }
}

for (let i = 1; i <= input[0]; i++) {
  if (!cycle.includes(i)) {
    getDistance(i);
  }
}

console.log(distances.slice(1).join(' '));
