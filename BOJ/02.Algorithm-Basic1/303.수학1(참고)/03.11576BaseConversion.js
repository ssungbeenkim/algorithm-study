/* a진법의 수는 최대 50자리 문자열. 이걸 parseInt에서 계산이 가능할까
2진수의 경우 50자리가 가능하다. 
일단 10진법으로 바꾸면 2^20 미만이므로 표현가능할 것으로 생각된다. 
이걸 b진수로 바꾸면 된다. 
10진법 이상일 경우 10은 a 11은 b로 표현해 주어야 한다. 
*/
{
  const [a, b, _, ...nums] = `2 10
3
1 0 0`
    .trim()
    .split(/\s/)
    .map(Number);

  // a가 10진법 이상인 경우 수를 편집해 주어야 한다.
  // 몇진법이냐에 따라 문자맵을 만들어 주고, 편집해 준다.

  if (a > 10) {
    const numMap = new Map();
    const charMap = new Map();
    const newNums = [];
    // 맵에 문자열 등록
    for (i = 1; i < a - 9; i++) {
      aUni = 'a'.charCodeAt(0);
      numMap.set(i, String.fromCharCode(aUni + i - 1));
      charMap.set(String.fromCharCode(aUni + i - 1), i);
    }
    nums.forEach((n) => {
      if (9 < n) {
        const dif = n - 9;
        newNums.push(numMap.get(dif));
      } else {
        newNums.push(`${n}`);
      }
    });
    const anum = newNums.join('');
    const dec = parseInt(anum, a);
    const ansArr = dec.toString(b).split('');
    const answer = ansArr
      .map((v) => {
        if (charMap.has(v)) {
          return `${charMap.get(v) + 9}`;
        } else {
          return v;
        }
      })
      .join(' ');
    console.log(answer);
  } else {
    const anum = nums.join('');
    const dec = parseInt(anum, a);
    const ansArr = dec.toString(b).split('');
    const charMap = new Map();
    if (b > 10) {
      // 맵에 문자열 등록
      for (i = 1; i < b - 9; i++) {
        aUni = 'a'.charCodeAt(0);
        charMap.set(String.fromCharCode(aUni + i - 1), i);
      }
    } else {
    }
  }
}

/* 다시 천천히 생각해서 여러가지 경우를 고려하여 작성해보기로 한다.
 * 낮은 진수를 높게, 높은 진수를 낮게 변경할 수 있다.
 * 각 자리의 수를 A진법에 맞게 변경한다.
 * join하여 10진수로 변경한다.
 * 10진수의 수를 B진법으로 변경한다.
 * 한칸씩 띄워 출력하는데, 출력 할 때는 각 자리의 수를 10진법으로 변경.
 */
{
  const [a, b, _, ...nums] = `15 2
2
14 14`
    .trim()
    .split(/\s/)
    .map(Number);

  const aNums = nums.map((n) => n.toString(a));
  const dec = parseInt(aNums.join(''), a);
  const bNum = dec.toString(b);

  answer = bNum
    .split('')
    .map((n) => parseInt(n, b))
    .join(' ');

  console.log(answer);
}
/* 정답 ! 
생각보다 간단한 문제였다. 
진법의 표현은 달라도 다 같은 값이다. 
10진법이 넘는 수의 경우 각 자리의 수가 알파벳으로 표현되므로 
각 자리의 수를 신경써서 출력해야 하는 문제였다. 
*/
