/* 
이중 순차 리스트라는 것을 구현하면 풀 수 있을 것 같다. 

처음에 N개의 수를 넣어두고 
pop n p nnn p nnn하면 될듯. 

spot은 처음에 첫 수로 정한다. push 함수를 통해 추가할 수 있게 한다. 
next() 를 통해 spot을 이동시킨다. (초기에는 1)
pop() 통해 spot에 있는 node를 삭제하고 다음 노드로 자동이동한다.  

제너레이터를 이용해서도 풀 수 있을 것 같으니 성능이 어찌될지 궁금하니 해보자. 

*/
{
  class DCLR {
    head = null;
    tail = null;
    spot = null;
    size = 0;
    constructor(interval) {
      this.interval = interval;
    }

    push(value) {
      if (this.size === 0) {
        const node = { value };
        this.head = node;
        this.spot = node;
        this.size++;
      } else if (this.size === 1) {
        this.tail = { value, before: this.head, next: this.head };
        this.head.before = this.tail;
        this.head.next = this.tail;
        this.size++;
      } else {
        const node = { value, before: this.tail, next: this.head };
        this.tail.next = node;
        this.head.before = node;
        this.tail = node;
        this.size++;
      }
    }

    pop(k) {
      if (this.size === 0) {
        return -1;
      }
      if (this.size === 1) {
        this.size--;
        return this.spot.value;
      }

      for (let i = 0; i < k - 1; i++) {
        this.spot = this.spot.next;
      }
      const value = this.spot.value;

      this.spot.next.before = this.spot.before;
      this.spot.before.next = this.spot.next;

      this.spot = this.spot.next;
      this.size--;
      return value;
    }
  }

  const [n, k] = `1 1`.trim().split(/\s/).map(Number);

  const dcrl = new DCLR();
  const answer = [];
  for (i = 1; i <= n; i++) {
    dcrl.push(i);
  }

  while (true) {
    const el = dcrl.pop(k);
    if (el === -1) {
      break;
    }
    answer.push(el);
  }

  console.log(`<${answer.join(', ')}>`);
}

// 런타임 에러가 나서 생각해보니 1,1일 때 에러가 난다는 것을 알게 되었다.
// 제너레이터를 이용하면 훨씬 쉽게 풀 수 있을 것 같으니 한번 풀어보고 가도록 하고, 다른사람 풀이도 보자.
