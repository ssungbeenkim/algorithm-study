/* 조합 문자인줄 모르고 뭔가 했다. 
간단하다 이전 문제와 크게 원리는 다르지 않고 간단한 수학일 뿐이다.  */

{
  // 시간초과
  const [n, m] = `25 12`.trim().split(/\s/).map(Number);

  const two = xInN(n, 2) - xInN(n - m, 2) - xInN(m, 2);
  const five = xInN(n, 5) - xInN(n - m, 5) - xInN(m, 5);
  if (two === five) {
    console.log(two);
  } else {
    console.log(two < five ? two : five);
  }

  function xInN(n, x) {
    let count = 0;
    for (i = 1; i < n + 1; i++) {
      let cur = i;
      while (true) {
        if (cur < x) {
          break;
        }
        if (cur % x === 0) {
          count++;
          cur /= x;
        } else {
          break;
        }
      }
    }
    return count;
  }

  // 아무래도 반복문이 걸린다.
}

{
  const [n, m] = `25 12`.trim().split(/\s/).map(Number);

  const two = xInN(n, 2) - xInN(n - m, 2) - xInN(m, 2);
  const five = xInN(n, 5) - xInN(n - m, 5) - xInN(m, 5);
  if (two === five) {
    console.log(two);
  } else {
    console.log(two < five ? two : five);
  }

  function xInN(n, x) {
    let count = 0;
    for (let i = n; x <= i; i /= x) {
      count += Math.trunc(i / x);
    }
    return count;
  }
}
