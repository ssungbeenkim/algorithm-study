/* 
n개의 정수로 이루어진 배열 A
절댓값연산. 
입력으로 들어오는 수는 8개 이하. 
매뉴얼하게 구하고 더해서 최대를 구하면 어떨까. 
8개의 수로 만들 수 있는 수열은 8!개 
그리고 각 수에서 reduce로 절대값 연산을 해서 더하고 하면 8번씩 더한다고 칠 때 32만번 연산? 
괜찮을 것 같다는 생각이 든다. 
*/

const [n, ...ele] = `6
2 -4 -4 0 1 4`
  .trim()
  .split(/\s/)
  .map(Number);

const el = ele.sort((a, b) => a - b);
const temp = [];
const seq = [];
fillSeq();
const sums = [];
seq.forEach(fillSums);
console.log(Math.max(...sums));

function fillSums(arr) {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  sums.push(sum);
}

function fillSeq() {
  if (temp.length === n) {
    seq.push([...temp].map((index) => el[index]));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!temp.includes(i)) {
      temp.push(i);
      fillSeq();
      temp.pop();
    }
  }
}

/* 
처음에 중복된 입력값이 있을것을 예상하지 못해서 틀렸었다. 
인덱스로 line을 저장하고 풀었다. 
더 효율적인 방법이 있을 것 같지만 일단 패스 
*/
