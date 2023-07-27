/* 와인먹고싶다.
포도주 잔 고르기. 
연속으로 놓여진 두잔까지만 먹을 수 있다. 
6잔,
6
10
13
9
8
1
...
제한시간 안에 감이 오지 않아서 참고해서 풀기로 한다. 
https://yabmoons.tistory.com/512
n잔까지 왔을 때의 최대값을 생각해 본다. 
와인잔은 w1 w2 ... 라고 하자. 
dn 은 n번째 잔까지 왔을 때의 최대값이라고 하면, 
d1 = w1 
d2 = w1 + w2
d3 = 
  w3 o 
    oxo
    xoo
  w3 x 
    oox
dn =
  ....oxo d(n-2) + wn
  ....xoo d(n-3) + wn + w(n-1)
  ....oox d(n-1)
  이렇게 될 것이다. d4부터는 위의 세 값 중에 가장 큰 값이 답이 된다. 
 */

const [n, ...input] = `6
6
10
13
9
8
1`
  .trim()
  .split(/\s/)
  .map(Number);

const w = [0, ...input];
const dp = [0, w[1], w[1] + w[2]];

for (i = 3; i <= n; i++) {
  dp.push(
    Math.max(
      dp[i - 2] + w[i], //
      dp[i - 3] + w[i] + w[i - 1], //
      dp[i - 1]
    ) //
  );
}

console.log(dp[n]);
