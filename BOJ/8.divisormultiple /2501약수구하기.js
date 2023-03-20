// 1~N 수 i 중에 N%i === 0 인것을 배열에 차례로 넣는다.
// arr[k-1]

const [N, K] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split(/\s/)
  .map(Number);
const answerArr = [];
for (i = 1; i <= N; i++) {
  if (N % i === 0) {
    answerArr.push(i);
  }
}
console.log(answerArr.length >= K ? answerArr[K - 1] : 0);
