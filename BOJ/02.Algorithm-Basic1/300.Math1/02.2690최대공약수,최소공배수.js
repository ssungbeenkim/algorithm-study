/* 두 자연수를 입력받아 최대공약수, 최소공배수를 출력 
최대공약수는 둘 중 작은 수에서 하나씩 줄어들며 나누어지는 수를 찾는다. 
최소공배수는 둘 중 큰 수에 1부터 구하며 작은수로 나누어지는 수에서 컷한다. 
*/

const [a, b] = `24 18`.trim().split(/\s/).map(Number);
let less;
let more;
// 같은 경우에는 무엇이 할당되어도 상관 없다.
if (a <= b) {
  more = b;
  less = a;
} else {
  less = b;
  more = a;
}

let answer = '';
for (let i = less; true; i--) {
  if (less % i === 0 && more % i === 0) {
    answer += i;
    break;
  }
}

for (let i = 1; true; i++) {
  if ((more * i) % less === 0) {
    answer += `\n${more * i}`;
    break;
  }
}

console.log(answer);
