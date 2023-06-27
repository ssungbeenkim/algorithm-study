/* 
각 알파벳의 갯수를 세어 map을 만들어 두고 출력하면 될 것이다. 
*/

// 주어진 문자열에 대해 갯수 정보를 가진 map 생성
// a~z까지 돌면서 map.has에 따라 출력 배열에 값을 넣는다.
// 배열을 합쳐 출력.

const str = `baekjoon`.trim();
const map = new Map();
for (c of str) {
  // 있는 경우 +1해줄것임.
  if (map.has(c)) {
    map.set(c, map.get(c) + 1);
  } else {
    // 없는 경우 1로 저장
    map.set(c, 1);
  }
}

const answer = [];

for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  const c = String.fromCharCode(i);
  if (map.has(c)) {
    answer.push(map.get(c));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(' '));
