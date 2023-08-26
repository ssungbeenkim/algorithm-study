/* 
k개의 수 중에서 6개를 고를 수 있는 모든 경우의 순열을 사전순으로 출력하라. 
여기서 k개의 수는 서로 다른 수이다. 

오름차순 정렬은 되어 있다. 
6개를 뽑되, 이미 서로 다른 수들이므로 이전 수보다 큰 수를 추가하면서 
백트래킹 방식으로 뽑는다. 

오름차순으로 뽑기 때문에 가장 처음으로 들어갈 수 있는 수는 제한적이다. 

7개의 수 중에서 뽑는다고 하면 오름차순 정렬한 수 중 두번째까지 첫 값으로 들어갈 수 있고 
8개의 수인 경우 3번째까지 들어갈 수 있으므로 

첫번째 수는 k-6 번째 인덱스까지 들어갈 수 있다. 
어차피 서로 다른 수들이며 정렬이 되어있고 작은 수부터 들어가므로 
마지막 요소보다 큰 값을 넣어준다. 
*/
const inputLines = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
  .trim()
  .split('\n');
inputLines.pop();
const inputs = inputLines.map((l) => {
  const [k, ...numbers] = l.split(' ').map(Number);
  return [k, numbers];
});
const answer = [];
inputs.forEach(fillAnswer);
console.log(answer.join('\n\n'));

function fillAnswer(input) {
  const [k, numbers] = input;
  const lines = [];
  const t = [];
  fillLines();
  function fillLines() {
    if (t.length === 6) {
      lines.push(t.join(' '));
      return;
    }
    if (!t.length) {
      for (let i = 0; i <= k - 6; i++) {
        t.push(numbers[i]);
        fillLines();
        t.pop();
      }
    } else {
      for (let j = 0; j < k; j++) {
        const el = numbers[j];
        if (t.at(-1) < el) {
          t.push(el);
          fillLines();
          t.pop();
        }
      }
    }
  }
  return answer.push(lines.join('\n'));
}

/* 
혹시나 메모리 초과가 나오지는 않을까 했는데 채점이 순식간에 이루어지고 정답이 됨
*/
