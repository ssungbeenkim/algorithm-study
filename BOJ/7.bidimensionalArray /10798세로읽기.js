// 10798 세로읽기

// 인덱스를 활용하면 될 것 같다. 2차원 배열로 받아온 후, 한 배열씩 돌면서 인덱스별로 출력.
// 가장 긴 배열을 기준으로 하면 될 것 같고,
// input을 받아와서 2차원 배열로 만들어 둔다.
// 가장 긴 배열의 길이 찾기.. reduce 로 찾자.

const inputArr = `
AABCDD
afzz
09121
a8EWg6
P5h3kx`
  .trim()
  .split('\n')
  .map((v) => v.split(''));

const maxLength = inputArr.reduce((max, row) => {
  const length = row.length;
  if (length > max) {
    return length;
  } else {
    return max;
  }
}, 0);

let answerArr = [];
for (i = 0; i < maxLength; i++) {
  inputArr.forEach((arr) => {
    arr[i] && answerArr.push(arr[i]);
  });
}
console.log(answerArr.join(''));

//? 배열의 없는 인덱스를 호출하면 ?
{
  const arr = [1, 2, 3];
  console.log(arr[5]); // undefined 호출됨;
}
