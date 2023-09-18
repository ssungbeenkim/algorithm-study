/* 
1. 들어온 수/2 = 한 팀의 팀원 수
2. 두팀으로 나눌 때의 경우의 수. 4명이라 치면 ab ac ad 그리고 반대편 3가지가 나온다. 
3. 나눈 경우의 수들을 활용해 점수를 계산하며 최소차이값을 업데이트해야함.
  한팀에 3명인 경우 abc라 치면 [a][b]+[b][a] [b][c]+[c][b] + ... 
  이런식으로 구할 수 있게 만들어야 함. 
*/
// 14프로에서 틀린다. 다른사람들도 14프로에서 틀리는 경우가 많은것 같다. 다른 풀이를 참고한다.
{
  const [n, ...matLines] = `6
  0 1 2 3 4 5
  1 0 2 3 4 5
  1 2 0 3 4 5
  1 2 3 0 4 5
  1 2 3 4 0 5
  1 2 3 4 5 0`
    .trim()
    .split('\n');
  const mat = matLines.map((v) => v.split(' ').map(Number));
  let minDiff = Number.MAX_SAFE_INTEGER;
  const t = [0];
  updateMinDiffWithTeams();
  console.log(minDiff);

  function updateMinDiffWithTeams() {
    if (t.length === n / 2) {
      const team = [...t];
      const opposite = [];
      for (let i = 0; i < n; i++) {
        team.includes(i) || opposite.push(i);
      }
      updateMinDiff([team, opposite]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (t.at(-1) < i) {
        t.push(i);
        updateMinDiffWithTeams();
        t.pop(i);
      }
    }
  }

  function updateMinDiff(teamTable) {
    const [t1, t2] = teamTable;
    const scoreA = getAccScore(t1);
    const scoreB = getAccScore(t2);
    const dif = Math.abs(scoreA - scoreB);
    minDiff = Math.min(dif, minDiff);
  }

  function getAccScore(team) {
    let acc = 0;
    for (let i = 0; i < n / 2; i++) {
      if (i === n / 2 - 1) {
        acc += mat[team[i]][team[0]] + mat[team[0]][team[i]];
      } else {
        acc += mat[team[i]][team[i + 1]] + mat[team[i + 1]][team[i]];
      }
    }
    return acc;
  }
}

/* 
우선 문제가 있기는 한게, 중복계산을 하고 있다.  
첫 자리를 0으로 넣어두면 오름차순으로 들어가면서 조합의 경우를 뽑을 수 있다. 
근데 왜 틀린것일까? 놓친 조건이라도 있는건가?
*/

/* 
질문글에 답글이 달렸다. 
조합을 구하는 로직에는 문제가 없었으나 합계 능력치 점수를 구하는 과정에서 문제가 있었던 것이다. 
만약 8명을 나눈다고 하면 1,2,3,4가 한팀이라고 쳤을 때 1,2 2,3 3,4 4,1 이렇게 구하게 되는데 
이렇게 되는 경우 1,3의 케미점수는 계싼이 안되게 되는것이다! 
그래도 조합을 구하는것에 대해서는 다시한번 보고 가도록 하자.

그렇다면 조합을 구하는 함수를 따로 분리하고 
2개씩 뽑는 조합을 만들어서 그대로 한번 뒤집어서 한번씩 점수를 구하도록 로직을 바꾸면 답이 되겠다. 
우선 조합을 구하는 방식에 대해 연구중이었으니 그것을 마무리하고 넘어가서 진행하도록 하자. 

우선 기존 풀이에서는 함수 내에 다양한 기능을 하도록 되어 있으니 기능별로 분리해서 새로 작성해보도록 한다. 
*/
{
  const [n, ...matLines] = `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`
    .trim()
    .split('\n');
  const mat = matLines.map((v) => v.split(' ').map(Number));
  const backNums = getBackNumbers();
  const sTeamCombinations = [...getCombinations(backNums, n / 2)];
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
    const computeList = [...getCombinations(team, 2)];
    let ability = 0;
    computeList.forEach((pair) => {
      const [l, r] = pair;
      ability += mat[l][r] + mat[r][l];
    });
    return ability;
  }
}
/* 정답. 그러나 메모리를 많이 잡아먹었다. 비트마스크 부분에서 다시 배정이 되어있는것이 확인되고, 
바로 다음 문제가 시리즈인 문제이므로 차차 확인해보도록 하자. */

/* 점수 구하는 로직을 반복문 두개로 만들면 시간이 확 줄어든다. 
거의 5분의 1가량으로 줄어듬.
 */
{
  const [n, ...matLines] = `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`
    .trim()
    .split('\n');
  const mat = matLines.map((v) => v.split(' ').map(Number));
  const backNums = getBackNumbers();
  const sTeamCombinations = [...getCombinations(backNums, n / 2)];
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
    let ability = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
        ability += mat[team[i]][team[j]] + mat[team[j]][team[i]];
      }
    }
    return ability;
  }
}
/* 그렇다면 메모리 잡아먹는건, 제너레이터를 쓴 것이 원인인것 같다고 생각되는 바  
바꿔서 테스트 해보도록 한다. 

=> 바꾼게 더 오래걸린다. 다른 방법이 필요한듯. 
일단 스링 문제에서 점수 계산 부분만 바꿔서 제출해 보도록 한다. 
 */
