/* 
중복제거  set 
ㄷ길이가 같으면 사전순으로. if == : 사전순: 유니코드 비교해서 빼준다. 오름차순 되도록 
단어가 짧은 것부터 sort length 오름차순 
*/

const [_, ...arrA] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/);

function returnDiff(a, b) {
  let i = 0;
  while (true) {
    if (a.charCodeAt(i) === b.charCodeAt(i)) {
      i++;
    } else {
      return a.charCodeAt(i) - b.charCodeAt(i);
    }
  }
}

const set = new Set(arrA);
const answer = [...set]
  .sort((a, b) => {
    if (a.length === b.length) {
      return returnDiff(a, b);
    } else {
      return a.length - b.length;
    }
  })
  .reduce((a, c) => a + `${c}\n`, ``);

console.log(answer);
