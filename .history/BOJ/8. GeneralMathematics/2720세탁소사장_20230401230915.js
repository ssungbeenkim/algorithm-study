/* 쿼다니페 
0.25 0.1 0.05 0.01 
소숫점 계산이니 100을 곱해서 계산한다. 어피 갯수 count이니.
재귀 비슷하게 하면 될 것 같다. 

입력 배열에 넣어두고 forEach로 한개씩 주면 될듯 

배열에 4가지를 넣어두고 for 돌려서 하나씩 출격
0.25부터 빼보고 양수이면 ++ 또 빼고 ++ .. 음수이면 그만하고 return 
return 된 값 배열에 접시에 올리기 

for문 다 돌면 접시 내역 띄어쓰기로 정리해서 영수증함에 넣음

영수증함에 있는것 한줄씩 출력 


*/
//${require('fs').readFileSync('dev/stdin')}

const [, ...input] = `3
124
25
194`
  .trim()
  .split(/\s/)
  .map(v => Number(v));

const reciptArr = [];
const monetaryArr = [25, 10, 5, 1];

input.forEach((v) => {
  let change = v;
  const plate = [];
  monetaryArr.forEach(m => {
    const count = coinCount(m,change) // change 바꿔주고 갯수 리턴 
    plate.push(count);
  })
  const recipt = plate.join(' ');
  reciptArr.push(recipt)
});

function coinCount(m,change) {
  if()
}

