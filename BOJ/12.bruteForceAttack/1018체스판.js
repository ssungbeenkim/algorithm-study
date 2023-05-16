/* 어떻게 풀까
라인을 만들어서 레퍼런스와 비교해서 다른 갯수를 
*/

const inputArrLn = `10 13
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
BBBBBBBBWBWBW
BBBBBBBBBWBWB
WWWWWWWWWWBWB
WWWWWWWWWWBWB`
  .trim()
  .split('\n');

// 행과 열의 사이즈를 x, y 에 할당
const [x, y] = inputArrLn[0].split(' ').map(Number);

// 2차원 배열로 보드의 문자를 나눠담는다.
const matrixArr2d = inputArrLn
  .slice(1, inputArrLn.length - 1)
  .map((ln) => ln.split(''));

// 레퍼런스 배열
const refLnArr = [
  'BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB',
  'WBWBWBWBBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBWBW',
];

// 임의의 체스보드 라인 생성해서 배열에 때려넣어서 리턴하는 함수 
function getSampleLns(2dArr) {
  const Lns = [];
  for(i=0; i<){

  }
}


// 레퍼런스 라인과 생성한 라인 비교하며 가장 작게 차이나는 수를 찾는다. 

// 작게 차이나는 수를 64에서 빼면 답이 될 것이다. 
