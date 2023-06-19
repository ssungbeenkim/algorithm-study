// /* 우선, 배열로 간단하게 풀 수 있을 것 같기는 하다.
// string만 가지고도 내장 메서드 활용하면 풀 수 있을 것 같기는 한데
// 시간이 적어서. 일단 해보도록. */

// /*
// L	커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
// D	커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
// B	커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
// 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
// P $	$라는 문자를 커서 왼쪽에 추가함

// cursor : 0~ length까지의 값을 가질 수 있음.

// switch로 각 명령을 처리하면 될 것 같다.
// */
{
  // 시간초과. 다른 방법을 찾아봐야 한다.
  let [str, n, ...coms] = `abcd
3
P x
L
P y`
    .trim()
    .split('\n');
  const commands = coms.map((v) => v.split(' '));
  let cur = str.length;

  commands.forEach((c) => {
    switch (c[0]) {
      case 'L':
        cur !== 0 && cur--;
        break;
      case 'D':
        cur !== str.length && cur++;
        break;
      case 'B':
        if (cur === 0) {
          break;
        } else if (cur === str.length) {
          str = str.slice(0, str.length - 1);
          cur--;
        } else {
          str = str.slice(0, cur - 1) + str.slice(cur, str.length);
          cur--;
        }
        break;
      case 'P':
        if (cur === 0) {
          str = c[1] + str;
        } else if (cur === str.length) {
          str = str + c[1];
        } else {
          str = str.slice(0, cur) + c[1] + str.slice(cur, str.length);
        }
        cur++;
        break;
    }
  });

  console.log(str);
}

/* 
우선 문자열을 직접 조작하는 것은 메모리에 좋지 않다. 
또한 배열 메서드를 매번 사용해야 하고, slice를 할 때마다 새로운 할당이 반복되므로 
인덱스만 바꿔주는 방식이라 더 나을거라 생각했지만 연산이 느려지는 것이 당연하다. 
다른 사람의 풀이에서 스택의 구조를 두가지로 만들어 활용하는 것을 보았고, 효율적인 방법이라 생각해서 
비슷한 접근방식으로 풀어본다. 
 */

/* 
배열을 두개 만들고, 초기에 한 배열에 문자열을 쪼개어 넣는다. 
명령을 하나씩 가져와서 처리해 준다. 
*/
{
  let [str, n, ...coms] = `dmih
  11
  B
  B
  P x
  L
  B
  B
  B
  P y
  D
  D
  P z`
    .trim()
    .split('\n');
  const commands = coms.map((v) => v.trim().split(' '));
  const l = str.split('');
  const r = [];

  commands.forEach((c) => {
    switch (c[0]) {
      case 'L':
        l.length && r.push(l.pop());
        break;
      case 'D':
        r.length && l.push(r.pop());
        break;
      case 'B':
        l.length && l.pop();
        break;
      case 'P':
        l.push(c[1]);
        break;
    }
  });

  console.log(l.join('') + r.reverse().join(''));
}

/* 전체 구조적으로 생각해 봤을 때도 두번째 풀이가 더 이상적이다. */
