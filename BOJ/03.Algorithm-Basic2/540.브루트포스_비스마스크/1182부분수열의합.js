/* 
N개의 정수로 이루어진 수열로 만들 수 있는 크기가 0이 아닌 부분수열 중에서 
원소를 다 더한 값이 S가 되는 경우의 수를 구한다. 

순진하게 생각하면 1~N개의 조합을 만들면서 총합을 구해서 S가 되는 경우를 count하면 된다. 
그렇게 할 경우 N은 최대 20이므로 O(N*(N! + (N-1)! + ... 1이 될것.))

조합을 구하긴 해야한다. 
재귀로 하고 탈출조건에서 검사할 수 있게 각 호출에서 더하기를 수행해서 전달해 주는 것도 괜찮을 것 같다. 
*/

const [n, s, ...seq] = `5 0
-7 -3 -2 5 8`
  .trim()
  .split(/\s/)
  .map(Number);
let count = 0;

for (let i = 1; i <= n; i++) {
  const combi = getCombinations(seq, i);
  for (c of combi) {
    c.reduce((p, c) => p + c, 0) === s && count++;
  }
}
console.log(count);

function* getCombinations(elements, selectNumber) {
  for (let i = 0; i < elements.length; i++) {
    if (selectNumber === 1) {
      yield [elements[i]];
    } else {
      const fixed = elements[i];
      const rest = elements.slice(i + 1);
      for (const a of getCombinations(rest, selectNumber - 1)) {
        yield [fixed, ...a];
      }
    }
  }
}
