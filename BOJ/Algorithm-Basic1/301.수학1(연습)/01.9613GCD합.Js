// Greatest common dividor
/* 
입력이 주어지면 가능한 모든 최대공약수를 구해서 더하면 답이 된다. 
*/
const testStr = Array(101).fill(999983);
testStr[0] = 100;
const [_, ...lines] = `1
${testStr.join(' ')}`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const ans = [];

// 모든 두 수를 제공
lines.forEach((v) => {
  const [n, ...line] = v;
  const gcds = [];
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      const gcd = getGCD(line[i], line[j]);
      gcds.push(gcd);
    }
  }
  ans.push(gcds.reduce((a, b) => a + b));
});
console.log(ans.join('\n'));

// 두 수의 gcd(유클리드 호제법)
// 작은 수(divide)로 큰 수 mod. -> divide
// divede로 divided를 게속 mod 한다. 0이 될 때까지.
function getGCD(a, b) {
  let [vmod, mod] = a <= b ? [b, a] : [a, b];
  while (vmod % mod !== 0) {
    const result = vmod % mod;
    vmod = mod;
    mod = result;
  }
  return mod;
}

/* 중복 제거를 했다가 안했음. 혹시 4 2 2 2 2 와 같이 중복된 수가 들어오는 경우에는
중복을 제거한 다음에 연산을 해야 하는것 아닌가 싶지만 일단 제출해보도록 한다. 
- 정답. 중복된 수는 상관이 없나보다. 문제 조건이 조금 햇갈리게 설명이 되어 있음*/
