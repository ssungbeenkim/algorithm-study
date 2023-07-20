/* 
answer 과 sum + nums[currentIndex]를 비교하여 answer 없데이트 한다. 
sum + nums < 0 이면 sum을 0 으로 초기화 해 주어 다음 값부터 계산하도록 한다. 
*/
{
  const [n, ...nums] = `2
0 -1`
    .split(/\s/)
    .map(Number);

  let sum = 0;
  let ans = nums[0];

  for (i = 1; i < n; i++) {
    const cur = sum + nums[i];
    console.log(cur);
    if (ans < cur) {
      ans = cur;
    }
    if (cur < 0) {
      sum = 0;
    } else {
      sum = cur;
    }
  }

  console.log(ans);
}
/* 
현재까지 합이 0인 경우 total을 초기화. 
음수인 경우 다음 값부터 시작하는것이 더 큰 값을 도출해내기 때문이다. 
음수를 포함해서 다음 값으로 넘어가면 더 작은 값을 도출하게 되기 때문. 

음수가 아닌 경우에는 이전까지 값보다 적어지더라고 다음에 큰 값이 나오면 
연속되는 합으로 큰 값을 갱신해나가는것에 문제가 없다. 
*/

/* 
07172328 지금 보니 뭔가 이상하게 풀기는 한 것 같다. 
첫번째 값부터 확인할 수 있도록 하여 통과했다. 근데 어디에서 틀렸던 것일까? 
*/
{
  const [n, ...input] = `5
-5 -4 -3 -2 -1`
    .split(/\s/)
    .map(Number);

  // 첫번째 값을 best값으로 해 둔다. [1]값부터 탐색할 것이고 input이 하나면 반복문x
  let ans = input[0];

  // 반복문 돌기 전 초기 총합은 첫번째 값으로 둔다.
  // 근데 첫 값이 음수이면? 두번째 값부터 카운트 되도록 해야한다.
  let sum;
  if (ans < 0) {
    sum = 0;
  } else {
    sum = ans;
  }

  for (let i = 1; i < n; i++) {
    //두번째 값부터 합의 값을 ans와 비교하여 업데이트한다.
    const cur = sum + input[i];
    if (ans < cur) {
      ans = cur;
    }
    // 합이 음수일 경우 sum을 0으로 만들어 다음 값부터 계산하도록 한다.
    if (cur < 0) {
      sum = 0;
    } else {
      sum = cur;
    }
  }

  console.log(ans);
}

//최종 수정
{
  const [n, ...input] = `5
-5 -4 -3 -2 -1`
    .split(/\s/)
    .map(Number);
  let ans = input[0];

  let sum = ans < 0 ? 0 : ans;

  for (let i = 1; i < n; i++) {
    const cur = sum + input[i];
    if (ans < cur) {
      ans = cur;
    }
    if (cur < 0) {
      sum = 0;
    } else {
      sum = cur;
    }
  }

  console.log(ans);
}
