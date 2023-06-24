/* 수보다 많이 등장한 것이 오른쪽에 있으면 그중 가장 왼쪽이 오등큰수*/
// 한번 쭉 돌면서 카운트를 저장해 둔다.
// 그 카운트로 오큰수 하면 됨

const [n, ...seq] = `7
1 1 2 3 4 2 1`
  .trim()
  .split(/\s/)
  .map(Number);

const map = new Map();
seq.forEach((v) => {
  map.has(v) ? map.set(v, map.get(v) + 1) : map.set(v, 1);
});

let stk = [];
for (let i = 0; i < n; i += 1) {
  while (stk.length && map.get(seq[stk[stk.length - 1]]) < map.get(seq[i])) {
    seq[stk.pop()] = seq[i];
  }
  stk.push(i);
}

while (stk.length) {
  seq[stk.pop()] = -1;
}

console.log(seq.join(' '));

// map으로 각 수 카운트 불러올 수 있게 만들어 놓고 그 수로 비교해서 오큰수 로직 그대로 넣음.
