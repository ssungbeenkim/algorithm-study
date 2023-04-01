let a = 7;
a += 2;
console.log(a);

console.log(Math.trunc(0.123234));

const [, ...input] = `3
124
25
194`
  .trim()
  .split(/\s/)
  .map((v) => Number(v));

const reciptArr = [];
const monetaryArr = [25, 10, 5, 1];

input.forEach((c) => {
  let change = c;
  const plate = [];
  monetaryArr.forEach((m) => {
    const count = Math.trunc(change / m);
    plate.push(count);
    change -= m * count;
  });
  const recipt = plate.join(' ');
  reciptArr.push(recipt);
});
console.log(reciptArr.join(`\n`));
