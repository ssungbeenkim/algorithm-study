const [a, b] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(' ')
  .map(Number);
function reverseStr(number) {
  const oddNumber = Number(number.toString().split('').reverse().join(''));

  return oddNumber;
}

const oddA = reverseStr(a);
const oddB = reverseStr(b);

console.log(oddA < oddB ? oddB : oddA);
