/* 
모든 자리의 수slice한 뒤 사전순으로 정렬하여 출력하면 된다. 
for 돌면서 배열에 넣어서 접미사 리스트 생성 
sort로 하면 될 것 같다. 문자열 최대 길이가 1000인데 시간초과 나는지 한번 보자. 
*/
{
  const str = `beakjoon`.trim();

  const suf = [];
  const map = new Map();

  for (i in str) {
    const suffix = str.slice(i);
    suf.push(str.slice(i));
    map.set(suffix, suffix.charCodeAt(0));
  }

  suf.sort((a, b) => map.get(a) - map.get(b));
  console.log(suf.join('\n'));
}
// 1 틀림. 첫번째 문자가 같으면 두번째 문자의 순서도 찾아야 한다!

/* 생각해 보니 직접 비교가 가능하기 때문에 sort 내에서 그냥 비교하고
sort함수에서 처리. */
{
  const str = `aaa`.trim();

  const suf = [];
  for (i in str) {
    suf.push(str.slice(i));
  }

  suf.sort((a, b) => {
    return findPrec(a, b);
  });

  console.log(suf.join('\n'));

  function findPrec(a, b) {
    let i = 0;
    while (true) {
      if (!!!a[i] || !!!b[i]) {
        return a.length - b.length;
      }
      if (a[i] !== b[i]) {
        if (a[i] < b[i]) {
          return -1;
        } else {
          return +1;
        }
      }
      i++;
    }
  }
}
/* 정렬 함수 내에서 비교하는 로직은 첫글자부터 비교해 나가며 다른 값을 찾는다. 
다른 값을 찾으면 사전순 오름차순으로 정렬할 수 있도록 값을 리턴한다. 
계속 같은 값이다가 한 값이 끝난 경우에는 짧은 값이 우선이 된다. */
