/* 
1~N까지 수를 이어서 쓰면 하나의 수를 얻을 수 있다. 
이 수의 자릿수를 구하라. 
S1
배열에 때려박고 붙여 갯수세기 - 0.15초이고 입력은 10억까지 들어온다. 시간초과 날것

수의 크기에 따른 자릿수 규칙을 찾아본다. 


*/

const input = `120`.trim();
const n = Number(input);
const l = input.length;
const sum = getSum(l);
const subt = 10 ** l - 1 - n;
console.log(sum - subt * l);

function getSum(l) {
  let sum = 0;
  for (let i = 1; i <= l; i++) {
    sum += 9 * 10 ** (i - 1) * i;
  }
  return sum;
}

/* 
규칙을 찾고 나면 어렵지는 않은 문제였다. */
