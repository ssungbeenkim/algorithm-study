{
  // 4344 평균은 넘겠지
  const fs = require('fs');
  const inputArr = `${fs.readFileSync('dev/stdin')}`.trim().split(`\n`);
  const caseArr = inputArr.slice(1);
  caseArr.forEach(printRatio);

  function printRatio(caseClass) {
    const scoreArr = caseClass.split(' ').map(Number).slice(1);
    const average = scoreArr.reduce((a, c) => a + c / scoreArr.length, 0);
    let aboveCount = 0;
    scoreArr.forEach((v) => {
      if (average < v) {
        aboveCount++;
      }
    });

    const num = ((aboveCount / caseClass[0]) * 100).toFixed(3);
    console.log(`${num}%`);
  }
} // 정상적으로 출력이 되는 것 같은데 왜 틀렸다고 하는지 모르겠다.
{
  const inputArr = `${fs.readFileSync('dev/stdin')}`.trim().split('\n');
  const answerArr = [];
  inputArr.slice(1).forEach(pushAboveRatio);
  console.log(answerArr.join('\n'));

  function pushAboveRatio(caseClass) {
    const scoreArr = caseClass.split(' ').map(Number).slice(1);
    const average = scoreArr.reduce((a, c) => a + c / scoreArr.length, 0);
    const aboveCount = scoreArr.filter((v) => average < v).length;
    const num = ((aboveCount / caseClass[0]) * 100).toFixed(3);
    answerArr.push(`${num}%`);
  } // 하나씩 출력하는게 문제인가 싶어서 아예 줄바꿈을 해서 출력했는데도 안되고 있음. 질문 남기고 미제로 남기기
}
