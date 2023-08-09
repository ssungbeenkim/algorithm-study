/* 
다른 언어에서는 메모리 효율을 위해 연결리스트를 사용하지만 
자바스크립트로는 보통 Create, Search, Insert, Remove등을 기능적으로 구현하기 위해
사용되는 경우가 많다. 

* wikipedia Linked-List 
https://en.wikipedia.org/wiki/Linked_list 
*/
// 기본적인 linked list의 형태는 이렇다.
{
  const list = {
    head: {
      value: 90,
      next: {
        value: 80,
        next: {
          value: 70,
          next: null,
        },
      },
    },
  };

  console.log(list); // { head: { value: 90, next: { value: 80, next: [Object] } } }
  console.log(list.head); // { value: 90, next: { value: 80, next: { value: 70, next: null } } }
  console.log(list.head.next); // { value: 80, next: { value: 70, next: null } }
  console.log(list.head.next.value); // 80
  console.log(list.head.next.next.value); // 70
  console.clear();
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init');
    this.head = init;
    this.tail = init;
    this.currentNode = undefined;
    this.dataCount = 0;
  }

  length() {
    return this.dataCount;
  }

  append(data) {
    let newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.dataCount++;
  }
  toString() {
    let curNode = this.head.next;
    let s = [];
    for (let i = 0; i < this.dataCount; i++) {
      s.push(curNode.data);
      curNode = curNode.next;
    }
    console.log(`[${s.join(',')}]`);
  }
  insertAfter(index, data) {
    let curNode = this.head.next;
    for (let i = 0; i < index; i++) {
      curNode = curNode.next;
    }
    const newNode = new Node(data);
    newNode.next = curNode.next;
    curNode.next = newNode;
    this.dataCount++;
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);
ll.append(9);
console.log('-------------');

ll.insertAfter(2, 1000);
// console.log(ll);
// console.log('-------------');
console.dir(ll, { depth: null });
ll.toString();
