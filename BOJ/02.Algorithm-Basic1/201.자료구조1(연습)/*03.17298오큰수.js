/* 오른쪽의 가장 큰 수 오 큰 수 
간단해 보인다. 그냥 오른쪽 수 중에 가장 큰 수를 찾고, 자기보다 큰 수가 없거나 오른쪽에 수가 없으면 -1출력. 
시간 제한은 1초 메모리는 넉넉. 근데 입력 갯수가 백만개까지 들어온다. 효율적으로 풀어야함. 
*/

{
  const [n, ...seq] = `4
9 5 4 8`
    .trim()
    .split(/\s/)
    .map(Number);

  const answer = [];

  seq.forEach((v, i) => {
    const rr = seq.slice(i + 1);
    const mnl = rr.filter((n) => n > v)[0];
    const rmnl = mnl ? mnl : -1;
    answer.push(rmnl);
  });

  console.log(answer.join(' '));
} // 메모리 초과.

// 메모리가 넉넉해보여도, 입력의 범위가 너무 커서 문제가 되는가보다.
/* 성능개선 방안 
*filter 해서 새로운 배열을 생성하고, 거기서 나온 배열에서 가장 왼쪽에 있는 수를 넣고 있다. 
그냥 큰 수를 발견하면 바로 탐색을 멈출 수 있다. 
*slice를 안하고 바로 탐색할 수 있다. 그러면 새로운 배열을 생성하지 않아도 된다. 

*/

{
  // 2중 for문을 돌긴 하지만 새로운 배열을 생성하지 않고, 바로 원본을 탐색하다가 발견하면 반복문 탈출함
  const [n, ...seq] = `4
9 5 4 8`
    .trim()
    .split(/\s/)
    .map(Number);

  const answer = [];

  seq.forEach((v, i) => {
    let rmn = -1;
    for (let j = i + 1; j < n; j++) {
      const num = seq[j];
      if (num > v) {
        rmn = num;
        break;
      }
    }
    answer.push(rmn);
  });

  console.log(answer.join(' '));
} // 시간초과. 1% 에서 38%까지 개선은 된 것 같은데 아직 무리인가보다.

//다른 풀이를 참고해서 보도록 하고 왜 더 빠른지 등에 대해 확인하고 정리하도록 하자.

{
  const [n, ...seq] = `4 
  4 7 3 4`
    .trim()
    .split(/\s/)
    .map(Number);

  function solution(n, seq) {
    let stk = [];
    for (let i = 0; i < n; i += 1) {
      while (stk.length && seq[stk[stk.length - 1]] < seq[i]) {
        seq[stk.pop()] = seq[i];
      }
      stk.push(i);
    }

    while (stk.length) {
      seq[stk.pop()] = -1;
    }

    console.log(seq.join(' '));
  }

  solution(n, seq);
}

/* 
각 수는 들어와서 이전에 있던 수들 중에 자기보다 작았던 수들을 전부 자신으로 바꾼다. 
각 수의 인덱스는 각 시퀀스에서 스택에 들어가고 다음 수에 의해 검사되고 변경된다. 
한번 바뀐 수의 인덱스는 스택에서 나가게 되므로 다시 바뀔 수없다. 
이전 수들 중 자신보다 큰 수를 못만난 인덱스들은 스택에 기록된다. 
자신보다 큰 수를 만난 수의 인덱스들은 스텍에서 빠져나고, 동시에 수들을 업데이트 된다. 
바로 전의 수를 검사하는 부분?을 보고 생각하는중. 
*/

/* 
모든 요소만큼 반복문들 도는 것이 아니라 자동으로 최소값이 마지막에 들어가는 스택의 마지막 값과 비교해서  
행동을 결정하므로 반복문 도는 것을 최소화 할 수 있다. 
*/
{
  class Stack {
    size = 0;
    head;

    push = (item) => {
      const node = { item: Number(item), next: this.head };
      this.head = node;
      this.size++;
    };

    pop = () => {
      if (this.head == null) {
        return;
      } else {
        const node = this.head;
        this.head = node.next;
        this.size--;
        return node.item;
      }
    };
  }

  const [n, ...seq] = `4 
    4 7 3 4`
    .trim()
    .split(/\s/)
    .map(Number);

  function solution(n, seq) {
    const stk = new Stack();
    for (let i = 0; i < n; i += 1) {
      while (stk.size && seq[stk[stk.size - 1]] < seq[i]) {
        seq[stk.pop()] = seq[i];
      }
      stk.push(i);
    }

    while (stk.size) {
      seq[stk.pop()] = -1;
    }

    console.log(seq.join(' '));
  }

  solution(n, seq);
}

{
  // 스택을 구현해서 해 봤을 때와의 성능차이가 궁금해서 해봄
  const [n, ...seq] = `4
3 5 2 7`
    .trim()
    .split(/\s/)
    .map(Number);

  class Stack {
    size = 0;
    head;

    push = (item) => {
      const node = { item: Number(item), next: this.head };
      this.head = node;
      this.size++;
    };

    pop = () => {
      if (this.head == null) {
        return;
      } else {
        const node = this.head;
        this.head = node.next;
        this.size--;
        return node.item;
      }
    };
  }

  const stk = new Stack();
  for (let i = 0; i < n; i += 1) {
    while (stk.size && seq[stk.head.item] < seq[i]) {
      seq[stk.pop()] = seq[i];
    }
    stk.push(i);
  }
  while (stk.size) {
    seq[stk.pop()] = -1;
  }

  console.log(seq.join(' '));
}
// 메모리는 덜드는데 시간은 더걸림. 그리고 차이가 미묘하다. 대부분의 경우 그냥 배열을 써도 좋겠다.
