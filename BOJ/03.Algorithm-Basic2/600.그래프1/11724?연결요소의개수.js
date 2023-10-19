/* 
무향그래프의 연결 요소 개수를 구하라. 
연결요소가 무엇? -> 섬같은 부분
어떻게 구할 수 있을까?
~ 0535까지 고민
정점은 1 ~ N 사이에서 들어온다. 

인접리스트로 나타냈을 때, 겹치는 값이 하나라도 있는 것들끼리 묶으면 될 것 같다. 
*/
{
  const [ve, ...c] = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`
    .trim()
    .split('\n');
  const [v, e] = ve.split(' ').map(Number);
  const al = Array.from({ length: v + 1 }, () => Array(0));
  c.forEach((l) => {
    const [a, b] = l.split(' ').map(Number);
    al[a].push(b);
    al[b].push(a);
  });

  console.log(al);

  const setArr = al.reduce((accArr, curList, curNode) => {
    if (curNode === 0) return accArr; //  1부터 실행되도록
    const curCheck = [...curList, curNode];
    console.log('선수입장', curCheck);
    // p배열을 돌면서 c와 겹치는 요소가 있는 set이 있는지를 확인
    // 없으면 새로운 set을 만들어서 추가하고 리턴,
    // 있으면 해당 set에 값을 추가해서 Return 하면 다음 p로 들어올 것이다.
    // 그렇게 만들어진 set 배열이 리턴

    // p가 비어있을 때(처음) --- > 처음이 아니어도 비어있을 수 잇다.
    // c가 비어있지 않다면 새로운 set 추가해줌. 리턴은 아래에서 해줄것임.
    // c도 비어있다면 아래에서 아무것도 하지 않고 그대로 리턴되게 될것이다.
    if (!accArr.length) {
      accArr.push(new Set(curCheck));
      return accArr; // 1번은 바로 넣어준다.
    }

    // accArr가 비어있지 않을때만 수행될것.
    for (set of accArr) {
      for (n of curCheck) {
        //set을 받아와서 c의 값 중에 가지고있는것이 있는지를 확인
        // 있다면 해당 set에 리스트의 요소들을 추가하고 바로 리턴해준다.
        if (set.has(n)) {
          console.log(set, 'has', n);
          console.log(curCheck, 'to', set);
          for (x of curCheck) {
            set.add(x);
          }
          console.log('result:', set, accArr);
          return accArr;
        }
      }
    }
    // 현재 가지고 있는 set 중에 없다면 추가
    console.log('없어', curCheck, 'to', accArr);
    accArr.push(new Set(curCheck));
    console.log('now', accArr);
    return accArr;
  }, []);
  console.log(setArr);
  console.log(setArr.length);
}
// 답은 잘 나오는 것 같은데 90%에서 틀렸다.
{
  const [ve, ...c] = `6 5
1 2
2 5
5 1
3 4
4 6`
    .trim()
    .split('\n');
  const [v, e] = ve.split(' ').map(Number);

  if (e === 0) {
    console.log(0); // 간선의 개수가 0이라면 0을 출력
  } else {
    // 인접리스트 생성
    const al = Array.from({ length: v + 1 }, () => Array(0));
    c.forEach((l) => {
      const [a, b] = l.split(' ').map(Number);
      al[a].push(b);
      al[b].push(a);
    });
    // reduce로 겹치는 요소가 있는 set 객체에 합체.
    // acc배열 중 겹치는 요소가 없으면 새로 set객체를 만들어 넣음
    const setArr = al.reduce((accArr, curList, curNode) => {
      if (curNode === 0) return accArr;
      const curCheck = [...curList, curNode];
      if (!accArr.length) {
        accArr.push(new Set(curCheck));
        return accArr;
      }
      for (ccset of accArr) {
        for (n of curCheck) {
          if (ccset.has(n)) {
            for (x of curCheck) {
              ccset.add(x);
            }
            return accArr;
          }
        }
      }
      accArr.push(new Set(curCheck));
      return accArr;
    }, []);

    console.log(setArr.length); // 생성된 set객체의 개수는 연결 요소의 개수가 될것.
  }
}
// 혹시 간선이 0개일 때가 문제가 되는지 싶었는데 동일하게 틀림

// 올바른 풀이를 참고해서 풀어보도록 하자

//DFS로 풀이

{
  const [input, ...inputs] = `6 5
1 2
2 5
5 1
3 4
4 6`
    .trim()
    .split('\n');

  const [n, m] = input.split(' ').map(Number);
  const adjList = Array.from({ length: n + 1 }, () => Array(0));
  for (let i = 0; i < inputs.length; i++) {
    let [a, b] = inputs[i].split(' ').map((e) => +e);
    adjList[a].push(b);
    adjList[b].push(a);
  }
  const visited = new Array(n + 1).fill(0);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      DFS(i);
      cnt++;
    }
  }

  console.log(cnt);

  function DFS(v) {
    if (visited[v]) return;
    visited[v] = 1;
    for (let i = 0; i < adjList[v].length; i++) {
      if (!visited[adjList[v][i]]) {
        DFS(adjList[v][i]);
      }
    }
  }
}
/* 연결 요소를 따라가며 하나의 연결 요소에 해당하는 방문을 모두 체크하게 된다.
그렇게 카운트를 해서 정답을 찾게 됨
근데 의문인 것은 1 0 처럼 간선의 개수가 0이 되는 경우에는 연결 요소가 없는것 같은데
1을 출력하는 위의 코드가 정답이 되는 것이 왜 그런지 궁금하다.
일단 질문을 남겨 두었다.
dfs에 대한 막연한 어려움이 있는 것 같다. 더 적극적으로 적응해보는 노력이 필요
*/

