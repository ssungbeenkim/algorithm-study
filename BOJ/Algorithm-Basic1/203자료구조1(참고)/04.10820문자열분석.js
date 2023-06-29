/* 소문자, 대문자, 숫자, 공백.  
한줄씩 체크해서 답 출력. 
*/

const lines = `This is String

SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.split(/\n/);

const answerArr = [];
for (l of lines) {
  if (l) {
    // 빈 문자열이 들어오면 0000 이 출력되어 오답이 된다. 함정카드였음.
    answerArr.push(getCountLine(l));
  }
}

console.log(answerArr.join('\n'));

function getCountLine(line) {
  const counts = new Map();
  counts.set('lo', 0);
  counts.set('up', 0);
  counts.set('num', 0);
  counts.set('sp', 0); // 불러올 때 순서 보장을 위해 map 사용. 근데 항목이 많지 않으니 그냥 객체 써서 이름으로 불러오면 될것같음..

  for (c of line) {
    switch (
      true // if문으로 할걸..
    ) {
      case c === ' ':
        counts.set('sp', counts.get('sp') + 1);
        break;
      case !!Number(c) || c === '0':
        counts.set('num', counts.get('num') + 1);
        break;
      case isUp(c):
        counts.set('up', counts.get('up') + 1);
        break;
      case !isUp(c):
        counts.set('lo', counts.get('lo') + 1);
        break;
    }
  }
  return [...counts.values()].join(' ');
}

function isUp(c) {
  const uni = c.charCodeAt(0);
  if (64 < uni && uni < 91) {
    return true;
  } else {
    return false;
  }
}
// 이런 함정이 숨어있을 수 있으니 문제 조건을 잘 항상 잘 꼼꼼히 읽도록 해야겠다.
