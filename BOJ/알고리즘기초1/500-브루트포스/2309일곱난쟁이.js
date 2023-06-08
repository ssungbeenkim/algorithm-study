/*
일곱명의 합이 100이 되는 경우를 찾아서 오름차순으로 출력하는 문제.
랜덤으로 서로 다른 일곱명의 숫자 더하기
랜덤으로 7명을 고르는 경우의 수는 어떻게 되지?

2개를 빼보는거다.
두개의 for
남은것의 함이 100이 되면 그것을 답으로 출력
*/

const input = `20
7
23
19
10
15
25
8
13`
  .trim()
  .split(/\s/)
  .map(Number);

for (i = 0; i < 9; i++) {
  for (j = i + 1; j < 9; j++) {
    const map = new Map();
    input.forEach((v) => map.set(v, v));
    map.delete(input[i]);
    map.delete(input[j]);
    const newArr = [...map.values()];
    sum = newArr.reduce((p, c) => p + c, 0);
    if (sum === 100) {
      console.log(newArr.sort((a, b) => a - b).join('\n'));
      return;
    }
  }
}

// 두개를 제거하고 더해가며 값을 찾았다.

{
  const input = `20
7
23
19
10
15
25
8
13`
    .trim()
    .split(/\s/)
    .map(Number);

  for (i = 0; i < 9; i++) {
    for (j = i + 1; j < 9; j++) {
      const newArr = [];
      input.forEach((v, indx) => {
        if (indx !== i && indx !== j) {
          newArr.push(v);
        }
      });
      const sum = newArr.reduce((p, c) => p + c, 0);
      if (sum === 100) {
        console.log(newArr.sort((a, b) => a - b).join('\n'));
        return;
      }
    }
  }
}
