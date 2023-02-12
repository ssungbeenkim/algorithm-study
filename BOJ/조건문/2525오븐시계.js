// 문제
// KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.

// 또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.

// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

// 출력
// 첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

//solution1
{
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
  const time = Number(input[1]);
  const realtime = input[0].split(' ').map((v) => Number(v));
  const [H, M] = realtime;

  function returnSumHM(H, M, time) {
    let h = 0;
    let m = 0;
    if (time < 60) {
      m = time;
    } else {
      h = Math.floor(time / 60);
      m = time % 60;
    }
    return [h + H, m + M];
  }

  let [h, m] = returnSumHM(H, M, time);

  if (m < 60) {
    h < 24 ? console.log(`${h} ${m}`) : console.log(`${h % 24} ${m}`);
  } else {
    h += Math.floor(m / 60);
    m %= 60;
    h < 24 ? console.log(`${h} ${m}`) : console.log(`${h % 24} ${m}`);
  }
}

// solution2
{
  const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
  const time = Number(input[1]);
  const realtime = input[0].split(' ').map((v) => Number(v));
  let [H, M] = realtime;
  M += time;
  H += Math.floor(M / 60);
  M %= 60;
  H %= 24;
  console.log(`${H} ${M}`);
}
