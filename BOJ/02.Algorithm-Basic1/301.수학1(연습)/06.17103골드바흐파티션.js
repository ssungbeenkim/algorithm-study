/* 골드버그 파티션 
짝수가 주어지면 가능한 소수의 합으로 나타낼 수 있는 조합의 수를 구한다.
* Solution 
들어온 수의 가장 큰 수까지의 소수를 구해두고
수를 받아서 두 수를 구하고 둘다 목록에 있는지를 검사해서 count 한 후 count를 저장해 출력
*/

const [_, ...arr] = `5
6
8
10
12
100`
  .trim()
  .split(/\s/)
  .map(Number);

const maxNum = Math.max(...arr);

const ans = [];

// 소수 목록 구하기
// 가장 큰 수까지의 소수 목록을 index:boolian으로 저장한다.
const primes = new Array(maxNum + 1).fill(true);
primes[0] = primes[1] = false;

for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  if (primes[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      primes[j] = false;
    }
  }
}
// 소수의 합으로 나타낼 수 있는 경우의 수를 세서 정답에 추가
arr.forEach((n) => {
  let count = 0;
  for (i = 0; i <= n / 2; i++) {
    primes[i] && primes[n - i] && count++;
  }
  ans.push(count);
});

console.log(ans.join('\n'));
