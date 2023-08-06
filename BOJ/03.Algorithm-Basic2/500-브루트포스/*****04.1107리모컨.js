// 가장 가까운 수를 찾아서 빼면 될 것 같다. (번호 수 카운트에 추가)
// 수를 빼고 차이를 카운트와 합하면 답이 된다.

// 버튼은 0~9
// 현재 100번

/* 
1. 남은 버튼으로 목표수와 가장 가까운 수를 찾는다.  
2. 100과 목표수의 차이와 비교하여 차이가 더 작은 것을 고른다. */

/*  예전에 풀었언 풀이인데.. 뭐라고 하는건지 모르겠다. 
새로 푸는게 더 나을 것 같아서 새로 풀기로 한다. 

{
const [goal, _, ...err] = `5457
3
6 7 8
` 
  .trim()
  .split(/\s/)
  .map(Number);

// 남은 버튼으로 0~9중에 안고장난 수를 찾아 배열에 넣는다.

const digits = [];
for (i = 0; i < 10; i++) {
  if (!err.includes(i)) {
    digits.push(i);
  }
}

// 목표 채널과 차가 가장 적은 수 찾기.
// 목표 수의 자릿수와 같은 모든 수를 생성차며 차이가 가장 적은 수로 업뎃한다.
// 모든 경우의 6자리의 수 중에 가장 가까운 수 찾기 *
// let closestNumber = Number.MAX_SAFE_INTEGER;
let closestDifference = Number.MAX_SAFE_INTEGER;
const length = goal.toString().length;

function findClosestNumber(currentNumber, currentIndex) {
  if (currentIndex === length) {
    const number = parseInt(currentNumber.join(''));
    const difference = Math.abs(number - goal);
    if (difference < closestDifference) {
      // closestNumber = number;
      closestDifference = difference;
    }
    return;
  }

  for (let i = 0; i < digits.length; i++) {
    currentNumber[currentIndex] = digits[i];
    findClosestNumber(currentNumber, currentIndex + 1);
  }
}

findClosestNumber(new Array(length), 0);
// 100에서 직접 변경할 때의 차이와 가까운 번호에서의 차를 비교하여 절댓값이 더 적은것을 출력.
const searchDiff = closestDifference + length;
const diff = Math.abs(goal - 100);
console.log(searchDiff < diff ? searchDiff : diff);

// 잘 푼것같은데 틀렸다고 나오고 있음. 주어진 예시입력출력은 모두 만족한다. 
// 내일 이어서 문제 조건 좀더 자세히 보면서 살펴보도록 하자.
} */

// 다시 풀었는데 왜 틀렸는지 잘 모르겠어서 질문 남겨둔 풀이
{
  // /* 다시 풀어보자.
  // * +-로 가까운 수를 찾기 위해서는 우선 만들 수 있는 모든 수 중에서 목표 수와의 차이 절댓값이
  // 가장 가까운 수를 찾고, 그 수의 길이 + 목표 수와의 차이를 더해서 가장 작은 값을 계속 업데이트.
  // 저장된 수를 출력하면 될것이다.
  // 쉬운 예시를 찾아서 본다고 하면
  // 2221
  // 1
  // 1
  // 의 경우에서 안고장난 1을 제외한 0~9 사이의 수를 활용해
  // 가장 가까운 수인  2222를 찾을 수 있다. 2220과 근본적으로 누르는 버튼의 수는 같게 된다.
  // 그리고 차이값은 1이 되고, 바로 이 수가 + 또는 -를 누르는 수가 된다.
  // ...
  // *고장난 것이 없는 경우에는 +-로 갖는 경우와 버튼을 직접 누르는 경우 중 작은것.
  // *1000 에서 1001로 갈 때. + 하나 누르는게 가장 빠르다. 수의 차이가 수의 길이보다 작으면? 수의 길이 리턴.
  // 999 -> 1000 : +한번 누르면 된다.
  // ...
  //   남은 수들로 목표 수의 자릿수만큼의 수를 만들어서 자리값 더해서 min 업데이트.
  //   ??더 큰 자릿수를 만들어서 줄이는게 나은 경우도 있지 않은가?
  //   999의 경우 1000에 갔다가 하나 줄이는게 나은 경우도 있다.
  //   쓸 수 있는 수가 1,0,7밖에 없다고 하면 가장 가까운 수는 4자리 수가 된다. 그러므로
  //   gleng보다 하나 큰 자리의 수를 만들어서 비교해야 할 것 같다.
  //   모든 수를 만들려면 어떻게 해야하나... 목표값 자릿수 + 1만큼 반복문을 만들 수는 없다.
  //   재귀로 만들어야 할까?
  //   n개의 숫자로 만들 수 있는 n자리 수를 모두 출력하는 방법.
  //   gpt를 이용해서 재귀로 구현하는 방법을 알게 되었다.
  // */
  // const [g, c, ...broken] = `8500
  // 0`
  //   .trim()
  //   .split(/\s/)
  //   .map(Number);
  // const curr = 100;
  // const diff = Math.abs(g - curr);
  // const gleng = g.toString().length;
  // if (c === 0) {
  //   // 고장난 것이 없는 경우에는 +-로 갖는 경우와 버튼을 직접 누르는 경우 중 작은것이 답.
  //   console.log(Math.min(gleng, diff));
  // } else {
  //   // 수의 차가 goal의 자릿수보다 작거나 같으면 +-로 해결 가능하므로 diff 출력
  //   if (diff <= gleng) {
  //     console.log(diff);
  //     return;
  //   } else {
  //     // 이외의 경우 : 번호를 찍고 이동해서 +-하는 경우.
  //     // 모든 만들 수 있는 수를 만들면서  목표값과의 차이 + 만든 수(앞자리0제외)자리값을
  //     // 업데이트해서 출력한다.
  //     // 남은 수들 left에 저장
  //     const left = [];
  //     let min = Number.MAX_SAFE_INTEGER;
  //     for (let i = 0; i < 10; i++) {
  //       broken.includes(i) || left.push(i);
  //     }
  //     // 남은 수들로 모든 n자리의 수를 생성하고, 목표값과의 차 + 만든 수의 자릿수로 min update
  //     function UpdateWithAllCombinations(digits, n, currentNumberStr) {
  //       if (currentNumberStr.length === n) {
  //         // currentNumberStr는 생성된 n자리 문자열수. 여기에서 min을 업데이트 해준다.
  //         const curNum = Number(currentNumberStr.replace(/^0+/, ''));
  //         const dif = Math.abs(g - curNum);
  //         const pressCount = dif + curNum.toString().length;
  //         if (pressCount < min) {
  //           min = pressCount;
  //         }
  //         return;
  //       }
  //       // 재귀적으로 n자리의 문자열수를 만들어줌.
  //       for (let i = 0; i < digits.length; i++) {
  //         UpdateWithAllCombinations(digits, n, currentNumberStr + `${digits[i]}`);
  //       }
  //     }
  //     // gleng + 1은 더 큰 자릿수, 같은자릿수, 작은 자릿수의 수를 만들어 업데이트 해준다.
  //     UpdateWithAllCombinations(left, gleng + 1, '');
  //     UpdateWithAllCombinations(left, gleng, '');
  //     UpdateWithAllCombinations(left, gleng - 1, '');
  //     console.log(min);
  //   }
  // }
}

/* 자바스크립트로 푼 풀이를 보고 분석해보도록 */

// https://tesseractjh.tistory.com/253
// 간단한 아이디어로 해결할 수 있었다. 완전히 다른 방법으로 풀었었다는 생각.
{
  const [N, M, nums] = `5457
0
`
    .trim()
    .split('\n');

  const brokens = nums
    ? nums.split(' ').reduce((acc, v) => {
        acc[v] = true;
        return acc;
      }, {})
    : {};
  let count = Math.abs(100 - N);

  for (let i = 0; i < 1_000_000; i++) {
    const numString = i.toString();
    let isValid = true;
    // 유효한 수인지 검사.
    for (let j = 0; j < numString.length; j++) {
      if (brokens[numString[j]]) {
        isValid = false;
        break;
      }
    }
    // 유효한 수인 경우 count와 비교해서 업데이트.
    // 0인 경우 모든 수가 유효하게 들어오므로 수의 문자열 길이가 가장 작은값이 될 것임.
    // 모든게 고장난 경우 모든 수가 유효하지 않고 count를 업데이트 할 수 없고 +-로 이동한 값.
    //
    if (isValid) {
      count = Math.min(count, Math.abs(i - N) + numString.length);
    }
  }

  console.log(count);
}
