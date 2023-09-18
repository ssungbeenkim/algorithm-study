/* 문제가 영어로만 되어있다. 삭제되었다고 하는데, 
https://velog.io/@hyeokjinon/%EB%B0%B1%EC%A4%80-1248-%EB%A7%9E%EC%B6%B0%EB%B0%94-Java 
여기에서 문제를 볼 수 있다. 

-10 부터 10까지 사용 가능 
수를 N개 뽑아서 썼다.  
N*(N+1)/2개의 구간의 합을 구해서 행렬로 표현했음. 
A[i]는 i번째 쓴 수 S[i][j]는 A[i]부터 A[j]까지 합이 0보다 크면 +, 작으면 -. 0이면 0인듯. 
i는 j보다 항상 작거나 같다. 

입력으로 들어오는 문자를 해석해서 행렬을 만들 수 있다. 
각 행렬의 인덱스는 구간을 나타낸다. 
해당 구간의 수의 합이 모든 구간을 만족하면 맞는 수가 된다. 

그렇다면 어떻게 검사를 해볼 수 있을까?
-10부터 10까지의 수들로 후보를 만들어나가야 한다. 
만들어 나가는 과정에서 검사를 하며 만들어 나갈 수 있다면 dfs로 작성할 수 있을 것이다. 

첫번째 수는 00을 만족하는 모든 수가 후보가 될 수 있다. 
두번째 수는 두가지 조건을 만족해야 한다. 
3번째 수는 3가지 조건을 만족해야 하고 
4번째 수는 4가지 조건을 만족한다. 

모든 조간을 만족하는 수를 하나 출력한다. 

첫번째 숫자는 1열의 1행
2번째 숫자는 2열의 1행, 2행 -> -10~10의 수 중에 두가지 조건을 만족하는 수들을 추가해서 재귀호출.
몇번째 수 -> map의 열과 행인지
만들어진 수를 저장할 배열. 

3번째 숫자는 3열의 1행 2행 3행 을 검사한다. 

*/
{
  const [N, S] = `4
-+0++++--+`
    .trim()
    .split('\n');
  const n = Number(N);
  const marks = S.split('');

  // 입력을 행렬로 변환
  const map = [];
  for (let i = N; i > 0; i--) {
    const nulls = [];
    for (let j = N - i; j > 0; j--) {
      nulls.push(null);
    }
    const conditions = marks.splice(0, i);
    map.push([...nulls, ...conditions]);
  }
  const resultArray = dfs(0, []);
  console.log(resultArray.next().value);

  function* dfs(curIndex, nums) {
    // 몇번째 수 -> map의 열과 행인지
    // 만들어진 수를 저장할 배열.
    if (curIndex === n) {
      // N개의 수를 만들었다면 현재 배열을 yield
      yield nums.slice().join(' ');
    } else {
      for (let i = -10; i <= 10; i++) {
        // -10~10의 수에 대하려 검사를 수행
        // 통과하는 수에 대해서만 재귀호출
        if (!isPass(i, curIndex, nums)) continue;
        nums.push(i);
        yield* dfs(curIndex + 1, nums);
        nums.pop();
      }
    }
    return;
  }

  function isPass(num, curIndex, nums) {
    // map의 연산자를 토대로 검사하여 조건에 맞는 수인지 확인해줌
    // map[0][curIndex]] ~ map[curIndex][curIndex]의 부호로 검사를 수행한다.
    for (let i = 0; i <= curIndex; i++) {
      // 각각의 검사를 수행하고, 만족되지 않은 경우가 있으면 false를 리턴. 모두 통과한다면 true
      const sum = nums.slice(i).reduce((p, c) => p + c, 0) + num;
      const op = map[i][curIndex];
      if (op === '+') {
        if (sum <= 0) return false;
      } else if (op === '-') {
        if (sum >= 0) return false;
      } else if (op === '0') {
        if (sum !== 0) return false;
      }
    }
    return true;
  }
}

// 정답이 된다. 그러나 뭔가 더 명확하게 처음 값 하나만 출력할 필요가 있을 것 같다.
// 플래티넘의 풀이를 분석해본다. 나의 풀이와 시간 차이가 35배나 나는 풀이다.
// https://www.acmicpc.net/source/56211353
// 이해가 어렵다. 이정도로 넘어가자.

// dfs로 처음 작성해서 맞았다는 것에 의의를 두자. 제너레이터로는 되는데 왜 다른 방법법으로는 안되는지 의문.
