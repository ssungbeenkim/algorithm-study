// 문제
// 준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.

// 영수증에 적힌,

// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

// 입력
// 첫째 줄에는 영수증에 적힌 총 금액
// $X$가 주어진다.

// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수
// $N$이 주어진다.

// 이후
// $N$개의 줄에는 각 물건의 가격
// $a$와 개수
// $b$가 공백을 사이에 두고 주어진다.

// 출력
// 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.

// 제한
//
// $1 ≤ X ≤ 1\,000\,000\,000$
//
// $1 ≤ N ≤ 100$
//
// $1 ≤ a ≤ 1\,000\,000$
//
// $1 ≤ b ≤ 10$

{
  //첫 풀이
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split('\n');
  const total = Number(input[0]);
  const sortOf = Number(input[1]);
  let computeTotal = 0;
  for (i = 2; i < input.length; i++) {
    computeTotal += input[i]
      .split(/\s/)
      .map(Number)
      .reduce((a, c) => a * c, 1);
  }
  computeTotal === total ? console.log('Yes') : console.log('No');
}

{
  // chatGPT를 활용해서 더 간단히 만들어보는 연습을 하고 있다.
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`.trim().split('\n');
  const total = Number(input[0]);
  const products = input.slice(2).map((str) => str.split(' ').map(Number));
  const computeTotal = products.reduce((acc, cur) => acc + cur[0] * cur[1], 0);

  console.log(computeTotal === total ? 'Yes' : 'No');
} // 2차원 배열을 활용하고, reduce로 2차원 배열을 꺼내 계산해 더해 총합을 내는 것이 인상적이다.
