const fs = require('fs');
const input = `2 48
25`.split('\n');
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
  h === 24 ? console.log(`0 ${m}`) : console.log(`${h} ${m}`);
} else {
  h += Math.floor(m / 60);
  m %= 60;
  if (h < 24) {
    console.log(`${h} ${m}`);
  } else {
    console.log(`${h % 24} ${m}`);
  }
}
