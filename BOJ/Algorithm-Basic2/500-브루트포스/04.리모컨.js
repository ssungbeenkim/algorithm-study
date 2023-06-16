// 가장 가까운 수를 찾아서 빼면 될 것 같다. (번호 수 카운트에 추가)
// 수를 빼고 차이를 카운트와 합하면 답이 된다.

// 버튼은 0~9
// 현재 100번

/* 
1. 남은 버튼으로 목표수와 가장 가까운 수를 찾는다.  
2. 100과 목표수의 차이와 비교하여 차이가 더 작은 것을 고른다. */

const [goal, _, ...err] = `103
5
2 3 5 7 8`
  .trim()
  .split(/\s/)
  .map(Number);

// 남은 버튼으로 0~9중에 없는 수를 찾아 배열에 넣는다.

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

findClosestNumber(new Array(length), 0); // ClosestNumber에 저장된다.
// 100에서 직접 변경할 때의 차이와 가까운 번호에서의 차를 비교하여 절댓값이 더 적은것을 출력.
const searchDiff = closestDifference + length;
const diff = Math.abs(goal - 100);
console.log(searchDiff < diff ? searchDiff : diff);

// 잘 푼것같은데 틀렸다고 나오고 있음. 주어진 예시입력출력은 모두 만족한다. 내일 이어서 문제 조건 좀더 자세히 보면서 살펴보도록 하자.
