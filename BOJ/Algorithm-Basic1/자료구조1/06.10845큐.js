/* 
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
----
큐를 구현한다. stack과 달리 LIFO로 구현해야 한다. 
어떻게 구현할 수 있을까?
순서가 있다. 앞의 노드를 바라보도록 한다. 
push는 stack과 동일하게 하면 될 것 같고, 
pop은 처음 값을 out해야 한다. 
stack에서는 head를 마지막에 들어온 것으로 값을 넣을 때마다 업데이트 해주었다. 
비슷한 방식으로 구현하되 head를 첫 값으로 업데이트 하는 방식으로 만들 수 있을 것 같다. 
*/

const [n, ...arr] = `15
push 1
push 2
front
back
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
front`
  .trim()
  .split('\n');
const input = arr.map((v) => v.split(' '));
const ans = [];

class Queue {
  head = null;
  tail = null;
  _size = 0;

  push(value) {
    const node = { value, next: this.tail, before: null };
    this.head = this.head ?? node;
    if (node.next) {
      node.next.before = node;
    }
    this.tail = node;
    this._size++;
  }
  pop() {
    const node = this.head;
    if (node?.before) {
      node.before.next = null;
      this.head = node.before;
    } else {
      this.head = null;
      this.tail = null;
    }
    if (this._size) {
      this._size--;
      return node.value;
    } else {
      return -1;
    }
  }

  size() {
    return this._size;
  }
  empty() {
    return this._size ? 0 : 1;
  }
  front() {
    return this.head ? this.head.value : -1;
  }
  back() {
    return this.tail ? this.tail.value : -1;
  }
}

const q = new Queue();

input.forEach((c) => {
  switch (c[0]) {
    case 'pop':
      ans.push(q.pop());
      break;
    case 'size':
      ans.push(q.size());
      break;
    case 'empty':
      ans.push(q.empty());
      break;
    case 'front':
      ans.push(q.front());
      break;
    case 'back':
      ans.push(q.back());
      break;
    case 'push':
      q.push(Number(c[1]));
      break;
  }
});

console.log(ans.join('\n'));
