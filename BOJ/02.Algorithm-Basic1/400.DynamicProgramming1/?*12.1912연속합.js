/* 
answer 과 sum + nums[currentIndex]를 비교하여 answer 없데이트 한다. 
sum + nums < 0 이면 sum을 0 으로 초기화 해 주어 다음 값부터 계산하도록 한다. 
*/

const [n, ...nums] = `0
3`
  .split(/\s/)
  .map(Number);

let sum = 0;
let ans = nums[0];

for (i = 1; i < n; i++) {
  const cur = sum + nums[i];
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

/* 
현재까지 합이 0인 경우 total을 초기화. 
음수인 경우 다음 값부터 시작하는것이 더 큰 값을 도출해내기 때문이다. 
음수를 포함해서 다음 값으로 넘어가면 더 작은 값을 도출하게 되기 때문. 

음수가 아닌 경우에는 이전까지 값보다 적어지더라고 다음에 큰 값이 나오면 
연속되는 합으로 큰 값을 갱신해나가는것에 문제가 없다. 
*/
