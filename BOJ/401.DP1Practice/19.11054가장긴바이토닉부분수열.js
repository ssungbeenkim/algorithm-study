/* 
바이토닉이 뭐야?
바다갈라지듯 한 수를 기준으로 양쪽으로 작아지는 것을 의미하는 것 같다. 
큰 수는 끝에 있을 수 있다. 
바이토닉 수열이면서 가장 길이가 긴 수열의 길이를 구하라. 
모든 인덱스를 돌면서 
인덱스 기준으로 좌우로 가장 긴 오름차순/ 내림차순 부분수열의 길이를구해서 합한것을 배열에 저장. 
가장 큰 것을 출력하면 될 것 같다. 
대략 시간복잡도는 ON^2 이 될 것 같음. 
우선 가독성 좋은 방법으로 풀어보자. 

근데, 좀더 생각해 볼 것이 있는 것 같다. 
입력의 각 인덱스에 대응하도록 따로 배열에 저장을 하려 하는데
해당 인덱스의 수를 포함하여 계산해야 한다. 
그래서 중간에 있는 4를 예로 들면 
  (1)첫 수 ~ 4까지의 수 중에서 4를 포함하는 가장 긴 증가하는 부분 수열을 길이를 빼야 하고 
  (2)4 ~ 마지막까지는 4를 포함하는 가장 긴 감소하는 부분 수열의 길이를 구해야 한다. 
2번을 구하는 과정에서 뒤집어서 1번과 동일하게 계산을 할 수도 있고 index를 활용하여 역순으로 
for 돌려도 된다. for 돌리는게 간편하기는 하다. 다만 구현 잘 해야한다. 
그렇게 구해서 두 값을 더한 후 겹치는 1을 빼주면 해당 인덱스가 될 것이다.   
*/

// {
// const [n, ...part] = `10
// 1 5 2 1 4 3 4 5 2 1`
//   .trim()
//   .split(/\s/)
//   .map(Number);
// const byLength = Array(10).fill(0);

// part.forEach((v, i) => {
//   // i값을 이용해서 [0]~[i]까지의 dpl구하고
//   // [i]~[n-1]까지의 dpr 구한다.
//   const dpl = Array(i + 1).fill(0);
//   const dpr = Array(n - i).fill(0);
//   for (let j = 0; j <= i; j++) {
//     if (j === 0) {
//       dpl[j] = 1;
//     } else {
//       let longest = 0;
//       for (let k = 0; k < j; k++) {
//         if (input[k] < input[j] && longest < dpl[k]) {
//           longest = dpl[k];
//         }
//       }
//       dpl[j] = longest + 1;
//     }
//   }
//   for (let j = n - 1; i <= j; j--) {
//     if (j === n - 1) {
//       dpr[j] = 1;
//     } else {
//       let longest = 0;
//       for (let k = n - 1; k > j; k--) {
//         if (input[k] < input[j] && longest < dpl[k]) {
//           longest = dpl[k];
//         }
//       }
//       dpl[j] = longest + 1;
//     }
//   }
//   console.log(dpl);

//   // dpl[i] + dpr[0] -1의 값을 외부 배열[i]에 저장.
// });
// }
// 너무 복잡해....

/* 해당 인덱스의 수를 포함하는 증가하는 부분수열. 그리고 해당 인덱스부터 마지막까지의 역순에서 구한 
동일한 방식의 부분수열로 구할 수 있다. 문제는 인덱스로 접근하면 너무 복잡해지기 때문에, 
slice해서 함수로 빼서 하는게 좋을 것 같음.  계산하는 방식으로 해보려고 한다. 
*/
{
  const [n, ...input] = `10
1 5 2 1 4 3 4 5 2 1`
    .trim()
    .split(/\s/)
    .map(Number);

  const bytonic = [];
  // 인덱스를 하나씩 돌면서 bt를 채운다.
  for (let i = 0; i < n; i++) {
    const left = getInc(input.slice(0, i + 1));
    const right = getInc(input.slice(i).reverse());
    bytonic.push(left + right - 1);
  }

  console.log(Math.max(...bytonic));

  //배열을 넣으면 dp로 마지막 요소를 포함한 최대 부분수열 길이를 반환
  function getInc(part) {
    const dp = [];
    part.forEach((v, i) => {
      if (i === 0) {
        dp[i] = 1;
      } else {
        let best = 0;
        part.slice(0, i).forEach((n, j) => {
          if (n < v && dp[j] > best) {
            best = dp[j];
          }
        });
        dp[i] = best + 1;
      }
    });
    return dp.pop();
  }
}

/* 가독성 우선으로 풀어야 나도 편하다. */
