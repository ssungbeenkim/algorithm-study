// 자료구조 덱을 구현하는 문제다.
// 덱은 앞뒤로 넣고 뺄수 있는 구조를 가졌다.
// 이중 연결 리스트로 구현했던 큐를 가져와서 만들어보도록 하겠다.

class Node {
  next = null;
  prev = null;
  constructor(item) {
    this.item = item;
  }
}

class Deque {
  head = null;
  tail = null;
  size = 0;

  pushFront(item) {
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  pushBack(item) {
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  popFront() {
    const node = this.head;
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return node.item;
    } else if (this.size === 2) {
      this.tail.prev = null;
      this.head = this.tail;
      this.size--;
      return node.item;
    } else {
      this.head = node.next;
      this.head.prev = null;
      this.size--;
      return node.item;
    }
  }

  popBack() {
    const node = this.tail;
    if (this.size === 0) {
      return -1;
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return node.item;
    } else if (this.size === 2) {
      this.head.next = null;
      this.tail = this.head;
      this.size--;
      return node.item;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      this.size--;
      return node.item;
    }
  }

  get size() {
    return this.size;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }
  back() {
    return this.tail ? this.tail.item : -1;
  }
}

const d = new Deque();

const [n, ...arr] = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`
  .trim()
  .split('\n');
const input = arr.map((v) => v.split(' '));
const ans = [];

input.forEach((c) => {
  switch (c[0]) {
    case 'pop_front':
      ans.push(d.popFront());
      break;
    case 'pop_back':
      ans.push(d.popBack());
      break;
    case 'size':
      ans.push(d.size);
      break;
    case 'empty':
      ans.push(d.empty());
      break;
    case 'front':
      ans.push(d.front());
      break;
    case 'back':
      ans.push(d.back());
      break;
    case 'push_front':
      d.pushFront(Number(c[1]));
      break;
    case 'push_back':
      d.pushBack(Number(c[1]));
      break;
  }
});

console.log(ans.join('\n'));
