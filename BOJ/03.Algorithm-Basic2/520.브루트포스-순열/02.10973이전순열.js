/* 
바로 전 문제와 비슷한 로직으로 풀 수 있을 것 같다. 다만 이번에는 내림차순으로 가다가 
아닌 수를 찾고, 그 수 이전의 수들 중 작은 수 중 가장 큰 수와 바꿔주고 이수의 수들은 내림차순으로.
*/

const [n, ...seq] = `4
1 2 3 4`
  .trim()
  .split(/\s/)
  .map(Number);
printNext();

function printNext() {
  for (let i = n - 2; i >= 0; i--) {
    if (seq[i] > seq[i + 1]) {
      const part = seq.slice(i + 1);
      const filtered = part.filter((v) => v < seq[i]);
      const chosen = Math.max(...filtered);
      const chosenIndex = seq.indexOf(chosen);
      let temp = seq[i];
      seq[i] = seq[chosenIndex];
      seq[chosenIndex] = temp;
      console.log(
        Array.prototype
          .concat(
            seq,
            seq.splice(i + 1).sort((a, b) => b - a)
          )
          .join(' ')
      );
      return;
    }
  }
  console.log('-1');
}

/* 
이전 문제와 비슷하게 금방 규칙을 찾아서 풀 수 있었음. 
*/
