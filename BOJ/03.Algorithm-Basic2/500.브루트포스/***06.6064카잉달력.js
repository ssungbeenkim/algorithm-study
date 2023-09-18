/* 
mnxy
유효하지 않은 표현인 경우는? 
마지막 해를 지나갈 때
*/

// 3% 시간초과가 났다.
{
  const [c, ...lines] = `3
10 12 3 9
10 12 7 2
13 11 5 6`
    .trim()
    .split('\n');

  const input = lines.map((v) => v.split(' ').map(Number));
  const answer = [];
  input.forEach((l) => answer.push(findYear(l)));
  console.log(answer.join('\n'));

  function findYear(arr) {
    const [M, N, X, Y] = arr;
    let x = 1;
    let y = 1;
    let earthTime = 1;
    while (!(x == X && Y === y)) {
      if (x === M && y === N) {
        return -1;
      }
      x = x === M ? 1 : x + 1;
      y = y === N ? 1 : y + 1;
      earthTime++;
    }
    return earthTime;
  }
}

/* 왜 시간초과가 나는가 
M,N의 수가 되어 종말이 되기까지 최대 M*N번 연산을 해야하는데 (최소공배수) 그럴 경우 입력의 범위인 
40000으로 봤을 때 시간초과가 나는 것은 당연한 일이였다. 
*/

// 틀린 두번째 풀이
{
  const [c, ...lines] = `3
10 12 3 9
10 12 7 2
13 11 5 6`
    .trim()
    .split('\n');

  const input = lines.map((v) => v.split(' ').map(Number));
  const answer = [];
  input.forEach((v) => answer.push(findYear(v)));
  console.log(answer.join('\n'));

  function findYear(arr) {
    const [m, n, x, y] = arr;
    let count = 0;
    let cur = x;
    const max = m * n;
    while (true) {
      cur = cur + count * m;
      if (cur > max) {
        return -1;
      }
      if (cur % n === y) {
        return cur;
      }
      count++;
    }
  }
}

/* 왜 틀렸을까요
마지막해는 최소공배수가 되어야 한다.  */
{
  const [c, ...lines] = `3
10 12 10 12`
    .trim()
    .split('\n');

  const input = lines.map((v) => v.split(' ').map(Number));
  const answer = [];
  input.forEach((v) => answer.push(findYear(v)));
  console.log(answer.join('\n'));

  function getLCM(num1, num2) {
    let gcd = num1;
    let r = num2;
    while (r !== 0) {
      let temp = gcd % r;
      gcd = r;
      r = temp;
    }
    return (num1 * num2) / gcd;
  }

  function findYear(arr) {
    const [m, n, x, y] = arr;
    let count = 0;
    let cur = x;
    const max = getLCM(m, n);

    while (cur <= max) {
      if (cur % n === y) {
        return cur;
      }
      count++;
      cur = x + count * m;
    }
    return -1;
  }
}
/* 근데 또 틀렸다.  */

// 정답
{
  const [c, ...lines] = `1
  63 6 3 6`
    .trim()
    .split('\n');

  const input = lines.map((v) => v.split(' ').map(Number));
  const answer = [];
  input.forEach((v) => answer.push(findYear(v)));
  console.log(answer.join('\n'));

  function getLCM(num1, num2) {
    let gcd = num1;
    let r = num2;
    while (r !== 0) {
      let temp = gcd % r;
      gcd = r;
      r = temp;
    }
    return (num1 * num2) / gcd;
  }

  function findYear(arr) {
    const [m, n, x, y] = arr;
    let count = 0;
    let cur = x;
    const max = getLCM(m, n);

    while (cur <= max) {
      if (n === y) {
        if (cur % n === 0) {
          return cur;
        }
      } else if (cur % n === y) {
        return cur;
      }
      count++;
      cur = x + count * m;
    }
    return -1;
  }
}
/* m자리의 값이 x가 나오게 고정시켜 두고 찾는다고 할 때
n과 y가 같을 때가 문제가 되었던 것이다.
n과 y가 같게 m자리의 값을 증가시키며 해당 수가 되더라도 y로 나누었을 때 나머지가 없게 된다. 
그래서 n과 y가 같은 경우에는 나머지가 없을 때 현재값을 반환하도록 하여 통과했다. 

왜 놓친것일까? 
입력값의 범위대로 충분히 생각해보지 않아서 그런 것 같다. 여러가지 변수를 고려하도록 하자. 
*/
