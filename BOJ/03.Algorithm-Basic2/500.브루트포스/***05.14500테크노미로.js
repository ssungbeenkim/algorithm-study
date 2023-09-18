/* 
shape별로 저장해 둔다. 
모양을 대칭, 반전하며 모든 경우를 검색하는 함수들을 만든다. 
함수들을 수행한다. 
업데이트된 값을 출력한다.
r: 오른쪽으로 90도 회전
f: 상하 반전 이라고 할 때
  I 모양은 r 한번 한것까지 2가지 
  ㄴ 모양은 r3번한 4가지 모양과 각각 상하대칭한 8가지 
  ㅁ 모양은 1가지 
  ㄹ 에서 하나씩 뗀 모양은 r한 2가지에 각각 f한 모양 4가지  
  T 모양은 r 4가지 
가 된다. 
ㄴ 모양을 예로 들었을 때 
1 0 0 0
1 1 1 1
와 같이 표현할 수 있다. 
w 와 h를 이용할 때, M,N의 종이에서 
M - w + 1 번 
N - h + 1 번 
반복문으로 돌며 합을 구해볼 수 있을것이다. 
상하반전의 경우 reverse로 해결할 수 있다. 
*/

const [nm, ...lines] = `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`
  .trim()
  .split('\n');

const [n, m] = nm.split(' ').map(Number);
const paper = lines.map((v) => v.split(' ').map(Number));
let max = 0;

// Basic Shapes
const I = [[1, 1, 1, 1]];
const L = [
  [1, 1, 1],
  [1, 0, 0],
];
const O = [
  [1, 1],
  [1, 1],
];
const H = [
  [1, 1, 0],
  [0, 1, 1],
];
const T = [
  [1, 1, 1],
  [0, 1, 0],
];

const shapes = [I, L, O, H, T];

// rotate method
function rotate(mat, count = 1) {
  if (count === 0) return mat;
  const colLastIndex = mat.length - 1;
  const rowLastIndex = mat[0].length - 1;
  const rotated = [];
  for (let i = 0; i <= rowLastIndex; i++) {
    const newRow = [];
    for (let j = colLastIndex; j >= 0; j--) {
      newRow.push(mat[j][i]);
    }
    rotated.push(newRow);
  }
  return rotate(rotated, count - 1);
}

/* 모양을 만들었을 때 해당 모양의 max를 리턴 */
function returnMax(s) {
  const srl = s.length;
  const scl = s[0].length;
  let max = 0;
  for (let mr = 0; mr <= n - srl; mr++) {
    for (let mc = 0; mc <= m - scl; mc++) {
      let sum = 0;
      for (let r = 0; r < srl; r++) {
        for (let c = 0; c < scl; c++) {
          sum += s[r][c] * paper[mr + r][mc + c];
        }
      }
      max = Math.max(max, sum);
    }
  }
  return max;
}

// 대칭, 회전하여 만들수 있는 모든 모양을 넣어준다.
shapes.push(rotate(I));

const symL = [...L].reverse();
shapes.push(rotate(L), rotate(L, 2), rotate(L, 3));
shapes.push(symL, rotate(symL), rotate(symL, 2), rotate(symL, 3));

const symH = [...H].reverse();
shapes.push(rotate(H), symH, rotate(symH));

shapes.push(rotate(T), rotate(T, 2), rotate(T, 3));

// 모든 모양에 대하여 max를 업데이트
shapes.forEach((s, i) => {
  max = Math.max(max, returnMax(s));
});

console.log(max);

/* 꽤나 어려웠다. 19개를 다 만들어 풀 수도 있었지만 rotate 함수를 만들어서 회전하는 방식을 취했다. 
DFS 방식으로 네가지 모양을 생성하는 풀이들이 있었는데, 그렇게 생성해서 풀 경우 더 나은 방법이 될 수도 있겠다. 
rotate함수는 회전하는 과정이 중복되는 것이 마음에 걸렸다. 
나중에 더 좋은 방법으로 다시 풀어보기로 한다!   */
