/*
n개 줄에 m개씩 들어온다. 
우선 입력을 2차원 배열로 받아오면 
인덱스 1은 1번째 줄이 된다. 

새로운 2차원 배열을 만들고, 
for i = 1~n
i줄의 요소를 돌면서 n+i줄의 요소와 더해서 새 배열을 생성하고,push
join' '하고 join'\n' 해서 만들면 될 것 같다. 
 */

const inputArr = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n')
  .map((v) => {
    return v.split(' ').map(Number);
  });

const n = inputArr[0][0];
const answerArr = [];
for (i = 1; i < n + 1; i++) {
  const lineArr = [];
  inputArr[i].forEach((v, j) => {
    lineArr.push(v + inputArr[n + i][j]);
  });
  answerArr.push(lineArr.join(' '));
}
console.log(answerArr.join('\n'));

{
  // 또다른풀이
  const inputArr = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`
    .split('\n')
    .map((v) => {
      return v.split(' ').map(Number);
    });

  const n = inputArr[0][0];
  const matrix1 = inputArr.slice(1, n + 1);
  const matrix2 = inputArr.slice(n + 1);
  const newArr = matrix1.map((v, i) => {
    return v.map((val, idx) => {
      return matrix2[i][idx] + val;
    });
  });

  console.log(newArr.map((v) => v.join(' ')).join('\n'));
}
