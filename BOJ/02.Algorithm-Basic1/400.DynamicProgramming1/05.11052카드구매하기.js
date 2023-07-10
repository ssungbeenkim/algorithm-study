/* 
입력으로 들어오는 수를 배열에 넣으면 인덱스가 곧 카드의 갯수가 되고 값이 가격이 된다. 
카드의 개수가 n이 되도록 하는 조합 중에서 가격의 합이 가장 큰 경우를 찾아서 출력해야한다. 
구매 카드는 1000개까지, 주어지는 카드팩은 10000개까지 들어온다. 
카드팩의 최대 갯수는 원하는 카드 갯수까지 주어진다. 
시간초과. 
규칙을 찾아보려 했는데 감이 잡히지 않아서 참고해서 풀도록 한다. 
https://yabmoons.tistory.com/522 
*/

const [n, ...p] = `4
3 5 15 16`
  .trim()
  .split(/\s/)
  .map(Number);
const dp = Array(n).fill(0);
for (let i = 1; i < n + 1; i++) {
  const cas = [];
  for (let j = i; 0 < j; j--) {
    // console.log(i, j, p[j - 1], dp[i - j]);
    cas.push(p[j - 1] + dp[i - j]);
  }
  dp[i] = Math.max(...cas);
}
console.log(dp[n]);
