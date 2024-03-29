const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
const n = Number(input);

function findMinimumConstructur(num) {
  for (i = 1; i <= num; i++) {
    if (isConstructor(i, num)) {
      console.log(i);
      return;
    }
  }
  console.log(0);
}

function isConstructor(inspect, reference) {
  if (inspect < 10) {
    return inspect * 2 === reference ? true : false;
  } else {
    const sum =
      inspect
        .toString()
        .split('')
        .map(Number)
        .reduce((a, c) => a + c, 0) + inspect;
    return sum === reference ? true : false;
  }
}

findMinimumConstructur(n);
