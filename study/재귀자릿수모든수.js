// from 리모컨
// 재귀적으로 원하는 수들을 가지고 원하는 자릿수의 모든 수를 생성해 주는 코드이다.
function AllCombinations(digits, n, currentNumber) {
  if (currentNumber.length === n) {
    console.log(currentNumber);
    return;
  }

  for (let i = 0; i < digits.length; i++) {
    AllCombinations(digits, n, currentNumber + `${digits[i]}`);
  }
}

const digits = [0, 1, 9];
const n = 2; // 원하는 자리수를 입력하세요

AllCombinations(digits, n, '');
