/* 
각 줄을 받아서 VPS인지 판별하는 문제 
*/
/* 
갯수로판단? ))(( 이런 경우에는.. 안됨. 
(()) ()
regex?...?

도움: stack을 이용한다. 
VPS가 되려면 ( 와 )의 갯수가 같아야 하는 것은 맞지만 (가 없었는데 )가 들어오면 VPS가 아니다. 
그러므로 (가 들어오면 stack에 넣고, )가 들어왔을 때는 스택에 있던 것을 하나씩 뺀다. 
)가 들어왔는데 스택이 비어있다면 NO를 출력한다. 

라인에서 모든 문자열이 잘 수행되고 나서 
  스택이 비어있다면 YES
  안 비어있다면 NO를 출력하면 된다. 
*/

const [_, ...arr] = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
  .trim()
  .split(/\s/);

arr.forEach((s) => {
  let stack = 0;
  let isVps = 'YES';
  for (c of s) {
    if (c === ')' && stack === 0) {
      isVps = 'NO';
      break;
    } else {
      c === '(' ? stack++ : stack--;
    }
    // console.log(c, stack);
  }

  console.log(isVps === 'NO' ? 'NO' : stack === 0 ? 'YES' : 'NO');
});

// ?XOR연산으로도 풀 수 있나?
