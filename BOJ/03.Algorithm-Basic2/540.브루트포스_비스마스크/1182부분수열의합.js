/* 
N개의 정수로 이루어진 수열로 만들 수 있는 크기가 0이 아닌 부분수열 중에서 
원소를 다 더한 값이 S가 되는 경우의 수를 구한다. 

순진하게 생각하면 1~N개의 조합을 만들면서 총합을 구해서 S가 되는 경우를 count하면 된다. 
그렇게 할 경우 N은 최대 20이므로 O(N*(N! + (N-1)! + ... 1이 될것.))

조합을 구하긴 해야한다. 
재귀로 하고 탈출조건에서 검사할 수 있게 각 호출에서 더하기를 수행해서 전달해 주는 것도 괜찮을 것 같다. 
*/
{
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
}
// 정답.

/* 정답이지만 비트마스킹 문제라서 비트마스킹으로 다시 풀어봐야 할 것 같다. 
다른 풀이보다 시간이 너무 많이 걸린다. */
{
  /* 
다른 풀이를 참고한 풀이. 
각 호출에서는 현재 인덱스의 값을 포함해서 목표 합과 비교해서 같은경우 count해준다. 
sum에 현재 인덱스의 값을 포함한 합과 포함하지 않은 합을 재귀로 넘겨준다. 
참고한 풀이에서는 idx === n일때 return 해 주었으나 
idx === n - 1 인 호출해서는 마지막 값까지 포함해서 이미 검사한 상태이므로 
idx === n - 1일 때 리턴해주도록 바꿔서 불필요하게 한번 더 호출되는 것을 방지했다. 
*/

  const [n, s, ...arr] = `5 0
-7 -3 -2 5 8`
    .trim()
    .split(/\s/)
    .map(Number);

  let cnt = 0;
  searchAndUpdateCount();
  console.log(cnt);

  function searchAndUpdateCount(idx = 0, sum = 0) {
    sum += arr[idx];
    if (sum === s) cnt += 1;
    if (idx === n - 1) return;
    searchAndUpdateCount(idx + 1, sum);
    searchAndUpdateCount(idx + 1, sum - arr[idx]);
  }
}

// * 위 코드를 활용해서 조합을 만들어보는 코드를 만들어 볼 수도 있을 것 같아서 만들어보고,
// * 비트마스킹을 적용한 풀이도 한번 분석해보고 비트마스킹에 대해 스킬을 습득하고 넘어가면 될 것 같다.
