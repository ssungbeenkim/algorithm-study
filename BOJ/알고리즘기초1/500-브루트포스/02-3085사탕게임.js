/* 
봄보니 
하나 바꾸고나서 가장 긴 열을 골라서 먹는다. 
몇개를 먹었는가?

브루트포스. 완전탐색. 
2차원 배열에 넣어두고 
인접한 두개의 요소가 다르면
  두개를 바꿔본다. 
  가장 큰 연속되는 수를 찾고 max값보다 크면 업데이트 한다. 
  행에 대해서 완료하면 열도 수행한다. 
모든 행과 열에 대해 수행 후 max 값을 출력한다. 
브루트 포스이니 그렇게 풀어보자. 

230614. swap까지는 잘 한 것 같고, 답도 예제에 맞게 잘 출력이 되고 있는데 8%에서 틀림. 이하 코드를 더 확인해보도록 한다. 
열을 검사하는 부분에서 제대로 생각하지 않고 답을 적어나가서 계속 틀렸던 것이었다. 스왑을 할 때도, 가장 긴 열을 찾을 때도 실수가 있었다. 
*/

const [m, ...inpu] = `3
CCP
CCP
PPC`
  .trim()
  .split('\n');

const n = +m;
const input = inpu.map((v) => v.split(''));
let longest = findBestLine(input);
console.log(longest);

function findBestLine(input) {
  let bestLine = 0;
  // input 으로 받은 2차원 배열을 행,열 각각 순환하며 인접한 두개가 다를 경우 바꾸고
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 행에 대하여 검사하고 바꾸고 업데이트
      if (input[i][j] !== input[i][j + 1]) {
        const arr = Array.from(input, function (ar) {
          return ar.slice(); // 내부 배열을 복사
        });
        let temp = arr[i][j];
        arr[i][j] = arr[i][j + 1];
        arr[i][j + 1] = temp;
        const length = itIsBestLine(arr);
        if (bestLine < length) {
          bestLine = length;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    // 열에 대하여 검사.
    for (let j = 0; j < n - 1; j++) {
      // 열에 대하여 검사하고 바꾸고 업데이트
      if (input[j][i] !== input[j + 1][i]) {
        const arr = Array.from(input, function (ar) {
          return ar.slice(); // 내부 배열을 복사
        });
        let temp = arr[j][i];
        arr[j][i] = arr[j + 1][i];
        arr[j + 1][i] = temp;
        const length = itIsBestLine(arr);
        if (bestLine < length) {
          bestLine = length;
        }
      }
    }
  }

  // 열에 대하여 모든 swap, bestline update
  //업데이트 된 가장 긴 연속된 수를 리턴.
  return bestLine;
}

function itIsBestLine(arr) {
  // 바꾼 배열을 받아 행, 열을 순환하며 가장 긴 연속된 수를 찾는다.
  let best = 0;
  // 모든 행에 대하여 검사
  for (let k = 0; k < n; k++) {
    let str = '';
    let bef = '';
    for (let l = 0; l < n; l++) {
      updateBestline(k, l);
    }
    function updateBestline(a, b) {
      const cur = arr[a][b];
      if (b === 0) {
        str = cur;
      } else {
        if (bef === cur) {
          str += cur;
        } else {
          if (best < str.length) {
            best = str.length;
          }
          str = cur;
        }
      }
      if (b === n - 1) {
        // 마지막 요소일 경우 best와 str length 비교해서 업데이트
        if (best < str.length) {
          best = str.length;
        }
      }
      bef = cur;
    }
  }
  // 모든 열에 대하여 검사
  for (let k = 0; k < n; k++) {
    let str = '';
    let bef = '';
    for (let l = 0; l < n; l++) {
      updateBestline(l, k);
    }
    function updateBestline(a, b) {
      const cur = arr[a][b];
      if (a === 0) {
        str = cur;
      } else {
        // item 전과 비교하려 같으면 str에 추가.
        if (bef === cur) {
          str += cur;
        } else {
          // 전 item과 다르면 이전까지의 str길이와 best를 비교하여 업데이트한 후 ,str 을 cur로 변경
          if (best < str.length) {
            best = str.length;
          }
          str = cur;
        }
      }
      if (a === n - 1) {
        // 마지막 요소일 경우 best와 str length 비교해서 업데이트
        if (best < str.length) {
          best = str.length;
        }
      }
      bef = cur;
    }
  }
  return best;
}
