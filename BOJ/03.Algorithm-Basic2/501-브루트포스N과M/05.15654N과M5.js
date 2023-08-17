/* 
n개의 자연수 중에서 M개를 뽑은 수열. 오름차순으로 출력. 
중복 없는 수열이니 입력 배열을 돌면서 넣되, 중복 없는것만 넣고, m개 채워지면 출력한다. 
오름차순으로 출력되어야 하므로 sort해준다. 
*/
const [n, m, ...numbers] = `3 1
4 5 2`
  .trim()
  .split(/\s/)
  .map(Number);
const numbersSorted = [...numbers.sort((a, b) => a - b)];
const answer = [];
const s = [];
fillLine();
console.log(answer.join('\n'));

function fillLine() {
  if (s.length === m) {
    answer.push(s.join(' '));
    return;
  }
  numbersSorted.forEach((v) => {
    if (!s.includes(v)) {
      s.push(v);
      fillLine();
      s.pop();
    }
  });
}
