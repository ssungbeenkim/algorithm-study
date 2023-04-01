// 60466175 36
const [a, b] = `60466175 36`.trim().split(/\s/).map(Number);
console.log(a.toString(b).toUpperCase());

// const inputArr = `${require('fs').readFileSync('dev/stdin')}`.trim().split(/\s/).map(Number);
