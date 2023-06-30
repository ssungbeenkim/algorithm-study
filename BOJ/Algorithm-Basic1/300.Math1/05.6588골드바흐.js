/* 고르으바흐상 노 몬다이데스네 
각 수를 조건에 맞게 검사해서 답안 만들어 출력하면 될 것이다. 
*/
{
  // 시간초과남.
  const arr = `8
20
42
0`
    .trim()
    .split(/\s/)
    .map(Number);
  arr.pop();
  const ans = [];

  arr.forEach((v) => {
    ans.push(returnStr(v));
  });
  console.log(ans.join('\n'));

  function returnStr(n) {
    // 먼저, a는 1, b는 n-1 부터 시작해서 하나씩 바꾸면서 둘다 소수인지 검사.
    // b가 더 커야하므로 반자르고 소숫점 버린 수까지만 검사하면 된다.
    // 소수의 조건은, 1과 자신 외에 약수가 없으면 되므로, 수-1부터 까지 나머지가 0인것 있는지 보면 됨
    // 걸리면 바로 답변에 넣는다.
    // 끝까지 안걸리면 없다고 넣는다.
    for (let i = 3; i < Math.ceil(n / 2); i++) {
      const a = i;
      const b = n - i;
      // console.log(a, b);
      if (isPrime(a) && isPrime(b)) {
        return `${n} = ${a} + ${b}`;
      }
    }
    return `Goldbach's conjecture is wrong.`;
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// 소수 판별 결과를 캐싱했는데 또 시간초과가 났다.
{
  const arr = `8
  20
  42
  0`
    .trim()
    .split(/\s/)
    .map(Number);
  arr.pop();
  const ans = [];
  const primeMap = new Map(); // 특정 수에 대해 소수 판변 결과를 캐싱한다.
  let count = 0;

  arr.forEach((v) => {
    ans.push(returnStr(v));
  });
  console.log(ans.join('\n'));

  function returnStr(n) {
    for (let i = 3; i < Math.ceil(n / 2); i++) {
      const a = i;
      const b = n - i;
      if (isPrime(a) && isPrime(b)) {
        return `${n} = ${a} + ${b}`;
      }
    }
    return `Goldbach's conjecture is wrong.`;
  }

  function isPrime(n) {
    if (primeMap.has(n)) {
      return primeMap.get(n);
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        primeMap.set(n, false);
        return false;
      }
    }
    primeMap.set(n, true);
    return true;
  }
}

// 에라토스테네스의 체를 이용하였으나 틀림.
{
  /* 문제 파악.
100만까지 들어올 수 있기 때문에 캐싱을 한다고 하더라도 2중 반복문의 경우 부담이 될 수 있다. 
소수를 미리 구해두고 거기에서 찾는게 어떨까 싶다. 
아예 시작할 때 홀수인 소수 목록을 가장 큰 수까지 만들어 두고, 목록에 있는지 확인하는 방식으로
구하는 것이 좋을 것 같다. 
에라토스테네스의 체를 사용한다. 
 */

  const arr = `8
20
42
0`
    .trim()
    .split(/\s/)
    .map(Number);
  arr.pop();
  const ans = [];
  const maxNum = Math.max(...arr);
  const primes = new Array(maxNum + 1).fill(true).map((v, i) => {
    if (i === 0 || i === 1) {
      return false;
    }
    for (j = 2; j <= Math.sqrt(maxNum); j++) {
      if (i % j === 0) {
        if (i === j) {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  });

  arr.forEach((v) => {
    ans.push(returnStr(v));
  });
  console.log(ans.join('\n'));

  function returnStr(n) {
    // a는 n의 절반 이하까지만 찾는다. 그 안에서 모든 조합은 다 나오고, b가 더 커야하기 때문이다.
    // 홀수의 조합만 검사하기 위해 i는 2씩 증가한다.
    for (let i = 3; i < Math.ceil(n / 2); i = i + 2) {
      const a = i;
      const b = n - i;
      if (primes[a] && primes[b]) {
        return `${n} = ${a} + ${b}`;
      }
    }
    return `Goldbach's conjecture is wrong.`;
  }
}

{
  // 정답.
  const arr = `8
20
42
0`
    .trim()
    .split(/\s/)
    .map(Number);
  arr.pop();
  const ans = [];
  const maxNum = Math.max(...arr);
  // 가장 큰 수까지의 소수 목록을 index:boolian으로 저장한다.
  const primes = new Array(maxNum + 1).fill(true).map((v, i) => {
    if (i === 0 || i === 1) {
      return false;
    }
    for (j = 2; j <= Math.sqrt(maxNum); j++) {
      if (i % j === 0) {
        if (i === j) {
          return true;
        } else {
          return false;
        }
      }
    }
    return true;
  });

  arr.forEach((v) => {
    ans.push(returnStr(v));
  });
  console.log(ans.join('\n'));

  function returnStr(n) {
    // a는 n의 절반 이하까지만 찾는다. 그 안에서 모든 조합은 다 나오고, b가 더 커야하기 때문이다.
    // 홀수의 조합만 검사하기 위해 i는 2씩 증가한다.
    for (let i = 3; i <= n / 2; i = i + 2) {
      const a = i;
      const b = n - i;
      // n은 짝수이기 때문에 둘다 당연히 홀수이다. 소수인지만 검사해준다.
      if (primes[a] && primes[b]) {
        return `${n} = ${a} + ${b}`;
      }
    }
    return `Goldbach's conjecture is wrong.`;
  }
} // 문제는 a와 b가 같아질 수 있다는 것이었다. 6의 경우 3 + 3으로 나타낼 수 있기에 절반까지는 찾아야 했던 것이었다.
