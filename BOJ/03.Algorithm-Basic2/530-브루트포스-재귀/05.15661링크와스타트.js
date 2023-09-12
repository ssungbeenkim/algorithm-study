/* 스타트와 링크 문제를 조금만 변형해서 제출을 했는데, 1%를 못넘기고 시간초과. 점수 계산하는 부분에서 
조합으로 2개 뽑아서 하지 않고 반복문 돌면서 합산하도록 했다. 
*/
const [n, ...matLines] = `8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`
  .trim()
  .split('\n');
const mat = matLines.map((v) => v.split(' ').map(Number));
const backNums = getBackNumbers();
const sTeamCombinations = [];
for (let i = 1; i <= n / 2; i++) {
  sTeamCombinations.push(...getCombinations(backNums, i));
}
let minDiff = Number.MAX_SAFE_INTEGER;
sTeamCombinations.forEach(updateMinDiff);
console.log(minDiff);

function getBackNumbers() {
  const backNums = [];
  for (let i = 0; i < n; i++) {
    backNums.push(i);
  }
  return backNums;
}

function* getCombinations(elements, selectNumber) {
  for (let i = 0; i < elements.length; i++) {
    if (selectNumber === 1) {
      yield [elements[i]];
    } else {
      const fixed = elements[i];
      const rest = elements.slice(i + 1);
      for (const a of getCombinations(rest, selectNumber - 1)) {
        yield [fixed, ...a];
      }
    }
  }
}

function updateMinDiff(start) {
  const link = [];
  for (let i = 0; i < n; i++) {
    if (!start.includes(i)) {
      link.push(i);
    }
  }
  const startA = getAbility(start);
  const linkA = getAbility(link);
  minDiff = Math.min(Math.abs(startA - linkA), minDiff);
}

function getAbility(team) {
  if (team.length === 1) {
    return 0;
  }
  let ability = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      ability += mat[team[i]][team[j]] + mat[team[j]][team[i]];
    }
  }
  return ability;
}

/* 일단 정답인데, 이전 문제도 그렇고 메모리 차이가 심해서 짚고 넘어가야 할 것 같다.  */
