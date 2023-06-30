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
