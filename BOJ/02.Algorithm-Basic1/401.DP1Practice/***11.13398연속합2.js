/* 
연속합을 구한다. 
10 -4 3 1 5 6 -35 12 21 -1
10 6 9 10 15 21 -14* 12 33 -1
10 6 9 10 15 21 21* 33 54 53
dp[n]은 입력으로 들어온 n번째 수까지의 최대 연속합이다. 
인덱스로 값을 돌면서 dp의 요소를 설정한다. 
음수가 되면 다음 값에서는 새로 시작하도록 한다. 
최대값을 출력하면 가장 큰 연속합을 구할 수 있다. 
근데, 한번까지는 빼고 합할 수 있다. 
빼야 할 때는 음수일때이며 진행되고 있는 연속합에서 한번 뺄 수 있다. 
*/

/* 
반례를 찾아보자. 
`8
1 -3 4 8 -4 -3 9 2`
18 
20?
-1 -1 -1
-1 -1 
*/

// {
//   const [n, ...input] = `3
// -1 -4 -3`
//     .trim()
//     .split(/\s/)
//     .map(Number);

//   const dp = [];
//   let chance = 1;

//   for (let i = 0; i < n; i++) {
//     // 이전 값이 음수인 경우 초기화.
//     if (dp[i - 1] < 0) {
//       // 첫 값은 여기로 안들어옴.
//       dp[i] = input[i];
//     } else if (i === 0) {
//       // 첫번째 값이면 첫 값으로 해준다. 음수이면 깍아준다.
//       if (dp[i] < 0) {
//         chance--;
//       }
//       dp[i] = input[i];
//     } else {
//       const newItem = input[i] + dp[i - 1];
//       if (newItem < 0) {
//         // newItem 음수인 경우 chance-- 해주고 음수이면 새 값으로 재시작. 아니면 재활용.
//         chance--;
//         if (chance < 0) {
//           dp[i] = newItem;
//           chance = 1;
//         } else {
//           dp[i] = dp[i - 1];
//         }
//       } else {
//         // 양수인 경우.
//         dp[i] = newItem;
//       }
//     }
//   }

//   console.log(Math.max(...dp));
// }
/* 답이 맞게 나오고 반례도 다 맞게 나온다. 하지만 풀이를 통과하지 못한다. 
조금 어렵게 푼 감이 있고 그냥 되는대로 푼 것 같다. 가독성이 떨어져서 어디가 문제인지도 
파악하기가 쉽지가 않다. 
다른 풀이를 참고해 보니 훨씬 가독성도 좋고 좋은 방법이 있어서 이용해서 다시 풀도록 한다. 
우선 여러 풀이를 살펴보면서 내 풀이의 문제를 찾아보고, 다른 풀이 더 참고해서 보도록 하자.

https://steady-coding.tistory.com/181 
https://seol-limit.tistory.com/46 
dp를 활용해서 풀었을 때의 풀이가 논리적인 흐름도 훨씬 잘 보이고 깔끔한 것 같다. 
*/

/* 
x = 0
d = 1

* 해당 인덱스까지 삭제 없이 갈 때 
  각 인덱스까지 수열의 최대합
  dp[i][x] = max(dp[i - 1][0] + arr[i], arr[i]) 

* 삭제한적이 있는 경우, 2가지로 나누어 볼 수 있다.
  이전에 값을 제거한 적이 없는 경우 현제 값을 제외한 이전 인덱스까지의 최대합.  
  dp[i][d] = dp[i - 1][x]  
  이전에 값을 제거한 적이 있는 경우 현제값을 포함한 이전 인덱스까지의 최대합 
  dp[i][d] = dp[i - 1][d] + arr[i] 
  둘 중에 큰 값으로 한다. 
 */

{
  // 다시 이전 풀이를 적용해보려 했으나 너무 복잡해짐. 가독성 좋게, 모듈화해서 생각할 수 있게 해야겠다.
  //   const [n, ...inp] = `10
  // 10 -4 3 1 5 6 -35 12 21 -1`
  //   .trim()
  //   .split(/\s/)
  //   .map(Number);
  // const x = 0;
  // const d = 1;
  // let bestx = inp[0];
  // let bestd = bestx;
  // let sumx = ans < 0 ? 0 : ans;
  // let sumd = sumx;
  // for (let i = 1; i < n; i++) {
  //   const curx = sumx + inp[i];
  //   const curd = sumx;
  //   const befd = sumd + inp[i];
  //   sumx = curx < 0 ? 0 : curx;
  //   bestx = bestx < curx ? curx : bestx;
  // }
}

/* 
x = 0
d = 1

* 해당 인덱스까지 삭제 없이 갈 때 
  o[n]을 해당 인덱스의 값을 포함하는 각 인덱스까지 연속합의 최대값으로 정의할 때 
  o[i] = max(o[i-1] + inp[i], inp[i]) 

* 삭제한적이 있는 경우, 2가지로 나누어 볼 수 있다.
  x[n]은 해당 인덱스까지 하나의 값을 삭제했을 때의 연속합의 최대값으로 정의할 때 
  현재값을 삭제 | 현재값을 포함
  x[i] = max(o[i-1], x[i-1] + inp[i])   
  둘 중에 큰 값을 취한다. 
 inp: 10|-4|3 |1 |5 |6 |-35|12|21|-1
   o: 10|6 |9 |10|15|21|-14|12|33|32
   d: 10|-4*|13|...  
 nod: 10|10|6 |...
   x: 10|10|13|... 
많은 풀이에서 두번째 값부터 점화식을 적용해서 구하고 있다. 
내가 의문인 것은 x 배열을 구할 때 두번째 값부터 이렇게 계산을 하면 문제가 발생하지 않을까 한다. 
무조건 하나의 값은 포함해야 한다는 규칙이 있으므로 x의 두번째 값을 생성할 때에 
1. 현재 값을 삭제할 경우 는 첫번째 값. 
2. 현재 값 삭제 안할 경우에는 이미 삭제된 것이며 무조건 하나를 포함해야 하므로 두번째 값 
그리고 1,2를 비교하여 큰것이 두번재 x의 값이 되어야 한다. 
그러나 2번째 값부터 점화식을 적용할 경우에 1번은 첫번째 값이 되므로 만족한다. 
2번은 만족하지 않는다. x[i-1] + in[i]가 아닌  in[i]가 되어야 한다. 
근데 왜 통과가 되는 것일까? 
이것이 문제가 될 경우를 찾아보자. 두개의 값이 들어온다고 할 때 찾는 것이다. 
  1 100 
o 1 101
d   1
n   100
x   100
답은 잘 나오는 것 같지만 x의 첫번째 값은 값이 하나 있어야 한다는 조건 때문에 비워두는것이 정확하고, 
값이 하나인 경우에는 첫 값을 리턴하게, 
두번째 값까지 구해준 후 반복문을 돌며 값을 채우도록 하는것이 맞는 것 같다. 
 */

/* 정답  
x의 첫번째 인자는 입력 범위 밖의 음수로 지정해 주었다. 
생각보다 다른 풀이를 참고하면서 x의 첫번째 값을 명확하게 하는데 어려움을 겪었다. 
그래서 두번째 값까지 계산을 미리 해주고 세번째 값부터 점화식을 적용하도록 했다. 
그러나 최종 출력에서 x의 첫 값을 null로 해준 것이 입력이 하나일 때 문제가 되었었다. 
쉽지 않았던 문제인 만큼 여러번 곱씹어볼 필요가 있다. 
*/
{
  const [n, ...inp] = `3
-3 -2 -1`
    .trim()
    .split(/\s/)
    .map(Number);

  function getOXMax() {
    // 두번째 값까지는 채워준다.
    const o = [inp[0], Math.max(inp[0] + inp[1], inp[1])];
    const x = [Number.MIN_SAFE_INTEGER, Math.max(inp[0], inp[1])];
    for (let i = 2; i < n; i++) {
      o.push(Math.max(o[i - 1] + inp[i], inp[i]));
      x.push(Math.max(o[i - 1], x[i - 1] + inp[i]));
    }
    return Math.max(...o, ...x);
  }

  console.log(n === 1 ? inp[0] : getOXMax());
}
