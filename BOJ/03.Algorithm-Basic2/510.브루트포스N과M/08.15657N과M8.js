/* 
N개의 자연수와 자연수 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. N개의 자연수는 모두 다른 수이다.

N개의 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.
고른 수열은 비내림차순이어야 한다.
길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.

비내림차순. 

*/
const [n, m, ...numbers] = `4 2
9 8 7 1`
  .trim()
  .split(/\s/)
  .map(Number);
const numbersSorted = [...numbers.sort((a, b) => a - b)];
const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === m) {
    answer.push(s.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    const v = numbers[i];
    if (!s.length || s.at(-1) <= v) {
      s.push(v);
      fillLine();
      s.pop();
    }
  }
}
