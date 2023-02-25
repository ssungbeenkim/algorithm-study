const input = `${require('fs').readFileSync('dev/stdin')}`.trim().split(' ');
console.log(input[0] === '' ? 0 : input.length);

// 단어가 하나도 없을 경우를 놓쳤었다.
