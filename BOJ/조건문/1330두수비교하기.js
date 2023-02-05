const fs = require('fs');
const input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));
const [a, b] = input;
const dstnct = a - b;
if (dstnct < 0) {
  console.log('<');
} else if (0 < dstnct) {
  console.log('>');
} else {
  console.log('==');
}
