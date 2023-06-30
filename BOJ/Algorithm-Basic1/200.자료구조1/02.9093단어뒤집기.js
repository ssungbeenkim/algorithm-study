/* 
2차원 배열로 받아와서 각 단어에 대하여 처리를 해 주고 마지막에 한줄씩 join해 출력할 것이다. 
*/

const [n, ...arr] = `2
I am happy today
We want to win the first prize`
  .trim()
  .split('\n');

function rvrs(str) {
  return [...str].reverse().join('');
}

const arr2d = arr.map((v) => v.split(' '));

const reversed = arr2d.map((v) => {
  return v.map((str) => {
    const newStr = rvrs(str);
    return newStr;
  });
});

const answer = [];
reversed.forEach((v) => {
  answer.push(v.join(' '));
});
console.log(answer.join('\n'));
