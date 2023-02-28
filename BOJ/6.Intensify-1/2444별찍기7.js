const n = Number(`${require('fs').readFileSync('dev/stdin')}`);
const lineArr = [];

for (let i = 1; i < n + 1; i++) {
  let stars = '';
  let blanks = '';
  for (j = 0; j < i * 2 - 1; j++) {
    stars += `*`;
  }
  for (k = 0; k < n - i; k++) {
    blanks += ' ';
  }
  lineArr.push(blanks + stars);
}

lineArr
  .concat(lineArr.slice(0, n - 1).reverse())
  .forEach((v) => console.log(v));
