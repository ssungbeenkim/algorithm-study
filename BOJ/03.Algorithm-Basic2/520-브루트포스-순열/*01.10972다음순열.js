/* 
1~N 사전순 순열에서 다음에 올 순열을 찾는 문제
마지막 순열이라면 -1을 출력하면 된다. 
m과n문제를 활용홰서 풀면 될까? 

*
모든 수열을 구한 뒤에 
인덱스를 찾아서 +1해서 출력. 길이와 같다면 -1출력. 
but 입력은 10000까지 들어오고 제한시간은 1초. 
시간초과 날것이다. xxxx

다이렉트로 접근해서 해보는 방법은 없을까
...
시간초과. 접근방법을 찾아보자. 
https://star7sss.tistory.com/446 다음 값을 찾는 규칙이 있다. 
맨 뒤의 요소부터 앞으로 오며, 자신보다 하나 큰 값이 있는지 찾는다. 
없으면 -1출력. 
있으면 그 값과 자신을 바꾼다. 
  교환 후 뒤 자릿수들을 오름차순 정렬한다. 

1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3

*/
{
  const [n, ...seq] = `4
1 4 3 2`
    .trim()
    .split(/\s/)
    .map(Number);
  printNext();

  function printNext() {
    for (let i = n - 2; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
        if (seq[i] + 1 === seq[j]) {
          const temp = seq[i];
          seq[i] = seq[j];
          seq[j] = temp;
          const sorted = seq.splice(i + 1).sort((a, b) => a - b);
          const newArrStr = Array.prototype.concat(seq, sorted).join(' ');
          console.log(newArrStr);
          return;
        }
      }
    }
    console.log('-1');
  }
}
// 잘 되는것같은데 틀림 다음사이클에 다시 한번 보고 가자

/* 규칙을 찾는 로직 자체가 잘못되었다. 지금 보니 하나 큰수를 찾는게 아니다. 그리고 뒤에서부터 
오다가 오름차순이 끊기는 지점에서 바꿔주고 정렬해주고 해주어야 한다.  */
{
  // 뒤에서부터 오가다 오름차순이 끊기는 시점의 수와
  // 그 이전의 수들 중 해당 수보다 큰 수 중에서 가장 작은 수로 바꿔주고,
  // 그 이전 수들은 오름차순으로 정렬해 준다.

  const [n, ...seq] = `4
4 3 2 1`
    .trim()
    .split(/\s/)
    .map(Number);
  printNext();

  function printNext() {
    for (let i = n - 2; i >= 0; i--) {
      if (seq[i] < seq[i + 1]) {
        const part = seq.slice(i + 1);
        const filtered = part.filter((v) => v > seq[i]);
        const chosen = Math.min(...filtered);
        const chosenIndex = seq.indexOf(chosen);
        let temp = seq[i];
        seq[i] = seq[chosenIndex];
        seq[chosenIndex] = temp;
        console.log(
          Array.prototype
            .concat(
              seq,
              seq.splice(i + 1).sort((a, b) => a - b)
            )
            .join(' ')
        );
        return;
      }
    }
    console.log('-1');
  }
}
