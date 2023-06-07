// 10811 바구니 뒤집기
// 1~N in Array
// from line 2 ~ ij insert,
// i~j flip. =>

const fs = require('fs');
const inputArr = `${fs.readFileSync('dev/stdin')}`
  .trim()
  .split(`\n`)
  .map((v) => v.split(' ').map(Number));

// Array 생성
const [N, M] = inputArr[0];
const basketArr = Array.from({ length: N }, (_, i) => i + 1);

// 프로토콜 받아오기.
// using for. splice and flip from last index. and put and flat.
inputArr.slice(1).forEach((v) => {
  const [i, j] = v;
  const flipBaskets = basketArr.splice(i - 1, j - i + 1);
  // for문 사용해서 뒤 인덱스부터 넣어주기.
  // forEach 및 unshift사용하기 => 성능은 안좋겠지만.. 코드짜기 편하니 써보자.
  const flipedBaskets = [];
  flipBaskets.forEach((v) => {
    flipedBaskets.unshift(v);
  });
  basketArr.splice(i - 1, 0, ...flipedBaskets);
  console.log(basketArr.join(' '));
});

// unshift도, splice도 성능에 문제가 될 수 있지만 통과 되었다.
// for 사용시 역순으로 (i=j-1;0<=i;i--){
//fipedBasket에 push 해서 아예 역순으로 넣어주는게 성능에는 나을 것.

{
  // 인덱스 순서로 배열을 역순으로 정렬할 수 있는 reverse() 메서드를 활용할 수 있다.
  // 10811 바구니 뒤집기
  // 1~N in Array
  // from line 2 ~ ij insert,
  // i~j flip. => // reverse(), 두개의 포인터로 뒤집기,

  const inputArr = `5 4
1 2
3 4
1 4
2 2`
    .trim()
    .split(`\n`)
    .map((v) => v.split(' ').map(Number));

  // Array 생성
  const [N, M] = inputArr[0];
  const baskets = Array.from({ length: N }, (_, i) => i + 1);

  inputArr.slice(1).forEach((v) => {
    const [i, j] = v;
    reverseBaskets = baskets.splice(i - 1, j - i + 1).reverse();
    baskets.splice(i - 1, 0, ...reverseBaskets);
  });
  console.log(baskets.join(' '));
} // 근데 이것보다 포인터 두개를 활용해서 뒤집는 방법이 시간복잡도가 더 낫다고 한다.
// 하지만 백준에서는 메모리와 시간이 별 차이가 없고 오히려 느려보여서 pass 한다.

{
  // 두개의 포인터로 순서를 바꾸기
  const [N, M] = inputArr[0];
  const baskets = Array.from({ length: N }, (_, i) => i + 1);

  inputArr.slice(1).forEach((v) => {
    const [i, j] = v;
    let left = i - 1;
    let right = j - 1;
    while (left < right) {
      [baskets[left], baskets[right]] = [baskets[right], baskets[left]];
      left++;
      right--;
    }
  });

  console.log(baskets);
}
