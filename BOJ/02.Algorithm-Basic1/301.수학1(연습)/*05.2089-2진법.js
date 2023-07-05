/* -2진법의 수를 찾는다. 
우선 10진수 수를 받아서, 
그 수를 만드는 문자열을 만들게 하면 될 것 같다. 
https://blog.koderpark.dev/283 
https://thrillfighter.tistory.com/519 진법 변환 공식의 원리. 
N진법의 수는 N으로 나누었을 때 소숫점을 기준으로 목과 나머지로 나누어진다. 
그러므로 몫을 계속해서 N으로 나누었을 때 나머지를 거꾸로 이어가면 N진법의 수가 된다. 
A진법의 수와 B진법의 수는 n으로 나누었을 때 나머지가 동일하며 
이 원리를 통해 
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
