{
  // 시간복잡도에 관한 문제이다.
  // 24262
  console.log(1);
  console.log(0);
}

{
  // 24263
  const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
  console.log(Number(input));
  console.log(1);
}

{
  //24264
  const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
  console.log(Number(input) ** 2);
  console.log(2);
}

{
  //24265
  const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
  const n = Number(input);
  let count = 0;
  for (i = 1; i < n; i++) {
    for (j = i + 1; j < n + 1; j++) {
      count++;
    }
  }

  console.log(count);
  console.log(2);
  // 시간초과
}
{
  // 보아하니 실행횟수가 n ~ n-1까지의 등차수열의 합이다. 공식을 구해보니 n*(n-1)/2임.
  const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
  const n = Number(input);
  console.log((n * (n - 1)) / 2);
  console.log(2);
}

{
  // 24266
  const input = `${require('fs').readFileSync('dev/stdin')}`.trim();
  const n = BigInt(input);
  console.log(`${n ** 3n}`);
  console.log(3);
} // 입력값의 범위가 BigInt일 수 있어서 틀렸었다.

{
  // 24267 *
  // 내가 찾은 문제도 맞았고, 조합도 맞았다.
  // 풀이는
  const n = BigInt(`${require('fs').readFileSync('dev/stdin')}`);
  let sum = BigInt(0);
  for (let i = BigInt(1); i <= n - BigInt(2); i++) {
    sum = sum + (i * (i + BigInt(1))) / BigInt(2);
  }

  console.log(sum.toString());
  console.log('3');
}
{
  // 내가 찾은 방법으로 풀려면 이렇게. bigInt끼리 계산되도록 해야 한다.
  const n = `${require('fs').readFileSync('dev/stdin')}`.trim() * 1;
  console.log(`${(BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)}`);
  console.log(3);
}

// bigint 계산에 주의할것.
