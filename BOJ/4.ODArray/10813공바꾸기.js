// 이것도 새로 추가된듯

// 바구니 N개를 가지고 있고 각 바구니가 인덱싱 되어있고 각 바구니에는 인덱스에 해당하는 볼 들어있다.
// 숫자 i,j 가 들어오면 각 숫자에 해당하는 인덱스의 바구니 공을 교환함.
// 1~N 의 값을 가지는 원본 배열을 만들어 두고 => Array.from(), 생성자로 만들면 empty 되니까. 초기화는 from으로 한다.
// 새로운 배열을 만들고 한줄씩 받아서 바꿀 인뎃스를 받아 원본 배열에서 요소를 가져와 새 배열의 원소를 바꾸는 처리.
// 생각해 보니 2번과 2번을 바꾼다고 들어오면 원본과 바꿔서는 안된다. 아예 요소를 복사해두고 바꿔주자.
const inputArr = `5 4
1 2
3 4
1 4
2 2`
  .trim()
  .split(`\n`)
  .map((v) => {
    return v.split(' ').map(Number);
  });

const [N, M] = inputArr[0];
const defaultBasket = Array.from({ length: N }, (_, i) => i + 1);
const ballDillBasket = defaultBasket.slice();
inputArr.slice(1).forEach((v) => {
  const [i, j] = v;
  const [I] = ballDillBasket.slice(i - 1, i);
  const [J] = ballDillBasket.slice(j - 1, j);
  ballDillBasket[i - 1] = J;
  ballDillBasket[j - 1] = I;
});
console.log(ballDillBasket.join(' '));
