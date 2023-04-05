// // /*
// // 규칙을 찾아보자.
// // 벌집은 6각형이고, 다음 칸은 변의 수만큼의 방을 가짐.
// // 지나는방수 , 돌아가는 방갯수
// // 1 1
// // 2 6
// // 3 3*6
// // 4 3*3*6
// // 5 3*3*3*6
// // 방이 늘어나는 것에는 규칙이 있음. 규칙 안에 들어오는 범위의 수에는 각각의 지나는 방 수가 결정됨.
// //  */

// // /*
// // 번호를 받아서 몇번째 준위의 값인지 확인하면 찾을 수 있을 것이다.
// // 몇번째 준위의 값인지는 1일때는 예외로 하고, 2부터 계산
// // 지나는 방, 호수
// // 2개방 ,2 ~ 2+(3**0)*6-1
// // 3개방 ,2+6-1(+1) ~ 2+6-1+1 + ((3**1)*6-1)
// // 4개방 ,2+6-1+1 + 3*6-1(+1) ~ 2+6-1+1 + 3*6-1(+1) + ((3**2)*6 -1)
// // */

// // /*
// // 재귀함수로 몇번 지나는지 검사를 해야 할 것 같다.
// // */
// {

// let roomCount = 2;
// let startNum = 2;

// function returnMinPath(rn) {
//   if (rn === 1) {
//     return 1;
//   }
//   const endNum = startNum
//   for (let i = startNum; i <= endNum; i++) {
//     if (rn === i) {
//       return roomCount;
//     }
//   }
//   roomCount++;
//   startNum = endNum + 1;
//   threeExponant++;
//   return returnMinPath(rn);
// }

// console.log(returnMinPath(45));

// 완전히 잘못생각했다. 규칙을 완전히 잘못 셈
// 2번째부터 각 방에서 노출되는 변에 3개씩이니 그에 준하게 늘어날것이라고 착각을 했다.
// 층수   1   2   3   4
//방 갯수  1  6,  12,  18 ... 6*n
//시작,끝방 1, 2,7 8,19

// 노출된 방 3개. 각 방마다 옆방과 곂지는 방 1개씩. 6개 빼준다. 앞방수*3-앞방수. 즉 앞방수(2)가 된다.

// 아예 새로 계산을 해 보자.
// 룸 갯수, 첫룸, 막룸을 카운트하면서 재귀함수로 찾을것이다.

const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
const n = Number(input);

let startRoom = 2;
let roomCountAtFloor = 6;
let floor = 2;

function returnPassCount(roomNum) {
  if (roomNum === 1) {
    return 1;
  }
  const lastRoom = startRoom + roomCountAtFloor - 1;
  for (let i = startRoom; i <= lastRoom; i++) {
    if (i === roomNum) {
      return floor;
    }
  }
  startRoom = lastRoom + 1;
  roomCountAtFloor = 6 * floor;
  floor++;
  return returnPassCount(roomNum);
}

console.log(returnPassCount(n));

// 처음부터 꼼꼼히 검증하자. ..
