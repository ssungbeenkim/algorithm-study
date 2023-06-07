const inputArr = `10
40
30
60
30`
  .trim()
  .split(/\s/)
  .map(Number)
  .sort((a, b) => a - b);
console.log(`${inputArr.reduce((p, c) => p + c, 0) / 5}\n${inputArr[2]}`);
