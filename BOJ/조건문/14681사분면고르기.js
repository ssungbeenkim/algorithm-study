const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const [x, y] = input;
  if (0 < x) {
    if (0 < y) {
      console.log(1);
    } else console.log(4);
  } else {
    if (0 < y) {
      console.log(2);
    } else console.log(3);
  }

  process.exit();
});

// readline으로 제출해야 풀린다. fs모듈로는 경로 문제로 인해 정상적으로 입력을 못받음
