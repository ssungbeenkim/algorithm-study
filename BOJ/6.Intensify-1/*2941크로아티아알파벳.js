const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
function solution(input) {
  for (let alphabet of croatia) {
    input = input.split(alphabet).join('V');
  }
  return input.length;
}
console.log(solution(input));
// 문제에 대한 이해가 부족했다.
