// ()(((()())(())()))(())
/* 
쇠막대의 시작, 끝 인식. 
스택에 넣고 빼면서 사이즈 카운트. 방금 전 문자가 뭔지에 따라서 pop할 때마다 막대 갯수를 카운트 한다. 
)이면 pop하고, 잘린 막대의 갯수를 올리면 될 것 같음. 
이전 문자가 (였으면 size만큼 잘린것 추가 
이전 문자가 )였으면 막대 하나 끝난거이므로 1추가. 
일단 stack은 배열로 쓰고, 시간초과 나면 진찌 stack으로 바꾸면 됨. 
*/

const str = `${require('fs').readFileSync('dev/stdin')}`.trim();
const stack = [];
let stickCount = 0;
let prev;

for (c of str) {
  if (c === '(') {
    stack.push(c);
  } else {
    stack.pop();
    if (prev === '(') {
      stickCount += stack.length;
    } else {
      stickCount++;
    }
  }
  console.log(stack, stickCount);
  prev = c;
}

console.log(stickCount);

// 다른 사람의 풀이도 궁금해서 찾아봄 - 비슷하게 풀었다.
