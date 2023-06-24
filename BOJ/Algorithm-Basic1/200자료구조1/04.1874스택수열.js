const [n, ...arr] = `5
1
2
5
3
4`
  .trim()
  .split(/\s/)
  .map(Number);

class Stack {
  head = null;

  push = (value) => {
    const node = { value: Number(value), next: this.head };
    this.head = node;
  };

  pop = () => {
    const node = this.head;
    this.head = node.next;
  };
}

/* 
스택에 넣고빼면서 결과적으로 입력과 같은 수열을 만들어야 한다. 
push, pop + - 해서 모아서 마지막에 출력하고 수열을 만들 수 없다면 NO를 출력한다. 

index = 0, cur = arr[index], el = 1;
while push el 
el > cur이 되면 break
  while (스택의 head.value와 cur가 같다면) pop 하고 index++ 하여 cur 업데이트 해준다.
  index 가 n-1이 되면 break
el++
*/

const stack = new Stack();
const log = [];

let index = 0;
let el = 1;

while (true) {
  if (el > arr[index]) {
    console.log('NO');
    break;
  }
  stack.push(el);
  log.push('+');
  while (stack.head?.value === arr[index]) {
    stack.pop();
    log.push('-');
    index++;
    if (index === n) {
      console.log(log.join('\n'));
      return;
    }
  }
  el++;
}
