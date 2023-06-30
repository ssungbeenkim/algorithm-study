const n = Number(`10`.trim());
let ans = 1;
for (i = n; i > 0; i--) {
  ans *= i;
}
console.log(ans);
