/* 뭔가 현재 위치와 동상님들 위치까지의 차이에서 최대공약수를 구하면 될 것 같음. 
예제상에서는 가장 가까운 수와의 거리가 답이 됨. 그리고 다른 두 수까지의 거리는 최단거리로 나누어짐
근데, 2, 4 5 6 인 경우에 D는 1이 되어야 마땅하다. 걀국 세 수의 최대공약수를 구하는것.
그럼 세 수의 최대공약수를 어떻게 구할 것인지가 관건이다. 
작은 순으로 줄세운 뒤, 둘의 gcd구한 수와 가장 큰 수와의 gcd를 구한다. 
문제는 동생의 수는 많아질 수 있다는거. 10^5명까지 가능하다. 
어쨋든, n개의 수까지의 차들의 최대공약수를 구하면 답이 된다. 
reduce로 GCD함수를 사용하면 되지 않을까 싶다. 

 */

const [n, s, ...arr] = `1 1
1000000000`
  .trim()
  .split(/\s/)
  .map(Number);

const bros = arr.map((v) => Math.abs(v - s));
let cur = bros[0];
for (i = 1; i < n; i++) {
  cur = getGCD(cur, bros[i]);
}
console.log(cur);

function getGCD(a, b) {
  let [vmod, mod] = a <= b ? [b, a] : [a, b];
  while (vmod % mod !== 0) {
    const result = vmod % mod;
    vmod = mod;
    mod = result;
  }
  return mod;
}
