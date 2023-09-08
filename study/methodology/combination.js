// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
/* 
한 자리씩 고정해 두고 조합을 구한다. 
원소의 수보다 많은 값을 뽑으려 하면 아무것도 리턴이 되지 않는다. 
*/
{
  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results; // 결과 담긴 results return
  }

  const combinations = getCombinations(['a', 'b', 'c', 'd'], 2);
  console.log(combinations);
}

{
  // generator와 재귀로 조합 생성

  const getCombinations = function* (elements, selectNumber) {
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
  };

  const combi = getCombinations(['a', 'b', 'c'], 2);
  console.log(...combi);
}
