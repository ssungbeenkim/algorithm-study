// 문제
// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

// 입력
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

// 출력
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

const input = `3`;
const n = Number(input);
function guguClass(stage, count) {
  let answer = ``;
  for (i = 1; i < count + 1; i++) {
    answer += `${stage} * ${i} = ${stage * i}\n`;
  }
  console.log(answer);
}

guguClass(n, 9);

//간단하게 재사용 가능한 코드를 만들어 보았다.
