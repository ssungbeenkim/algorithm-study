const binaryStr = '11001100';
const oct = [];
const leng = binaryStr.length;
const rest = leng % 3;
if (rest === 0) {
  for (let i = leng - 3; 0 <= i; i -= 3) {
    const part = binaryStr.slice(i, i + 3);
    oct.push(parseInt(part, 2).toString(8));
  }
} else if (rest === 2) {
  oct.push(parseInt(binaryStr.slice(0, 2).padStart(3, 0), 2).toString(8));
} else if (rest === 1) {
  oct.push(parseInt(binaryStr.slice(0, 1).padStart(3, 0), 2).toString(8));
}
console.log(oct.reverse().join(''));
