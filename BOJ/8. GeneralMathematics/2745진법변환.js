const [N, B] = `${require('fs').readFileSync('dev/stdin')}`.trim().split(/\s/);
console.log(parseInt(N, Number(B)));
