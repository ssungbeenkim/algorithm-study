/* 
5로 나눠지면 /5 
5로 안나눠지면 
  3으로 나머지를 나눠보고 떨어지면 3으로 전체를 나눠본 수와 비교하여 큰것을 출력 
  3으로 나마지를 나눠보고 떨어지지 않으면 전체를 3으로 나눠보고 떨어지면 출력 
    아니면 -1을 출력 


    5로 나눠질 때 
      출력 
    5로 안나눠지고 3으로 나머지가 나눠질때 
      출력 
    5로 안나눠지고 3으로 나머지가 나눠지지 않을 때 
      3으로 n이 나눠지면 그 수 출력 
      -1
*/
{
  const n = 11;

  const afterFive = n % 5;
  const fiveCount = Math.trunc(n / 5);
  const afterFiveThree = (n % 5) % 3;
  const afterFiveThreeCount = afterFive / 3;
  const afterThree = n % 3;
  const threeCount = n / 3;

  if (!afterFive) {
    console.log(fiveCount);
  } else if (afterFive && !afterFiveThree) {
    console.log(fiveCount + afterFiveThreeCount);
  } else if (afterFive && afterFiveThree) {
    if (!afterThree) {
      console.log(threeCount);
    } else {
      console.log(-1);
    }
  } else {
    console.log(-1);
  }
} // 11에서 걸리다. 5보다 3이 많을 경우가 있구나.

// 그러면. 가능한 모든 경우를 고려하는 방법으로 가야겠다.

{
  // 최대로 나누어 질 수 있는 수를 각각 구하고, 그 수까지 모든 경우의 수 중에 n을 만족하는 수의 합을 배열에 넣는다.
  // 그 다음 최솟값을 출력하고, 배열이 비었으면 -1을 출력하자.
  const n = 18;
  const five = Math.trunc(n / 5);
  const three = Math.trunc(n / 3);

  const result = [];

  for (f = 0; f <= five; f++) {
    for (t = 0; t <= three; t++) {
      if (5 * f + 3 * t === n) {
        result.push(f + t);
      }
    }
  }

  console.log(result.length ? Math.min(...result) : -1);
}
