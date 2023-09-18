/* 모든 k+1자리 순열을 구해서 
조건에 맞는 순열을 걸러서 
가장 작은 수와 가장 큰 수를 찾는다

그럼 앞자리에 0이 들어오는 경우는? 그 경우를 포함하여 순열을 찾는다. 
-> k+1개의 수로 이루어진 순열을 생성. 
부등호 조건에 맞는지는 어떻게 확인이 가능한가? 
값을 수 2개, 부등호 1개씩 가져오면서 확인할 수 있도록. 
맞지 않으면 빠져나올 수 있도록 만들어야 한다. 
-> 부등호 k개 수 k+1개이므로 반복문 한개 돌려서 i 부등호[i] i+1 true 인지 확인하면 됨. 

불필요하게 다 만들 필요 없이 하나 만들고 확인하고 하면서 하면 될 것 같다. 
맞는게 나올 때마다 최대, 최소를 업데이트 하면 될것. 

다만 값을 계산하거나 출력할 때에 앞에 있는 0을 떼는것도 신경써서 구현해야 할 것 같다. 
출력할 때는 0을 붙여서 출력해야 하며 
비교할 때가 잘 봐야함. 
*/
// 시간초과. 테스트 돌려볼 때부터 시간이 엄청 걸린다.
{
  const [N, ...is] = `2
< >`
    .trim()
    .split(/\s/);

  const n = Number(N);
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let mx = Number.MIN_SAFE_INTEGER;
  let mn = Number.MAX_SAFE_INTEGER;
  for (a of getPermutation(nums, n + 1)) {
    if (distinct(a)) {
      const num = a.join('');
      mx = Number(mx) < Number(num) ? num : mx;
      mn = Number(mn) > Number(num) ? num : mn;
    }
  }
  console.log(`${mx}\n${mn}`);

  function distinct(a) {
    for (let i = 0; i < n; i++) {
      const num1 = a[i];
      const num2 = a[i + 1];
      const iSign = is[i];
      if (!isCorrect(num1, num2, iSign)) {
        return false;
      }
    }
    return true;
  }

  function isCorrect(n1, n2, is) {
    switch (is) {
      case '>':
        return n1 > n2;
      case '<':
        return n1 < n2;
    }
  }

  function* getPermutation(elements, select) {
    for (let i = 0; i < elements.length; i++) {
      if (select === 1) {
        yield [elements[i]];
      } else {
        const fixed = elements[i];
        const rest = [...elements.slice(0, i), ...elements.slice(i + 1)];
        for (const a of getPermutation(rest, select - 1)) {
          yield [fixed, ...a];
        }
      }
    }
  }
}
// 왜 시간초과가 나는지 비교분석

// dfs를 활용해서 통과한 풀이
{
  const [n, ...iSigns] = `2
< >`
    .trim()
    .split(/\s/);
  const iSCount = Number(n);

  const isUsed = new Array(10).fill(0);
  // isUsed는 각 호출까지 사용된 적이 있는 수를 기억한다.
  const yes = 1;
  const no = 0;
  let maxStr = `${Number.MIN_SAFE_INTEGER}`;
  let minStr = `${Number.MAX_SAFE_INTEGER}`;

  for (let i = 0; i <= 9; i++) {
    isUsed[i] = yes;
    // 0~9의 수를 차례로 첫번째 값으로 지정하여 dfs에 넘겨준다.
    dfs(i, `${i}`);
    isUsed[i] = no;
  }

  console.log(`${maxStr}\n${minStr}`);

  function dfs(prev, resultStr) {
    // 사용할 부등호의 인덱스는 지금까지 만들어진 문자열 길이 - 1
    const curIsIndex = resultStr.length - 1;

    if (curIsIndex === iSCount) {
      // 부등호가 전부 사용되었으므로 만들어진 문자열로 최대, 최소 문자열을 비교하여 업데이트 해준다.
      const [max, min, result] = [
        Number(maxStr),
        Number(minStr),
        Number(resultStr),
      ];
      maxStr = result > max ? resultStr : maxStr;
      minStr = result < min ? resultStr : minStr;
      return;
    }
    // 현재 사용할 부등호에 따라 큰 값 혹은 작은 값들을 차례로 문자열에 붙여서 dfs호출
    if (iSigns[curIsIndex] === '<') {
      for (let i = prev + 1; i < 10; i++) {
        if (isUsed[i]) continue; // 이미 사용된 적 있는 수인 경우 호출을 종료
        isUsed[i] = yes;
        dfs(i, resultStr + i);
        isUsed[i] = no;
      }
    } else if (iSigns[curIsIndex] === '>') {
      for (let i = prev - 1; 0 <= i; i--) {
        if (isUsed[i]) continue;
        isUsed[i] = yes;
        dfs(i, resultStr + i);
        isUsed[i] = no;
      }
    }
    return;
  }
}

/*  
첫번째 풀이
모든 순열을 생성하고 나서 각 순열이 주어진 부등호 수열의 조건에 맞는지를 확인해서 
값을 업데이트 하고 있다. 
10개의 숫자로 n+1길이의 순열을 생성하고 있으므로 10 P n+1개의 수열을 생성하게 된다. 
함수 호출의 수는 
순열 구하는 재귀 호출 * 순열이 부등호에 맞는지 확인 + 조건에 맞는 수열을 문자열로 만들어 비교하는 수가 된다.

두번째 풀이
10개의 수로 dfs를 활용하여 각 레벨에서 최대 9개의 후보를 생성하고 탐색한다. 
이때 레벨의 최대 깊이는 n의 값의 범위에 따라 9이하가 되므로 시간복잡도는 9^n이 된다. 

수열을 전부 생성해 두고 비교하는 것보다 재귀적으로 문자열을 붙여나가는 각 레벨에서 미리 조건에 부합하지 
않는 경우들의 호출을 종료하므로써 훨씬 빠르게 값들을 만들어 나갈 수 있게 된다. 

근본적으로 으로 모든 수열을 생성하는 것보다는 수열을 생성하는 과정에서 탈락시켜나가는게 훨씬 효율적인 코드이다. 

은연중에 사용하면서도 dfs에 대해 명확하게 생각하지 못했는데 많이 배울 수 있는 문제였음. 
*/
