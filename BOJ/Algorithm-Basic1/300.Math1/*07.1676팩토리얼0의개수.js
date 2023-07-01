const n = Number(`3`.trim());
let count = 0;
for (i = 1; i < n + 1; i++) {
  let cur = i;
  while (true) {
    if (cur < 5) {
      break;
    }
    if (cur % 5 === 0) {
      count++;
      cur = cur / 5;
    } else {
      break;
    }
  }
}
console.log(count);

// 소인수의 5가 몇개인지 세면 0의 개수가 된다.
{
  // 개선된 풀이
  const n = Number(`19`.trim());

  console.log(xInN(n, 5));

  function xInN(n, x) {
    let count = 0;
    for (let i = n; x <= i; i /= x) {
      count += Math.trunc(i / x);
    }
    return count;
  }
}
