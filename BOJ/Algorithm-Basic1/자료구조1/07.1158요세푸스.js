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
  class DCLL {
    head = null;
    tail = null;
    spot = null;
    size = 0;

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

  const dcrl = new DCLL();
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
// 코드를 추가해서 정답이 되었다. 근데, spot이 없어도 head만 옮기면서 작성이 가능했다.

{
  class DCLL {
    head = null; // 맨 앞 노드를 가리키는 포인터
    tail = null; // 맨 뒤 노드를 가리키는 포인터
    size = 0; // 리스트의 크기를 나타내는 변수

    push(value) {
      const node = { value, before: null, next: null }; // 새로운 노드 생성
      if (this.size === 0) {
        // 리스트가 비어있는 경우
        this.head = node; // head와 tail이 새로운 노드를 가리킴
        this.tail = node;
        node.before = node; // 노드의 이전 노드와 다음 노드는 자기 자신을 가리킴 (순환 구조)
        node.next = node;
      } else {
        // 리스트에 이미 노드가 있는 경우
        node.before = this.tail; // 새로운 노드의 이전 노드는 현재 tail을 가리킴
        node.next = this.head; // 새로운 노드의 다음 노드는 현재 head를 가리킴
        this.head.before = node; // 현재 head의 이전 노드는 새로운 노드를 가리킴
        this.tail.next = node; // 현재 tail의 다음 노드는 새로운 노드를 가리킴
        this.tail = node; // tail이 새로운 노드를 가리킴
      }
      this.size++; // 리스트 크기 증가
    }

    pop(k) {
      if (this.size === 0) {
        return -1; // 리스트가 비어있으면 -1 반환
      }
      for (let i = 0; i < k - 1; i++) {
        this.head = this.head.next; // k-1번 만큼 head를 다음 노드로 이동 (순환 구조에서 k번째 노드를 찾기 위함)
      }
      const value = this.head.value; // k번째 노드의 값을 저장
      this.head.before.next = this.head.next; // k번째 노드의 이전 노드의 다음 노드를 k번째 노드의 다음 노드로 변경
      this.head.next.before = this.head.before; // k번째 노드의 다음 노드의 이전 노드를 k번째 노드의 이전 노드로 변경
      this.head = this.head.next; // head를 다음 노드로 이동
      this.size--; // 리스트 크기 감소
      return value; // 삭제한 노드의 값을 반환
    }
  }

  const [n, k] = `7 3`.trim().split(/\s/).map(Number);

  const dcrl = new DCLL();
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

// 제너레이터를 이용하면 훨씬 쉽게 풀 수 있을 것 같으니 한번 풀어보고 가도록 하고, 다른사람 풀이도 보자.
// 연결리스트도 어떤 효율적인 방법으로 만들 수 있는지 알아보도록.

// 조금 어렵게 생각했나보다.. 배열을 두개 말들어 두고, 큐를 계속 돌면서 할 수 있었다.

{
  const [n, k] = `7 3`.trim().split(/\s/).map(Number);

  function solution(n, k) {
    const queue = [];
    const answer = [];
    for (let i = 0; i < n; i++) queue.push(i + 1);

    let count = 1;
    while (queue.length) {
      const shiftItem = queue.shift();
      count % k === 0 ? answer.push(shiftItem) : queue.push(shiftItem);
      count++;
    }
    console.log(`<${answer.join(', ')}>`);
  }

  solution(n, k);
} // 정말 너무 간단한 풀이다.. 이렇게 풀 수 있었는데. shift하면 큰일 나는게 아니다. 메모리 초과 나더라도 일단 제출해보자.
