const input = `${require('fs').readFileSync('dev/stdin')}`;
const n = Number(input);

class FindNum {
  constructor(findingIndex, startNum) {
    this.findIndex = findingIndex;
    this.startNum = startNum;
    this.curIndex = 0;
    this.curNum = 0;
  }

  /* goalCount를 전달해 주면 그 수를 찍고 다시 내려오면서 curNum,curIndex을 업데이트 한다. 
findIndex와 curIndex가 같아지면 즉시 실행을 멈춘다.*/
  update(goalCount) {
    //goalCount까지 올라가며 curIndex를 업데이트
    while (this.curNum < goalCount) {
      if (this.curIndex === this.findIndex) {
        return;
      }
      this.curNum++;
      this.curIndex++;
    }
    // curNum이 1이 될 때까지 감소.
    while (1 < this.curNum) {
      if (this.curIndex === this.findIndex) {
        return;
      }
      this.curNum--;
      this.curIndex++;
    }
  }

  /* 초기값부터 계속 2씩 증가하며 update에 전달한다. 
  시작할 때 curNum을 0으로 초기화 해 준다. 
  curIndex와 findIndex가 같으면 즉시 실행을 멈춘다. */
  IncrementWithCallback() {
    let baseNum = this.startNum;
    while (true) {
      if (this.curIndex === this.findIndex) {
        return;
      }
      this.curNum = 0;
      this.update(baseNum);
      baseNum += 2;
    }
  }

  // 아무것도 하지 않고 curNum을 반환한다.
  returnCurNum() {
    return this.curNum;
  }
}

const mom = new FindNum(n, 2);
mom.IncrementWithCallback();
const child = new FindNum(n, 1);
child.IncrementWithCallback();
console.log(`${child.returnCurNum()}/${mom.returnCurNum()}`);

// 맞았다. 이 문제를 푸느라 고생을 좀 했지만, 많은 연습이 되었다.
// 클래스를 활용해서 푼것은 처음인데 클래스를 왜 사용하는지 완전히 알게 되었다.

// 아래는 고민의 흔적이다. 기념으로 남겨둔다.

/* 
// 분모 121 1234321 12345654321 2 4 6
// 분자 1 12321 123454321 1 3 5

// 규칙 찾았다. 2씩 증가하고, 1부터 찍고 내려오는 요상한 규칙을 가지고 있다.
// 분자는 1부터 시작하고 분모는 2부터 시작한다
// 제너레이터를 만들어서 두개의 배열에 원하는 갯수가 될때까지 넣고,
// 원하는 갯수가 되었을 때 마지막 요소들로 분수를 만들면 될 것이다.

// 제너레이터 만들기.

// 기준 수를 주면, 찍고, 내려온다.
// 찍고 내려오면서 arr의 갯수가 원하는 수가 될 때까지 진행한다.
// 원하는 횟수수가 되면 동작을 멈춘다.
const n = 5;

function returnCM(cutCount) {
  const child = findNum(cutCount,1);
  const mom = findNum(cutCount,2);
  console.log(`${child}/${mom}`);
}
// 작은 단위부터 만들어 보자.

일정 수를 주면 그 수까지 올라가면서 카운트

let count = 0; // 총 횟수
const goalCount = 5;
let n = 1;
while() {
  upDown(n,goalCount)
  n += 2
}

//1 ~ baseNum까지 올라갔다가 내려오면서 계속 바깥의 count를 업데이트 한다.
// goalCount 전달해줘서 count === goalCount둘이 같으면 즉시 중지.
function upDown(baseNum,goalCount) {
  let num = 0; //
while (num < baseNum) {
  num++;
  count++;
  if (count === goalCount) {
    return num;
  }
}
// 다시 1까지 내려오면서 카운트
while (1 < num) {
  num--;
  count++;
  if (count === goalCount) {
    return num;
  }
}
}

묘안이 떠오르지 않는다. 함수로 풀다가 너무 복잡해서 원래 답을 보고 풀기로 했었는데,
클래스를 만들어서 풀어보자는 생각이 나서 그렇게 해보고 안되면 답을 보도록 하자. */
