/* 
명령은 총 다섯 가지이다.

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

들어온 입력을 받아서 줄로 끊어 배열에 넣고 가져와서 switch문 안에서 하면 될듯. 
스택에서 각 명령에 맞게 출력하도록 만들면 된다. 
*/
{
  const [_, ...commands] = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
    .trim()
    .split('\n');

  class Stack {
    _size = 0;
    head;

    size = () => {
      console.log(this._size);
    };

    push = (value) => {
      const node = { value: Number(value), next: this.head };
      this.head = node;
      this._size++;
    };

    pop = () => {
      if (this.head == null) {
        console.log(-1);
      } else {
        const node = this.head;
        this.head = node.next;
        this._size--;
        console.log(node.value);
      }
    };

    empty = () => {
      console.log(this._size === 0 ? 1 : 0);
    };

    top = () => {
      console.log(this.head ? this.head.value : -1);
    };
  }

  const stack = new Stack();

  commands
    .map((v) => v.split(' '))
    .forEach((v) => {
      switch (v[0]) {
        case 'push':
          stack.push(v[1]);
          break;
        case 'pop':
          stack.pop();
          break;
        case 'size':
          stack.size();
          break;
        case 'empty':
          stack.empty();
          break;
        case 'top':
          stack.top();
          break;
      }
    });
} // 맞는 것 같으나 시간초과. 성능 개선이 필요.

/* 성능 개선을 해보자. 우선 console이 매번 출력되지 않고, 마지막에 한번만 출려될 수 있도록 입력을 모두 담아서 출력하도록 해본다. */

{
  const [_, ...commands] = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
    .trim()
    .split('\n');

  const answer = [];

  class Stack {
    _size = 0;
    head;

    size = () => {
      answer.push(this._size);
    };

    push = (value) => {
      const node = { value: Number(value), next: this.head };
      this.head = node;
      this._size++;
    };

    pop = () => {
      if (this.head == null) {
        answer.push(-1);
      } else {
        const node = this.head;
        this.head = node.next;
        this._size--;
        answer.push(node.value);
      }
    };

    empty = () => {
      answer.push(this._size === 0 ? 1 : 0);
    };

    top = () => {
      answer.push(this.head ? this.head.value : -1);
    };
  }

  const stack = new Stack();

  commands
    .map((v) => v.split(' '))
    .forEach((v) => {
      switch (v[0]) {
        case 'push':
          stack.push(v[1]);
          break;
        case 'pop':
          stack.pop();
          break;
        case 'size':
          stack.size();
          break;
        case 'empty':
          stack.empty();
          break;
        case 'top':
          stack.top();
          break;
      }
    });
  console.log(answer.join('\n'));
} // 맞았다. 매번 콘솔을 출력하는것이 시간이 많이 걸리게 하는 원인이었다.
