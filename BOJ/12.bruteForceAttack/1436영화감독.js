/* 
1. n까지 종말의 수를 만들어 배열에 넣고 sort 한 후 n번째 값을 출력하면 될 것 같다. 
-> 종말의 수를 순서대로 만드는 것이 아니면 어렵기에 X 

2. 
count 
while true 로 666부터 1씩 계속 증가시키며 666이 들어있는 수를 찾으면 count를 증가
count 가 input과 같아지면 break 하고 해당 수 return 
해당 수가 답이 된다. 
*/

const input = 500;

function findEndNum(n) {
  let count = 0;
  let i = 666;
  const searchString = '666';
  while (true) {
    JSON.stringify(i).includes(searchString) && count++;
    if (count === n) {
      return i;
    }
    i++;
  }
}

console.log(findEndNum(input));
