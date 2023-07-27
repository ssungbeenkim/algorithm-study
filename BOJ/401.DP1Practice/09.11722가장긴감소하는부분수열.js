/* 이번에는 감소다!
풀 방법은 크게 다르지 않다.
*/

const [n, ...input] = `6
10 30 10 20 20 10`
  .trim()
  .split(/\s/)
  .map(Number);

const dp = Array(n).fill(0);

input.forEach((v, i) => {
  if (i === 0) {
    dp[i] = 1;
  } else {
    let longest = 0;
    for (j = 0; j < i; j++) {
      if (input[j] > v && longest < dp[j]) {
        longest = dp[j];
      }
    }
    dp[i] = longest + 1;
  }
});
console.log(Math.max(...dp));
