/* 
연립방정식 풀이. 
x와 y를 구한다.  */

const [a, b, c, d, e, f] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);

const y = (a * f - c * d) / (a * e - b * d);
const x = (c - b * y) / a;

console.log(`${x} ${y}`);

// 잘 푼것 같은데 오류가 나서 질문을 남기도록 한다.

// 문제 설명에서 모든 x,y 값을 시도하라 했으니 그렇게 해볼까 싶다.
//  -999부터 999까지 대입해 보는 것이다. 근데 그렇게 푸나 이렇게 푸나 차이가 있을까? 그냥 답을 기다려보자.
// 근데 그렇게 푼 다른사람의 풀이가 있기 때문에 그렇게 시도해 보기로 한다.
{
  const [a, b, c, d, e, f] = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);

  const y = (a * f - c * d) / (a * e - b * d);
  const x = (c - b * y) / a || (f - e * y) / d;

  console.log(`${x} ${y}`);
} // a가 0일 경우가 문가 되는 것이었다. 그래서 x를 만족하는 다른 식을 넣어주었다. a,d가 모두 0인 경우는 식이 성립이 되지 않으므로.

{
  // 완전탐색. 모든 값을 검사한다.
  const [a, b, c, d, e, f] = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);

  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a * x + b * y == c && d * x + e * y == f) {
        console.log(x, y);
        return;
      }
    }
  }
} // 이건 맞다... 왜이러는걸까 모르겠다만, 될 수 있으면 풀라는 방식으로 풀자. 출제의도대로..
