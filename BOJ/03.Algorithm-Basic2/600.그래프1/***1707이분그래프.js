/* 
이분그래프 
판별방법
탐색을 하면서, 번갈아가며 다른 색으로 체크한다. 
이미 칠해져 있는 색인데, 칠하려는 색과 다른 색이라면? 이분 그래프가 아니라고 볼 수 있을 것. 

근데, 독립적으로 연결 없이 존재하는 것은 탐색할 필요가 없을것이다. 무슨 색으로 칠해도 됨
처음부터 있는것만 탐색하고, 길이가 없는 인접행렬은 임의로 칠하고 들어가는것도 좋을 것 같음. 

인접 리스트에서 
길이가 있는 것들에 대하여 탐색을 수행
무사히 통과된다면 pass 
중간에 문제가 있다면 NO 하면 되지 않을까 싶다.

test case는 5개가 최대이고, 각 케이스에서 정점은 2만개, 간선은 20만개까지 들어올 수있음
*/

{
  const [K, ...lines] = `2
5 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`
    .trim()
    .split('\n');

  const k = Number(K);
  const edges = lines.map((l) => l.split(' ').map(Number));

  // 인접행렬을 가지고 있는 2차원 배열 생성
  const adjs = [];
  let readingLine = 0;
  while (adjs.length !== k) {
    const [v, e] = edges[readingLine++];
    const adj = Array.from({ length: v + 1 }, () => Array(0));
    const till = readingLine + e;
    for (let i = readingLine; i < till; i++) {
      const [n1, n2] = edges[i];
      adj[n1].push(n2);
      adj[n2].push(n1);
      readingLine++;
    }
    adjs.push(adj);
  }
  console.log(adjs);

  function print(adj) {
    const n = adj.length - 1;

    const visited = new Array(n + 1).fill(0);

    const bfs = (start) => {
      const queue = [];
      queue.push(start);

      while (queue.length) {
        const cur = queue.shift();
        // 연결된 정점이 있는 경우에만 for문 실행됨
        for (let i = 0; i < adj[cur].length; i++) {
          const next = adj[cur][i];
          if (!visited[next]) {
            // 다음 노드가 방문한 적 없는 노드이면
            if (visited[cur] === 1) {
              // 현재 값 반대색 색칠하고 큐에 넣음.
              visited[next] = 2;
            } else {
              visited[next] = 1;
            }
            queue.push(next);
          } else if (visited[cur] === visited[next]) {
            // 방문한 적 있는 노드인데 지금 색과 같으면 즉시 bfs 종료
            // 다르면 탐색 이어서 진행.
            return;
          }
        }
      }
    };

    for (let i = 1; i <= n; i++) {
      // 연결 요소가 없는 것은 다 1로 칠해질것
      if (!visited[i]) {
        // 방문한적 없는 노드만 1로 색칠 후 bfs
        visited[i] = 1;
        bfs(i);
      }
    }

    // 인접한 두 요소가 같은색인 것이 있다면 바로 NO 출력하고 루프 종료. fleg번경.
    let flag = true;
    loop1: for (let i = 1; i <= n; i++) {
      for (let j = 0; j < adj[i].length; j++) {
        if (visited[i] === visited[adj[i][j]]) {
          console.log('NO');
          flag = false;
          break loop1;
        }
      }
    }
    if (flag) {
      console.log('YES');
    }
  }

  adjs.forEach(print);
}
