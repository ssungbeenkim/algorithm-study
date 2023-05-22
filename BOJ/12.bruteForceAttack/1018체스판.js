/* 어떻게 풀까
라인을 만들어서 레퍼런스와 비교해서 다른 글자의 갯수를 업데이트 하여 최소값을 찾는다. 
*/
// input을 라인으로 나누어 배열로

const inputArrLn = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n');

// 행과 열의 사이즈를 x, y 에 할당
const [y, x] = inputArrLn[0].split(' ').map(Number);

// 보드의 문자를 나눠담는다.
const matrixArr = inputArrLn.slice(1);

// 레퍼런스 라인 배열
const refLnArr = [
  'BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB',
  'WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW',
];

// 모든 경우의 체스보드 8*8=64라인 생성해서 배열에 때려넣기
function getSampleLns(Arr) {
  const lns = [];
  for (i = 0; i < x - 7; i++) {
    for (j = 0; j < y - 7; j++) {
      let ln = '';
      for (k = j; k < j + 8; k++) {
        ln += Arr[k].slice(i, i + 8);
      }
      lns.push(ln);
    }
  }
  return lns;
}

const lns = getSampleLns(matrixArr);

// 레퍼런스 라인과 생성한 라인을 하나씩 비교하며 가장 적은 차이를 찾는다.

function difCount(a, b) {
  let count = 0;
  for (i = 0; i < 64; i++) {
    if (a[i] != b[i]) {
      count++;
    }
  }
  return count;
}

let minDif = 65;
refLnArr.forEach((v1) => {
  lns.forEach((v2) => {
    const dif = difCount(v1, v2);
    if (dif < minDif) {
      minDif = dif;
    }
  });
});

console.log(minDif);
