/* 
후위표기식 연산. 
연산자가 뒤에 오는 것을 말한다. 연산자를 만나면 근접한 두개의 수를 연산하는 방식으로 계산

문자가 연산자가 아닌 경우 스택에 하나씩 넣다가 연산자 만나면 두개 팝해서 더해서 넣기 
피연산자는 표기식에서 영문 A~ 연속된 N개의 알파벳으로 들어온다. 
영문과 각 피연산자를 카-값으로 저장해 두고 불러와 필요한 계산을 수행하도록 한다. 

*/
const [n, s, ...nms] = `5
ABC*+DE/-
1
2
3
4
5`
  .trim()
  .split('\n');

const opMap = new Map();
for (i = 0; i < n; i++) {
  opMap.set(String.fromCharCode(i + 65), Number(nms[i]));
}

const stack = [];
s.split('').forEach((i) => {
  let pushItem = opMap.get(i);
  if (!opMap.has(i)) {
    const b = stack.pop();
    const a = stack.pop();
    switch (i) {
      case '+':
        pushItem = a + b;
        break;
      case '*':
        pushItem = a * b;
        break;
      case '-':
        pushItem = a - b;
        break;
      case '/':
        pushItem = a / b;
        break;
    }
  }
  stack.push(pushItem);
});
console.log((Math.trunc(stack[0] * 100) / 100).toFixed(2));
