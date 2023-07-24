/* 
n칸일 때 
*/

/* 
시간초과. 참고해서 푼다. 
https://kiveiru.tistory.com/57 
dp[floor][x,l,r] 로 dp 배열을 만들어 생각한다. 
다음 층에서는 이전 층을 참고하여 경우의 수를 계산한다. 
각 계산에서 9901로 나누고 마지막 층에서 합하여 출력한다. 

dp[1] = [1,1,1]
dp[2] = [dp[1][x]+dp[1][l]+dp[1][r], dp[1][x]+]
*/

const n = Number(`4`.trim());

const x = 0;
const l = 1;
const r = 2;

const dp = [[0, 0, 0]];

dp[1] = [1, 1, 1];

for (i = 2; i <= n; i++) {
  dp.push([
    (dp[i - 1][x] % 9901) + (dp[i - 1][l] % 9901) + (dp[i - 1][r] % 9901),
    (dp[i - 1][x] % 9901) + (dp[i - 1][r] % 9901),
    (dp[i - 1][x] % 9901) + (dp[i - 1][l] % 9901),
  ]);
}
console.log((dp[n][x] + dp[n][l] + dp[n][r]) % 9901);

// push와 직접 인덱스에 할당하는 것은 차이가 없다. 그냥 가독성 좋게 하는게 나음.
Array(2);
