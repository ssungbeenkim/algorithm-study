{
  /* 
  사각형의 각 꼭짓점의 좌표를 모아보면 x와 y 모두 같은 수 두개씩 짝을 이룬다. 
  그래서 x좌표와 y좌표를 각각 배열에 넣고, 쌍이 없는 수를 반환해서 좌표를 찾았다. 
  */
  const inputArr = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

  const arrX = [];
  const arrY = [];
  for (arr of inputArr) {
    arrX.push(arr[0]);
    arrY.push(arr[1]); // 입력을 줄 단위로 받은 배열에서 x좌표와 y좌표를 각각 배열에 넣기
  }

  // 혼자 있는 수 찾기

  function findSingleNum(arrr) {
    const arr = arrr;
    const numberSet = new Set(arr);
    for (num of numberSet) {
      arr.splice(arr.indexOf(num), 1);
    }
    const withNum = arr[0];
    numberSet.delete(withNum);
    return [...numberSet][0];
  }

  console.log(`${findSingleNum(arrX)} ${findAloneNum(arrY)}`);
}

// 근데 XOR 연산자를 쓰면 배열에서 더 간단히 중복되지 않는 수를 찾을 수 있다.
{
  const inputArr = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

  const arrX = [];
  const arrY = [];
  for (arr of inputArr) {
    arrX.push(arr[0]);
    arrY.push(arr[1]); // 입력을 줄 단위로 받은 배열에서 x좌표와 y좌표를 각각 배열에 넣기
  }

  // 혼자 있는 수 찾기

  function findSingleNum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result ^= arr[i];
    }
    return result;
  }

  console.log(`${findSingleNum(arrX)} ${findSingleNum(arrY)}`);
}
