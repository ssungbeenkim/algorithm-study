'use strict';
const inputArr = `6
12
28
-1`
  .trim()
  .split(/\s/)
  .map(Number);

inputArr.forEach((v) => {
  if (v === -1) {
    return;
  }
  const divisorArr = [];
  for (let i = 1; i < v; i++) {
    if (v % i === 0) {
      divisorArr.push(i);
    }
  }
  if (divisorArr.reduce((a, c) => a + c, 0) === v) {
    console.log(`${v} = ${divisorArr.join(' + ')}`);
  } else {
    console.log(`${v} is NOT perfect.`);
  }
});
