/* 단순하게 1부터 더했을때의 최대값. 계속 더해나가다가 피크였던 때른 기엇해서 dp의 첫 값으로. 
나머지 값도 동일하게 해서 구하면 되지 않을까 싶다.
근데? 입력은 100000까지 들어온다. 연산시간은 1초. 턱없이 부족할것이다. 그리고 중간에서 시간하는 
경우에 대해서도 고려하지 않아서 맞지 않다. 

dp 1 = input[0]
dp 2 = dp 1 vs dp1 + input[1]
dp 3 = 
xxxx -> 첫 값부터 계산하기 된다. 중간 어디서든 참조가 가능해야 한다. 

dp[0] = input[0]
dp[1] = dp[0] + input[1] vs input[2] 

그래프처럼.. 
이전 값과의 차이값을 담아두면 어떨까. 근데, 시작 수에 따라서 또 달라질 수 있으니. 

각 인덱스마다 그 수부터 더 나갔을 때 생기는 순열에서 최대값을 찾고, 최종 dp 배열에 추가한다. 
그럼 각 수마다 그 수부터의 순열 중 최대값을 찾을 수 있을 것이다. 
계산의 횟수는 1000개의 입력이 들어왔을 때 각 인덱스마다 1000번씩 하더라도 1억번을 넘지 않고, 
최대값을 찾는 것 포함 1억번은 넘지 않을 것 같다는 생각이 든다. 
이게 내 생각인데, 우선 코드로 가보자고. 
*/

// 시간초과 !
{
  const [n, ...nums] = `5
-1 -2 -3 -4 -5`
    .trim()
    .split(/\s/)
    .map(Number);
  const dp = [];

  function findBest(index) {
    let best = 0;
    let cur = 0;
    for (let i = index; i < n; i++) {
      if (i === index) {
        cur = nums[i];
        best = cur;
      } else {
        cur = cur + nums[i];
        if (best < cur) {
          best = cur;
        }
      }
    }
    dp.push(best);
  }

  for (let i = 0; i < n; i++) {
    findBest(i);
  }
  console.log(Math.max(...dp));
}
