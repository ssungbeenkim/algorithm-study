/* 
이전 문제와 크게 다를바 없는듯 보인다. 
대신 기존의 중복없는것에 새로 오름차순일 때만 추가되도록 조건을 넣으면 될것이다. 

추가할 조건. 
우선 값을 추가할 때는 마지막 요소보다 큰것이 들어가게 하고, 
m개의 값을 추가해야하므로 첫번째 값을 추가할 때, 
4,4의 경우 첫번째 값으로 1만 들어갈 수 있다. 
4,2의 경우 1,2,3이
4,3인 경우 1,2만 들어갈 수 있다. 
4,4인 경우 1만들어갈 수 있다. 
n-(m-1)까지만 돌리면 된다. 

*/
const [n, m] = `4 4`.trim().split(/\s/).map(Number);

const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === m) {
    answer.push(s.join(' '));
    return;
  }
  const till = s.length === 0 ? n - m + 1 : n;
  for (let i = 1; i <= till; i++) {
    if (s.length === 0 || (!s.includes(i) && s.at(-1) < i)) {
      s.push(i);
      fillLine();
      s.pop();
    }
  }
}
