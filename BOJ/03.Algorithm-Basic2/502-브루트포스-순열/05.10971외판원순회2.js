/*
1~n까지의 수로 만들 수 있는 모든 순열 생성 - 재사용할것이다. 
순열을 따라서 비용을 계산 
가장 적은 값을 출력 
 */

// 메모리 초과! 풀이는 맞는것 같은데, 최적화가 필요한것같다.
{
  const [N, ...lines] = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`
    .trim()
    .split('\n');

  const mat = lines.map((v) => v.split(' ').map(Number));
  const n = Number(N);
  const routes = [];
  const s = [];
  fillRoute();
  const costs = [];
  routes.forEach(fillcosts);
  console.log(Math.min(...costs));

  function fillcosts(route) {
    let cost = 0;
    for (let i = 0; i < N; i++) {
      const part = mat[route[i]][route[i + 1]];
      cost += part;
    }
    costs.push(cost);
  }

  function fillRoute() {
    if (s.length === n) {
      routes.push([...s, s[0]]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!s.includes(i)) {
        s.push(i);
        fillRoute();
        s.pop();
      }
    }
  }
}
/* 
메모리 사용 줄이기 - 전답! 
1. cost를 다 저장하지 말고 업데이트 하도록 한다. 0
2. route를 저장하지 말고 하나 생성될 때마다 업데이트를 진행. 
3. 값이 0인 경로를 만나면 그 경로는 더이상 비용계산 x
*/
{
  const [N, ...lines] = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`
    .trim()
    .split('\n');

  const mat = lines.map((v) => v.split(' ').map(Number));
  const n = Number(N);
  let minCost = Number.MAX_SAFE_INTEGER;
  const s = [];
  updateCostWithRoute();
  console.log(minCost);

  function updateCost(route) {
    let cost = 0;
    for (let i = 0; i < N; i++) {
      const part = mat[route[i]][route[i + 1]];
      if (part === 0) {
        return;
      }
      cost += part;
    }
    if (cost < minCost) {
      minCost = cost;
    }
  }

  function updateCostWithRoute() {
    if (s.length === n) {
      const route = [...s, s[0]];
      updateCost(route);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!s.includes(i)) {
        s.push(i);
        updateCostWithRoute();
        s.pop();
      }
    }
  }
}

/* 
처음에 쓸데없이 모든 경로와 비용을 저장해 두는 메모리 낭비를 하여 틀렸던 듯 하다. 
개선하니 바로 정답 처리가 되었다. 
*/
