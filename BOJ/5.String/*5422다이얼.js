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

// 더나은 풀이
// 너무 하드코딩한 느낌이 있어서 더 나은 풀이를 찾아봤다.
{
  const input = `UNUCIC`.toString().split('');
  const charMap = {};
  let charStack = '';
  let counter = 3;

  // for문을 활용해 아스키코드 A~Z에 해당하는 값을 순서로 받아와 문자열로 아루어진 키값과 숫자를 차례로 오브젝트에 추가해 준다.
  // 문자를 받아와서 그것에 해당하는 숫자를 찾을 때 활용할 Map을 만드는 것이다.
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(); i++) {
    charStack += String.fromCharCode(i);

    if (
      charStack.length === 3 && //받은 문자의 길이가 3
      i !== 'R'.charCodeAt(0) && //길이가 W3기 되기 전에 차단
      i !== 'Y'.charCodeAt(0)
    ) {
      charMap[charStack] = counter;
      counter++;
      charStack = ''; //그리고 charstack은 다시 초기화를 시켜줌
    } else if (charStack.length === 4) {
      //받은 문자의 길이가 4일때에 해당. 예외 처리.
      charMap[charStack] = counter;
      counter++;
      charStack = '';
    }
  }

  let result = input.reduce((acc, char) => {
    for (let key in charMap) {
      if (key.includes(char)) {
        acc += charMap[key];
      }
    }
    return acc;
  }, 0);

  console.log(result);
}

// 다시 한번 떠올려가면서 풀어봤다.
{
  const input = `UNUCIC`.split('');
  const charTimeObj = {};
  let charStack = '';
  let count = 3;

  // charTimeObj 제조기
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    charStack += String.fromCharCode(i);
    if (
      charStack.length === 3 &&
      i !== 'R'.charCodeAt(0) &&
      i !== 'Y'.charCodeAt(0)
    ) {
      charTimeObj[charStack] = count;
      count++;
      charStack = '';
    } else if (charStack.length === 4) {
      charTimeObj[charStack] = count;
      count++;
      charStack = '';
    }
  }

  /* 
reduce 로 따로 합산한 값을 담을 변수 선언 없이 내부적으로 처리해줄 수 있는데, 
사실 result에 할당해주게 되는 것이므로 비슷하다고 볼 수도 있겠다는 생각이 든다. 
 */
  const result = input.reduce((a, c) => {
    for (let char in charTimeObj) {
      if (char.includes(c)) {
        a += charTimeObj[char];
      }
    }
    return a;
  }, 0);

  console.log(result);

  // {
  //   let sum = 0;
  //   input.forEach((v) => {
  //     for (let char in charTimeObj) {
  //       if (char.includes(v)) {
  //         sum += charTimeObj[char];
  //       }
  //     }
  //   });

  //   console.log(sum);
  // }
} // reduce를 저렇게 사용하는 것이 인상깊음
