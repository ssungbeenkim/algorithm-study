/* 5422 다이얼 */
// 알파벳을 주면 숫자로 해석. 각 숫자+1씩 해서 더하면 답이다.

// 알파벤을 숫자로 해석. 조건 여러개 => 아스키 변환 후 조건범위에 들어오면 해당 숫자 배열에 넣음.
// case 써도 되고 if문 해도 될 것 같음
// 배열에있는 모든 숫자 +1해서 한다. reduce

const inputStr = `WA`.trim();
const charCodeArr = inputStr.split('').map((v) => v.charCodeAt(0));
const decodedNumArr = [];

charCodeArr.forEach((v) => {
  if (64 < v && v < 68) {
    decodedNumArr.push(2);
  } else if (67 < v && v < 71) {
    decodedNumArr.push(3);
  } else if (70 < v && v < 74) {
    decodedNumArr.push(4);
  } else if (73 < v && v < 77) {
    decodedNumArr.push(5);
  } else if (76 < v && v < 80) {
    decodedNumArr.push(6);
  } else if (79 < v && v < 84) {
    decodedNumArr.push(7);
  } else if (83 < v && v < 87) {
    decodedNumArr.push(8);
  } else if (86 < v && v < 91) {
    decodedNumArr.push(9);
  }
});

console.log(decodedNumArr.map((v) => v + 1).reduce((a, c) => a + c, 0));
