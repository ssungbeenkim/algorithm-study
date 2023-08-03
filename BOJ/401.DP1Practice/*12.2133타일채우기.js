/* 
타일 채우기
시간초과. 
우선 8개까지 세어 보니 N이 홀수인 경우에는 채울 수 없다. 
짝수인 경우 각각 독립적으로 떼어 움직일 수 있는 새로운 모양이 나온다. 
좀더 연구해 봐야 하는 부분은 
1. 모든 짝수인 경우에서 독립적인 모양이 하나씩만 나온다는 것을 어떻게 확정할 수 있는가? 
2. 경우의 수를 어떻게 점진적으로 세어 나갈지 점화식을 다 세우지 못했다. 중복되는 경우를 생각중이었다. 


다른 풀이를 보고 참고해서 풀어보자.   
- 홀수인 경우 채울 수 없음은 직관적으로 알 수 있다. 가로를 채울 경우 세로에서 남는 부분이 있다. 
- 각 짝수에서 고유한 모양을 2개씩 가지는 부분은 위에서부터 두 층에서 가로방향 양 끝에 하나씩 있는 경우인데 
  가운에 있는 모든 값이 가로방향으로 누워야 한다. 하나라도 세로로 바뀌는 경우 쪼개어 계산할 수 있기에 고유한 형태가 아님
  포함한 값이 되므로 고유한 값이 아닐 것이라고 확정할 수가 있다. 
- 위 두가지를 활용해서 점화식을 세운다. 

점화식은 
Tn = 
    Tn-2 * T2
  + Tn-4 * 2
  + Tn-6 * 2
  ....
  + T4 * 2
  + T2 * 2
  + 2    
*/
/* 정답 
대부분의 풀이에서 dp가 되는 배열의 [0]값을 1로 두고 시작한다. 
그러나 요즘은 직관적으로 이해하기 쉽게 풀려고 하고 있어서 
홀수나 1이 들어오면 바로 0을 출력하고 
[2]의 경우에는 미리 할당해 주어서 
그렇지 않은 경우에 4부터 세게 했다. 
근데 코드가 뭔가 난해하긴 하다. 
시간을 제한해서 규칙을 찾고 있었는데 거의 다 찾고 시간내에 온전히 알아내지 못한게 아쉽다. 
*/
const n = Number(`${require('fs').readFileSync('dev/stdin')}`.trim());
if (n % 2 || n === 1) {
  console.log(0);
} else {
  const t = Array(n + 1).fill(0);
  t[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    let ti = 2;
    for (let j = 2; j <= i - 4; j += 2) {
      ti += t[j] * 2;
    }
    t[i] = ti + t[i - 2] * t[2];
  }
  console.log(t[n]);
}
