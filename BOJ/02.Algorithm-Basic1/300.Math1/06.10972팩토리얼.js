const n = Number(`100`.trim());
let ans = 1;
for (i = n; i > 0; i--) {
  ans *= i;
}
console.log(ans);

/* 0! 가 1인지 모르면 쉽게 오답냄 */
