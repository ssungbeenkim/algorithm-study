// 1.모든 합의 경우를 구한다.
//  어떻게 구하노.
// 2.M을 넘지 않으면서 가장 가까운 수를 구한다.

const [_, m, ...nums] = `10 500
93 181 245 214 315 36 185 138 216 295`
  .trim()
  .split(/\s/)
  .map(Number);

// 모든 세가지 합을 Set에 넣기
const sums = new Set();
const n = nums.length;
for (i = 0; i < n - 2; i++) {
  for (j = i + 1; j < n - 1; j++) {
    for (k = j + 1; k < n; k++) {
      sums.add(nums[i] + nums[j] + nums[k]);
    }
  }
}

// 요소를 돌며 m보다 작거나 같은 수 중 가장 큰 수 찾기
let answerNum = 0;
for (num of sums) {
  if (num <= m && num > answerNum) {
    answerNum = num;
  }
}
console.log(answerNum);
