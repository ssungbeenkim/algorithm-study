{
  /* A B V
  첫날의 고점은 A미터이다.
  첫날의 고점으로부터 다음날 고점까지 올라가는 높이는 A-B미터이다.
  첫 고점으로부터 고점이 V를 넘는 날까지의 일수는 A와 V의 차이를 A-B로 나눈 몫을 올림한 값이다.
  첫날을 포함하며 하루를 더해주면 된다.
  계산식은 (V-A)/(A-B)의 반올림 + 1이다.
  */
  const [A, B, V] = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);
  console.log(Math.ceil((V - A) / (A - B) + 1));
}

{
  // 첫 풀이. 정상 출력 되지만 시간초과가 난다.
  const [day, night, length] = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);

  let currentHeight = 0;
  let dayCount = 0;

  while (true) {
    dayCount++;
    currentHeight += day;
    if (currentHeight >= length) {
      break;
    }
    currentHeight -= night;
  }

  console.log(dayCount);
}
