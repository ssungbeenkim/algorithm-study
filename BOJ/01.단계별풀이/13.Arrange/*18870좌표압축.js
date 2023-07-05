/* n개의 입력. 하나씩 자기보다 작은 수를 찾으면 된다. */
// 값을 하나씩 순회하며 원본 배열을 돌면서 count해서 추가.
{
  console.time('first');
  const [n, ...arr] = `5
2 4 -10 4 -9`
    .trim()
    .split(/\s/)
    .map(Number);

  const answer = [];

  arr.forEach((v) => {
    const set = new Set();
    arr.forEach((i) => {
      if (i < v) {
        set.add(i);
      }
    });
    answer.push(set.size);
  });
  console.log(answer.join(' '));

  console.timeEnd('first');
} // 메모리 초과

// 최적화 방안
// 입력 받는 부분 spread 사용 안하고 for index로 바로 조회.
// forEach -> for문으로 변경
// set객체 -> count하는 것으로 하고, 조건을 추가?
// 하나씩 적용하며 제출해보도록 하자.

{
  console.time('second');

  const [n, ...arr] = `5
2 4 -10 4 -9`
    .trim()
    .split(/\s/)
    .map(Number);

  let answer = '';
  const set = new Set(arr);

  for (i = 0; i < n; i++) {
    let count = 0;
    for (v of set) {
      if (v < arr[i]) {
        count++;
      }
    }
    answer += `${count} `;
  }
  console.log(answer.trimEnd());

  console.timeEnd('second');
} // 이것도 시간초과.

//참고 :  https://velog.io/@otterp/%EB%B0%B1%EC%A4%80-18870-%EC%A2%8C%ED%91%9C-%EC%95%95%EC%B6%95-javascript
// 입력값을 정렬해서 set으로 만들어 두면(삽입된 순서는 유지된다.), index는 좌표압축의 결과와 일치한다.
{
  console.time('third');
  const [n, ...input] = `5
2 4 -10 4 -9`
    .trim()
    .split(/\s/)
    .map(Number);

  const arSet = new Set([...input].sort((a, b) => a - b));
  const map = new Map();
  [...arSet].forEach((v, i) => map.set(v, i));
  let answer = '';
  input.forEach((v) => {
    answer += `${map.get(v)} `;
  });
  console.log(answer);
  console.timeEnd('third');
} // 정답. console.time으로는 별 차이 안나는 것 같은데, 인풋이 많아지면 성능 차이가 큰가보다.
// 반복문 돌려서 파악하는 것보다 그냥 정렬 하고 시작하는게 포인트였다.
