/*  
반복문으로 만들 수 있을 것 같다. 
4 2라면 각 자리의 수가 있는지를 검사하면서 하면 될 것 같다. 
반목문을 m개 돌려야 하는데, 어떻게 할지. 재귀로 만들 수 있을까? - while문으로?
*/
/*  타임오버. 재귀적으로 채우는것에 대해 방법을 구현하지 못했다. 풀이를 참고하도록 한다. 
{
  const [m, n] = `4 2`.trim().split(/\s/).map(Number);
  const omap = {};
  for (let i = 1; i <= m; i++) {
    omap[i] = true;
  }
  const answer = [];

  fillAnswer(m, n);
  console.log(answer);

  function fillAnswer(m, n) {
    const map = { ...omap };
    const arr = [];
    while (arr.length < n) {
      for (let i = 1; i <= 4; i++) {
        if (map[i]) {
          arr.push(i);
          map[i] = false;
        }
      }
    }
    answer.push(arr);
  }
}
 */

/* 
dfs, 백트랙킹과 관련이 있다고 한다. 
백트래킹이란 노드의 유망성을 판단하여 찾는 것이고 dfs는 깊이 우선 탐색이다. 
*/

/* 어제 생각난 풀이가 있어서 그것으로 진행해본다. 
재귀적으로 호출하면서 배열을 만든다. 
각 호출에서는 배열을 확인해서 없는것을 순서대로 넣는다. 
하나 넣고 호출에 넣고 하는 방식으로 동작하며 만들어지면 answer에 추가된다. 
*/
{
  const [n, m] = `8 8`.trim().split(/\s/).map(Number);

  const answer = [];
  fillLine([]);
  console.log(answer.join('\n'));

  function fillLine(arr) {
    if (arr.length === m) {
      answer.push(arr.join(' '));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!arr.includes(i)) {
        fillLine([...arr, i]);
      }
    }
  }
}
/* 간단히 해결할 수 있었다. 충분히 로직이 이해가 되지만 백트레킹이나 DFS에 대해 이해하고 넘어가자.  */

{
  const [n, m] = `4 2`.trim().split(/\s/).map(Number);

  const answer = [];
  const s = [];
  fillLine();
  console.log(answer.join('\n'));

  function fillLine() {
    if (s.length === m) {
      answer.push(s.join(' '));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!s.includes(i)) {
        s.push(i);
        fillLine();
        s.pop();
      }
    }
  }
}
// 이렇게 풀 수도 있다. 어차피 호출시점에 스코프를 기억하므로 함수 내부에서 실행된 것들은 기억한다.
