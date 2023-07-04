/* -2진법의 수를 찾는다. 
우선 10진수 수를 받아서, 
그 수를 만드는 문자열을 만들게 하면 될 것 같다. 
https://blog.koderpark.dev/283 
https://thrillfighter.tistory.com/519 진법 변환 공식의 원리. 
몫이 1이 될 때까지 나누고, 몫과 나머지들을 거꾸로 세면 된다. 
*/

let input = Number(`-13`.trim());

let n = input;
let d;
const answer = [];
while (true) {
  if (n === 0) {
    answer.push(0);
    break;
  }
  if (n === 1) {
    answer.push(n);
    break;
  }
  if (n < 0) {
    d = Math.ceil(n / -2);
    answer.push(n - -2 * d);
    n = d;
  } else if (n > 0) {
    d = Math.ceil(n / -2);
    answer.push(n - -2 * d);
    n = d;
  }
}
console.log(answer.reverse().join(''));
