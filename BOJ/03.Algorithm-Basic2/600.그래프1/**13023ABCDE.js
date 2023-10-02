/* 
그래프 첫번째 문제 
사람수, 관계 수, 관계 내역이 주어진다. 
관계를 어떻게 나타낼 수 있을까? 
얘전에 그래프 비슷하게 풀었던 문제가 있는것같은데. 

적당한 방법이 떠오르지 않아서 그래프를 다루는 방법을 배워보기로 한다. 
https://sarah950716.tistory.com/12 - 인접행렬과 인접리스트 
인접행렬 또는 인접리스트를 활용할 수 있을 것 같다. 

입력된 관계는 인접행렬 또는 인접리스트의 형태로 저장이 가능하다. 

그렇게 저장해 둔 관계에서, 주어진 조건과 맞는 조건의 경우가 있는지를 확인해야 한다. 

어떻게 확인할 수 있을까?  

사람의 수는 N개라고 했으며 주어진 정수는 0 ~ N-1 사이에서 존재하므로 0부터 N-1의 값이 될 것이다. 
그러므로 해당 구간의 수들로 만들어 질 수 있는 수열들에서 주어진것과 같이 5번이 이어지는 관계가 있는지 
확인하면 될 것 같다. 
이렇게 할거면, 5개를 뽑는 순열을 만들면서 그 안에서 관계가 있는지 찾아보고 있으면 바로 1 리턴, 없으면 0
이렇게 해도 될 것 같고. 

*/

/* 
try 1
시간초과가 났다. 사실 작성하다가 굳이 수열을 다 만들 필요 없이 dfs로 탈락시켜가면서 푸는게 어떨까 
하는 생각이 들기는 했었다.  
*/
{
  const [[n, m], ...lines] = `8 8
1 7
3 7
4 7
3 4
4 6
3 5
0 4
2 7`
    .trim()
    .split('\n')
    .map((l) => l.split(' ').map(Number));

  const adjacentList = Array(n)
    .fill(null)
    .map(() => Array());
  lines.forEach((l) => {
    const [a, b] = l;
    adjacentList[a].push(b);
    adjacentList[b].push(a);
  });

  const elements = [];
  for (let i = 0; i < n; i++) {
    elements.push(i);
  }
  const permutations = getPermutations(elements, 5);
  printAnswer();

  function printAnswer() {
    for (p of permutations) {
      if (isFulfill(p)) {
        console.log(1);
        return;
      }
    }
    console.log(0);
  }
  function isFulfill(p) {
    for (let i = 1; i < 5; i++) {
      if (!adjacentList[p[i - 1]].includes(p[i])) {
        return false;
      }
    }
    return true;
  }

  function* getPermutations(elements, selectNumber) {
    for (let i = 0; i < elements.length; i++) {
      if (selectNumber === 1) {
        yield [elements[i]];
      } else {
        const fixed = elements[i];
        const rest = [...elements.slice(0, i), ...elements.slice(i + 1)];
        for (a of getPermutations(rest, selectNumber - 1)) {
          yield [fixed, ...a];
        }
      }
    }
  }
}

// dfs로 풀어보았으나 시간초과. 뭔가 잘못되었다.
{
  const [[n, _], ...lines] = `8 8
  1 7
  3 7
  4 7
  3 4
  4 6
  3 5
  0 4
  2 7`
    .trim()
    .split('\n')
    .map((l) => l.split(' ').map(Number));

  const adjacentList = Array(n)
    .fill(null)
    .map(() => Array());
  lines.forEach((l) => {
    const [a, b] = l;
    adjacentList[a].push(b);
    adjacentList[b].push(a);
  });
  const isChecked = Array(n).fill(0);
  let flag = 0;
  for (let i = 0; i < n; i++) {
    // 첫 방문 노드를 지정해준다.
    isChecked[i] = 1;
    dfs(i, 0);
    isChecked[i] = 0;
  }
  console.log(flag);
  //dfs
  function dfs(cur, checkedCount) {
    if (flag) return;
    if (checkedCount === 4) {
      // 4개의 노드까지 다음 값과 이어져 있었고. 그 값을 넘겨받았으므로
      // 확인되었으므로 5개의 값이 연속적으로 이어져 있는것.
      flag = 1;
      return;
    }

    for (let next = 0; next < n; next++) {
      // 현재 인덱스의 adj 인덱스 리스트에 다음값이 있는지 확인.
      // 다음값에는 방문하지 않은 값만이 들어올 수 있으며
      // dfs에 넘기는 다음값은 현재 값과 이어져 있는 값만 넘긴다.
      if (isChecked[next]) continue;
      if (adjacentList[cur].includes(next)) {
        isChecked[next] = 1;
        dfs(next, checkedCount + 1);
        isChecked[next] = 0;
      }
    }
  }
}
// 관계는 최대 2000개까지 들어올 수 있다. includes 에서 확인할 때, 최대 2000*2000을 확인해야 하므로 시간초과가 나는 것 같다.

// 정답!
{
  const input = `5 4 
  0 1
  1 2
  2 3
  3 4`.split('\n');
  const [N, M] = input[0].split(' ').map((v) => +v);
  const adjArr = Array.from({ length: N }, () => Array(0));
  const checked = new Array(N).fill(0);
  let unoBell = 0;

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map((v) => +v);
    adjArr[a].push(b);
    adjArr[b].push(a);
  } // 인접리스트에 a->b, b->a 관계를 각각 넣어준다.

  for (let i = 0; i < N; i++) {
    dfs(i, 0); // 처음 방문할 노드를 선택한다.
  }

  function dfs(L, cnt) {
    if (unoBell) return;
    checked[L] = 1;
    if (cnt === 4) {
      unoBell = 1;
      return;
    }

    for (let i = 0; i < adjArr[L].length; i++) {
      const next = adjArr[L][i];
      if (!checked[next]) {
        dfs(next, cnt + 1); // 방문하지 않았던 연결된 노드로 cnt+1과 함께 dfs를 호출한다.
      }
    }
    checked[L] = 0; // 방문했던 노드는 다시 미방문 처리한다.
  }

  console.log(unoBell);
}
