/* 
주어진 종이를 잘랐을때, 
위에서 아래로 좌에서 우 방향으로 이어진 수의 합의 최대를 구하라. 
N * M 사각형 
어떻게 자른 것을 표현할 수 있을까
최대 4개의 연속이고, 무조건 긴 방향으로 잘라야 큰 수가 될것같다.. 근데 0이 들어올 수도 있어서 x

https://code-lab1.tistory.com/101 
가로는 0 세로는 1이라고 치고 비트마스킹을 통해 계산하는 아이디어 
*/
{
  const [N, M, ...lines] = `1 1
8`
    .trim()
    .split(/\s/);

  const n = Number(N);
  const m = Number(M);
  const mat = lines.map((l) => l.split('').map(Number));
  let max = 0;

  // n*m + 1자리 수 전까지 모든 n*m자리 2진수 생성
  for (let i = 0; i < 1 << (n * m); i++) {
    // 생성한 2진수를 n*m의 배열로 만든다.
    const bitmap = getBitMat(i);
    // 이진수 행렬을 통해 합을 구한다.
    const verSum = getVerSum(bitmap); // 전달 안해줘도 쓸 수 있나?
    const horSum = getHorSum(bitmap);
    max = Math.max(max, verSum + horSum);
  }

  console.log(max);

  function getVerSum(bitmap) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      let c = 0;
      for (let j = m - 1; j >= 0; j--) {
        if (bitmap[i][j]) {
          sum += mat[i][j] * 10 ** c;
          c++;
        } else {
          c = 0;
        }
      }
    }
    return sum;
  }
  function getHorSum(bitmap) {
    let sum = 0;
    for (let i = 0; i < m; i++) {
      let c = 0;
      for (let j = n - 1; j >= 0; j--) {
        if (!bitmap[j][i]) {
          sum += mat[j][i] * 10 ** c;
          c++;
        } else {
          c = 0;
        }
      }
    }
    return sum;
  }

  function getBitMat(d) {
    const binMat = [];
    for (let i = n; i > 0; i--) {
      const row = [];
      for (let j = 1; j <= m; j++) {
        row.push(d & (1 << (i * m - j)) ? 1 : 0);
      }
      binMat.push(row);
    }
    return binMat;
  }
}
