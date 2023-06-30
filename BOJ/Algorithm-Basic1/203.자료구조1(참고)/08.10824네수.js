/* 공백을 기준으로 네 수를 입력받는다. 두 수끼리 붙여서 합해서 출력하는 간단한 문제. */

const [a, b, c, d] = `10 20 30 40`.trim().split(/\s/);

console.log(Number(a + b) + Number(c + d));
