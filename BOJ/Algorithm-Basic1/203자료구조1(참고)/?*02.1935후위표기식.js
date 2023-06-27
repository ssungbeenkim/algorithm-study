/* 중위표기식 -> 후위표기식 
괄호 무시. 연산자와 답 배열에 따로 넣는데 마지막으로 들어간게 * or /이면 다 올기고 이어감
*/
{
  const str = `A+B*C-D/E`.trim();
  const leng = str.length;
  const answer = [];
  const stack = [];
  const operator = ['+', '-', '*', '/'];
  let isIn = false;

  for (c of str) {
    const lastItem = stack[stack.length - 1];
    if (c === '(' || c === ')') {
      isIn = !isIn;
    } else if (operator.includes(c)) {
      stack.push(c);
    } else if (!isIn) {
      if (lastItem === '/' || lastItem === '*') {
        answer.push(c);
        while (stack.length) {
          answer.push(stack.pop());
        }
      } else {
        answer.push(c);
      }
    } else {
      answer.push(c);
    }
  }
  while (stack.length) {
    answer.push(stack.pop());
  }

  console.log(answer.join(''));
}
// 틀렸습니다.!!
/* 
괄호 있는 부분이 걸린다. 어떻게 처리하는 것이 좋을까 
괄호도 연산자 스택에 넣는다. 그리고 괄호가 끝나면 (가 나올 때까지 배열로 옮긴다. 
*/

{
  /*
후위표기식에 변환 과정에 대해 잘 정리된 블로그를 보고 다시 풀어본다. 
https://codingalzi.github.io/algopy/infix_prefix_postfix.html 
*/

  const str = `(((A+(B*C))+(D*E))+G)`.trim();
  let ans = '';
  const stack = [];
  const top = () => stack[stack.length - 1];
  const map = new Map();
  map.set('*', 3);
  map.set('/', 3);
  map.set('+', 2);
  map.set('-', 2);
  map.set('(', 1);

  for (c of str) {
    // 알파벳이면 ans에 추가.
    if ('A' <= c && c <= 'Z') {
      ans += c;
    } else if (map.has(c) || c === ')') {
      // 연산자이거나 닫는 괄호일 경우
      if (top()) {
        // stack이 비어있지 않다면
        // 여는 괄호이면 비교없이 넣는다.
        if (c === '(') {
          stack.push(c);
        } else if (map.has(c) && map.get(c) > map.get(top())) {
          // 연산자이고 top 보다 높은건 스택에 담아준다.
          stack.push(c);
        } else {
          // top과 같거나 낮거나 닫괄인 경우 stack에 있는 것을 pop해서 옮긴다.
          while (stack.length) {
            if (top() === '(') {
              // 뽑다가 top이 (가 될 경우에는 pop하고 멈춰준다.)
              stack.pop();
              break;
            } else if (map.get(top()) < map.get(c)) {
              // top이 더 작으면 pop하지 않고 멈춘다.
              break;
            }
            ans += stack.pop();
          }
          // 다 옮기고 나면 닫괄이 아닌 경우에만 push
          c === ')' || stack.push(c);
        }
      } else {
        // stack이 비어있는 경우 push해줌.
        stack.push(c);
      }
    }
  }
  // 모든 처리가 끝이 났으므로 다 꺼내 옮겨준다.
  while (stack.length) {
    ans += stack.pop();
  }

  console.log(ans);
}
// 왜 틀린건지 모르겠움, 질문 남겨두었다. 너무 오래 붙잡고 있는 것 같다. 우선 넘어가기.
